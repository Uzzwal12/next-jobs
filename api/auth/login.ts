import axios from "axios";

export const login = async (data: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    return await axios.post(`${url}/auth/login`, data);
  } catch (error) {
    return error;
  }
};
