import { axios , BASE_URL } from "../import/all_import.jsx";

export const fetchAboutData = async () => {
    const response = await axios.get(`${BASE_URL}/about-us`);
    return response.data; // Return the data
  };
  
  export const fetchTeamMembers = async () => {
    const response = await axios.get(`${BASE_URL}/team-members`);
    return response.data; // Return the data
  };