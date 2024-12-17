import axios from "axios";
import router from "../router";

export const http = axios.create({
  baseURL: "/posts"
});
export default {
  install(app) {
    http.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
    http.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
};
