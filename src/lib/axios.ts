import axios from "axios";
import Cookies from "js-cookie";

export const authApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

authApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    try {
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
          return Promise.reject(error);
        }
        const response = await authApi.post(refreshToken);
        const { accessToken: newAccessToken } = response.data;
        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authApi(originalRequest);
      }
    } catch (error) {
      console.log("removi o token");
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
