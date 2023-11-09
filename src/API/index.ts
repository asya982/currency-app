import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}latest?access_key=${process.env.REACT_APP_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const baseRequest = async (requestFunction: () => Promise<any>) => {
  try {
    return await requestFunction();
  } catch (error: any) {
    throw error.response?.data;
  }
};
