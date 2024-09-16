import { appStore, axios } from "../import/all_import.jsx";

const BASE_URL = "http://localhost:8000/api";

export const cvClientApi = async (cvData, selectedImage) => {
  const formData = new FormData();

  Object.keys(cvData).forEach((key) => {
    formData.append(key, cvData[key]);
  });
  if (selectedImage) {
    formData.append("image", selectedImage);
  }
  try {
    const response = await axios.post(`${BASE_URL}/cv/generate`, formData, {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting CV data:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "CV submission failed" };
  }
};

export const getDataCVApi = async () => {
  try {
    const token = sessionStorage.getItem('token'); 
    if (!token) {
      throw new Error('No authentication token found.');
    }

    const response = await axios.get(`${BASE_URL}/cv/show`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching CV data:', error.response?.data || error.message);
    throw error;
  }
};