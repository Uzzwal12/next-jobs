import axios from 'axios';


const axiosConfiguration = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 30000,
  });
const axiosInstance = axiosConfiguration();
axiosInstance.interceptors.request.use(async (config) => {
  config.headers = {
    Accept: 'application/json',
    // Authorization: `Bearer ${get(state, "logInData.token", "")}`,
  };
  return config;
});
axiosInstance.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err.response);
  }
);
export default axiosInstance;