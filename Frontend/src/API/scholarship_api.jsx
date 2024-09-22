import { axios , BASE_URL } from "../import/all_import.jsx";

export const fetchScholarships = async (currentPage, itemsPerPage, query) => {
    try {
      const response = await axios.get(`${BASE_URL}/scholarship/list`, {
        params: {
          page: currentPage,
          per_page: itemsPerPage,
          search: query,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export const submitApplication = async (clientId, scholarshipId, status, file) => {
    const formData = new FormData();
    formData.append("client_id", clientId);
    formData.append("scholarship_id", scholarshipId);
    formData.append("status", status);
    formData.append("attach_file", file);
  
    const response = await axios.post(`${BASE_URL}/application/store`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    return response.data;
  };

  export const fetchOrganizationDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/organization/detail/${id}`);
    return response.data;
  };

  export const fetchScholarshipDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/scholarship/detail/${id}`);
    return response.data;
  };

  export const fetchTopOrganizations = async () => {
    const response = await axios.get(`${BASE_URL}/organization/list`);
    return response.data.data; // Return the data array
  };

  export const fetchTopScholarships = async () => {
    const response = await axios.get(`${BASE_URL}/scholarship/list`);
    return response.data.data; // Return the data array
  };