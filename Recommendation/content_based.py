from config import *

def cbf_recommend():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No JSON data received'}), 400

    user_skills = data.get('skills', '')  # Default to an empty string if not provided
    user_category = data.get('category', '')  # Default to an empty string if not provided
    top_n = data.get('top_n', 10)

    # Ensure at least one of skills or category is provided
    if not user_skills and not user_category:
        return jsonify({'error': 'At least one of skills or category is required'}), 400

    try:
        # Combine user skills and category to create the input text
        user_input = f'{user_skills} {user_category}'.strip()  # Avoid extra spaces

        # Ensure stopwords are removed from user input
        user_input_cleaned = remove_stopwords(user_input)

        # Transform the user input using the same TF-IDF vectorizer trained on the job dataset
        user_vector = cbf_vectorizer.transform([user_input_cleaned])

        # Compute cosine similarity between the user input vector and job dataset vectors
        cosine_similarities = cosine_similarity(user_vector, cbf_tfidf_matrix).flatten()

        # Get the indices of the top N most similar jobs
        recommended_indices = cosine_similarities.argsort()[::-1][:top_n]
        
        # Fetch the job data for the recommended indices
        recommended_jobs = df_job.iloc[recommended_indices].to_dict(orient='records')

        if not recommended_jobs:
            return jsonify({'error': 'No recommendations found.'}), 404
        
        return jsonify(recommended_jobs)

    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500
  