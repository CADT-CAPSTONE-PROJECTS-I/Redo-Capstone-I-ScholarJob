import pandas as pd
import logging
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import OneHotEncoder
from nltk.corpus import stopwords
from scipy.sparse import hstack
from flask import request, jsonify

# Load your dataset
df = pd.read_csv('App/job_dataset.csv')

# Check for NaN values and handle them
df['Requirements'] = df['Requirements'].fillna('')
df['Responsibilities'] = df['Responsibilities'].fillna('')
df['Descriptions'] = df['Descriptions'].fillna('')

# Define stopwords
stop_words = set(stopwords.words('english'))

def remove_stopwords(text):
    """Remove stopwords from the input text."""
    words = text.split()
    cleaned_words = [word for word in words if word.lower() not in stop_words]
    return ' '.join(cleaned_words)

# Combine text features and remove stopwords
df['cbf_features'] = (
    df['Descriptions'] + ' ' + df['Requirements'] + ' ' + df['Responsibilities'] + ' ' + df['Category']
)
df['cf_features'] = (
    df['Title'] + ' ' + df['Descriptions'] + ' ' + df['Responsibilities'] +
    ' ' + df['Requirements'] + ' ' + df['Category'] + ' ' + df['Job_Type']
)

# Apply remove_stopwords function
df['cbf_features'] = df['cbf_features'].apply(remove_stopwords)
df['cf_features'] = df['cf_features'].apply(remove_stopwords)

# Preprocess and vectorize
cbf_vectorizer = TfidfVectorizer()
cbf_tfidf_matrix = cbf_vectorizer.fit_transform(df['cbf_features'])

cf_vectorizer = TfidfVectorizer()
cf_tfidf_matrix = cf_vectorizer.fit_transform(df['cf_features'])

# One-hot encode categorical data
onehot_encoder = OneHotEncoder()
category_onehot = onehot_encoder.fit_transform(df[['Category', 'Job_Type']])
combined_matrix = hstack([cf_tfidf_matrix, category_onehot])

# Compute cosine similarity
cosine_sim = cosine_similarity(combined_matrix)
