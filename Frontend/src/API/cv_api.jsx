import { axios } from "../import/all_import.jsx";

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
    const response = await axios.post(`${BASE_URL}/generate/cv`, formData, {
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
    const response = await fetch('http://localhost:8000/api/cv/show');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      ...data,
      profilePicture: data.profilePicture ? `http://localhost:8000/${data.profilePicture}` : null
    };
  } catch (error) {
    console.error('Error fetching CV data:', error);
    return null;
  }
};