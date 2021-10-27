import { api } from ".";

interface AuthStore {
  key: string;
  token: string;
}

abstract class ApplicationStore {
  saveToken({ key, token }: AuthStore) {
    localStorage.setItem(key, token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  removeToken({ key }: AuthStore) {
    localStorage.removeItem(key);
    api.defaults.headers.common["Authorization"] = "";
  }
}

export { ApplicationStore };
