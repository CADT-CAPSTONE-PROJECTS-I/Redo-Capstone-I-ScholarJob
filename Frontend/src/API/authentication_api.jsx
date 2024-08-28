import { axios } from "../import/all_import.jsx";

const BASE_URL = 'http://localhost:8000/api';

export const registerClient = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering client:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Registration failed' };
  }
};

export const loginClient = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      throw error.response?.data || { message: 'Login failed' };
    }
  };