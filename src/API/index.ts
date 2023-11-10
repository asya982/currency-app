import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://${process.env.REACT_APP_API}/`,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: `${process.env.REACT_APP_API_ID}`,
    password: `${process.env.REACT_APP_API_KEY}`,
  },
});

export const baseRequest = async (requestFunction: () => Promise<any>) => {
  try {
    return await requestFunction();
  } catch (error: any) {
    throw error.response?.data;
  }
};
