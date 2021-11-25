import axiosInstance from "../../axiosInstance";

export const register = async (data: any) => {
  try {
    return await axiosInstance.post(`/auth/register`, data);
  } catch (error) {
    return error;
  }
};
