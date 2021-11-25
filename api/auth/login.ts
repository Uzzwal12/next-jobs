import axiosInstance from "../../axiosInstance";

export const login = async (data: any) => {
  try {
    return await axiosInstance.post(`/auth/login`, data);
  } catch (error) {
    return error;
  }
};
