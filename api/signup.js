import axiosInstance from "../axiosInstance";

export const register = async (data) => {
  try {
    return await axiosInstance.post(`/auth/register`, data);
  } catch (error) {
    return error;
  }
};
