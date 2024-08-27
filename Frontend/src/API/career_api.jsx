import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const getJobs = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/job/list`, { params: filters });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const getJobDetail = async (jobId) => {
  try {
    const response = await axios.get(`${BASE_URL}/job/detail/${jobId}`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching job detail:', error);
    return null;
  }
};

export const getOrganizationAddresses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/organization-addresses`);
    console.log(response.data.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching organization addresses:', error);
    return [];
  }
};
