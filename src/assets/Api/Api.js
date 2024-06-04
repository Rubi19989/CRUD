import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    timeout: 1000,
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
  }
  return config;
});

export { api };