import axios from "axios";
import { getCookies } from "cookies-next";

const token = getCookies("token");
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application-json",
  },
});

const axiosAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application-json",
  },
});

export default axiosInstance;
export { axiosAuthInstance };
