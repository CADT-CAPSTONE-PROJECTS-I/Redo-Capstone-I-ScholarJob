import { axios, appStore, BASE_URL } from "../import/all_import.jsx";


export const registerClient = async (formData) => {
  
  try {
    const response = await axios.post(`${BASE_URL}/register`, formData);
    
    const { token, id } = response.data;
    
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('clientId', id);

    return response.data;
  } catch (error) {
    console.error('Error registering client:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Registration failed' };
  }
};

export const loginClient = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, formData);
    const { token, client_id } = response.data;
    
    sessionStorage.setItem('token', token); 
    sessionStorage.setItem('clientId', client_id);
    
    appStore.setState({ token, client_id });

    console.log('Stored token:', sessionStorage.getItem('token'));
    console.log('Stored clientId:', sessionStorage.getItem('clientId'));

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Login failed' };
  }
};
