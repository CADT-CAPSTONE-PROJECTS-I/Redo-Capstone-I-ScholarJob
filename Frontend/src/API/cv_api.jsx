import { axios, BASE_URL } from "../import/all_import.jsx";

export const cvClientApi = async (cvData, selectedImage) => {
  const formData = new FormData();

  Object.keys(cvData).forEach((key) => {
    formData.append(key, cvData[key]);
  });
  if (selectedImage) {
    formData.append("image", selectedImage);
  }

  sessionStorage.setItem("experience", cvData.experience);
  sessionStorage.setItem("hard_skill", cvData.hard_skill);
  sessionStorage.setItem("soft_skill", cvData.soft_skill);
  sessionStorage.setItem("position", cvData.position);

  // Log the sessionStorage variables
  console.log("Session Storage Values:");
  console.log("Experience:", sessionStorage.getItem("experience"));
  console.log("Hard Skill:", sessionStorage.getItem("hard_skill"));
  console.log("Soft Skill:", sessionStorage.getItem("soft_skill"));
  console.log("Position:", sessionStorage.getItem("position"));

  try {
    const response = await axios.post(`${BASE_URL}/cv/generate`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
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
    throw error;
  }
};

export const getRecommendationsApi = async () => {
  try {
    const experience = sessionStorage.getItem("experience");
    const hardSkill = sessionStorage.getItem("hard_skill");
    const softSkill = sessionStorage.getItem("soft_skill");
    const position = sessionStorage.getItem("position");

    // Log the retrieved sessionStorage values
    console.log("Retrieving from Session Storage:");
    console.log("Experience:", experience);
    console.log("Hard Skill:", hardSkill);
    console.log("Soft Skill:", softSkill);
    console.log("Position:", position);

    const response = await axios.post(`http://localhost:3000/content_based`, {
      category: position,
      skills: [hardSkill, softSkill, experience].join(", "),
    });

    console.log(response.data)

    return response.data;
  } catch (error) {
    throw error;
  }
};
