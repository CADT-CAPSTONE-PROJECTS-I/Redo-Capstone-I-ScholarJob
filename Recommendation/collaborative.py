from config import *

def cf_recommend():
    data = request.get_json()
    job_index = data.get('job_index')

    if job_index is None:
        return jsonify({'error': 'Job index is required'}), 400

    # Check if the job exists in the dataset
    if job_index >= len(df_job) or job_index < 0:
        return jsonify({'error': 'Invalid job index'}), 400

    # Get number of similar jobs to return, default to 5
    num_similar = data.get('num_similar', 5)

    # Compute similarity scores for the job
    sim_scores = list(enumerate(cosine_sim[job_index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the indices of the most similar jobs (excluding the job itself)
    similar_jobs_indices = [i[0] for i in sim_scores[1:num_similar + 1]]

    # Get the corresponding jobs and return as JSON
    similar_jobs = df_job.iloc[similar_jobs_indices].to_dict(orient='records')

    return jsonify(similar_jobs)
  