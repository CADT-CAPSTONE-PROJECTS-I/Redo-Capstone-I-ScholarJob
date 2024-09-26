import pandas as pd
import logging
import pymysql
from sqlalchemy import create_engine
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import OneHotEncoder
from nltk.corpus import stopwords
from scipy.sparse import hstack
from flask import request, jsonify

# Establish a connection to your MySQL database
db_connection_str = 'mysql+pymysql://root:@localhost/re_capstone1'
db_connection = create_engine(db_connection_str)

# Load your dataset directly from the MySQL database
df_job = pd.read_sql('SELECT * FROM jobs', con=db_connection)
df_category = pd.read_sql('SELECT * FROM categories', con=db_connection)


if 'category_id' not in df_job.columns:
    df_job['category_id'] = None  # or np.nan if you prefer NaN

# Now merge df_job with df_category using a left join
df_job = pd.merge(
    df_job, 
    df_category, 
    how='left',                # Use a left join to retain all jobs, even if there's no matching category
    left_on='category_id',      # Match the 'category_id' from df_job
    right_on='id',              # Match the 'id' from df_category
    suffixes=('_job', '_category')  # Add suffixes to distinguish columns with the same name
)

# Check for NaN values and handle them
df_job['responsible'] = df_job['responsible'].fillna('')
df_job['description'] = df_job['description'].fillna('')
df_job['title_category'] = df_job['title_category'].fillna('')
df_job['job_type'] = df_job['job_type'].fillna('')
df_job['qualification'] = df_job['qualification'].fillna('')
df_job['experience'] = df_job['experience'].fillna('')

# Ensure that all columns used in concatenation are strings
df_job['title_job'] = df_job['title_job'].astype(str)
df_job['qualification'] = df_job['qualification'].astype(str)
df_job['description'] = df_job['description'].astype(str)
df_job['responsible'] = df_job['responsible'].astype(str)
df_job['experience'] = df_job['experience'].astype(str)
df_job['job_type'] = df_job['job_type'].astype(str)
df_job['title_category'] = df_job['title_category'].astype(str)

# Define stopwords
stop_words = set(stopwords.words('english'))

def remove_stopwords(text):
    """Remove stopwords from the input text."""
    words = text.split()
    cleaned_words = [word for word in words if word.lower() not in stop_words]
    return ' '.join(cleaned_words)

def remove_duplicate_words(text):
    """Function to remove duplicate words from a string."""
    words = text.split()  # Split the text into words
    seen = set()  # Track words we've seen
    result = []   # To store words without duplicates

    for word in words:
        # Add the word to the result if not already seen
        if word.lower() not in seen:
            result.append(word)
            seen.add(word.lower())  # Track the word in lowercase

    return ' '.join(result)

# Combine text features and remove stopwords
df_job['cbf_features'] = (df_job['title_job'] + ' ' + df_job['qualification'] + ' ' 
                        + df_job['description'] + ' ' + df_job['responsible'] + ' ' + df_job['experience'])

df_job['cf_features'] = (df_job['title_job'] + ' ' + df_job['responsible'] + ' ' + df_job['job_type'] 
                        + ' ' + df_job['title_category'] + ' ' + df_job['description'] + ' ' 
                        + df_job['qualification'] + ' ' + df_job['experience'])

# Apply remove_stopwords function
df_job['cbf_features'] = df_job['cbf_features'].apply(remove_stopwords)
df_job['cf_features'] = df_job['cf_features'].apply(remove_stopwords)

# Find duplicate words in the combined text features
df_job['cbf_features'] = df_job['cbf_features'].apply(remove_duplicate_words)
df_job['cf_features'] = df_job['cf_features'].apply(remove_duplicate_words)

# Preprocess and vectorize
cbf_vectorizer = TfidfVectorizer()
cbf_tfidf_matrix = cbf_vectorizer.fit_transform(df_job['cbf_features'])

cf_vectorizer = TfidfVectorizer()
cf_tfidf_matrix = cf_vectorizer.fit_transform(df_job['cf_features'])

# One-hot encode categorical data
onehot_encoder = OneHotEncoder()
category_onehot = onehot_encoder.fit_transform(df_job[['title_category', 'job_type']])
combined_matrix = hstack([cf_tfidf_matrix, category_onehot])

# Compute cosine similarity
cosine_sim = cosine_similarity(combined_matrix)
