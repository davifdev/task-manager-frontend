import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Beare ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
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
        const response = await api.post("/refresh-token", { refreshToken });
        const { accessToken: newAccessToken } = response.data;
        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    } catch (error) {
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    }
  }
);
