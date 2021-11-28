import { useHistory } from "react-router-dom";
import axios from "axios";

import { ApplicationStore } from "./applicationStore";
import { AppRoutes } from "../values";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.message.includes("412")) {
      ApplicationStore.handleLogout();
      useHistory().push(AppRoutes.login);
    }
    return Promise.reject(error);
  }
);

export { api };
