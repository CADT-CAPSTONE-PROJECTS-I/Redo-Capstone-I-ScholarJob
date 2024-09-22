import { axios , BASE_URL } from "../import/all_import.jsx";

export const fetchTopUniversities = async () => {
  const response = await axios.get(`${BASE_URL}/scholarship/list`);
  return response.data.data;
};

export const fetchTopJobsHomepage = async () => {
  const response = await axios.get(`${BASE_URL}/job/list`);
  return response.data.data;
};

export const fetchTopOrgs = async () => {
  const response = await axios.get(`${BASE_URL}/organization/list`);
  return response.data.data;
};
