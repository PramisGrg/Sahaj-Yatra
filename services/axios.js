import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYnVzT3duZXIiLCJpZCI6IjY1YmE3NzNmMmZjYmQwN2I5YzRiMDg0YSIsImlhdCI6MTcwODcxMjI0NCwiZXhwIjoxNzA4Nzk4NjQ0fQ.3gLGtFsC1BLrmdeqviEaU7XaonxNeg_qtEEJ95la9CE`,
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
export { axiosAuthInstance };
