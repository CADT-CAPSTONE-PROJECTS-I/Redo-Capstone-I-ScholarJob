import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const getJobs = async (filters = {}, page = 1, per_page = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/job/list`, {
      params: { ...filters, page, per_page }
    });
    console.log(response.data.data);
    return {
      jobs: response.data.data,
      total: response.data.total
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return { jobs: [], total: 0 };
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
