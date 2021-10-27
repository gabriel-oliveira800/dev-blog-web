import { api } from ".";

interface AuthStore {
  key: string;
  token: string;
}

abstract class ApplicationStore {
  static saveToken({ key, token }: AuthStore) {
    localStorage.setItem(key, token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  static getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  static isAuthenticated(key: string): boolean {
    const token = this.getToken(key);
    return token !== null;
  }

  static removeToken(key: string) {
    localStorage.removeItem(key);
    api.defaults.headers.common["Authorization"] = "";
  }
}

export { ApplicationStore };
