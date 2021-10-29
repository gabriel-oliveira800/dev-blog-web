import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
});

const addTokenToHeader = (token: string) =>
  (api.defaults.headers.common.authorization = `Bearer ${token}`);

export { api, addTokenToHeader };
