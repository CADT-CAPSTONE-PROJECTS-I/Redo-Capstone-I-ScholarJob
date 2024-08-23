import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; 

export const getJobs = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/job/list`, { params: filters });
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
