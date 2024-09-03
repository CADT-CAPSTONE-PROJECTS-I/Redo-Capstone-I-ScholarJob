import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const fetchScholarships = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/scholarship/list`); 
    // console.log('Scholarships:', response.data);
    return response.data || []; // Ensure you're accessing the correct property
  } catch (error) {
    console.error('Error fetching scholarships:', error.response?.data || error.message);
    return []; // Return an empty array in case of an error
  }
};

export const ScholarshipDetails = async (scholarshipId) => {
  try {
    const response = await axios.get(`${BASE_URL}/scholarship/detail/${scholarshipId}`);
    console.log('Scholarship Detail:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching scholarship detail:', error.response?.data || error.message);
    return null;
  }
};

export const getOrganizationAddresses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/organization-addresses`);
    console.log('Organization Addresses:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching organization addresses:', error.response?.data || error.message);
    return [];
  }
};
