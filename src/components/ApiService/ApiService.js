import axios from "axios";

const SECRETS = {
  API_BASE_URL: "http://localhost:5000",
};

export default SECRETS;
const api = axios.create({
  baseURL: SECRETS.API_BASE_URL,
});

export const ApiPost = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
