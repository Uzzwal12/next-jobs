import axios from "axios";

export const register = async (data: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL

  try {
    return await axios.post(`${url}/auth/register`, data);
  } catch (error) {
    return error;
  }
};
