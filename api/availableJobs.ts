import axios from "axios";

export const availableJobs = async (data: any, params: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const result = await axios.get(`${url}/candidates/jobs`, {
      headers: {
        Authorization: data.token,
      },
      params,
    });
    return result.data;
  } catch (error) {
    return error;
  }
};
