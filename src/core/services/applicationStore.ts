import { Strings } from "../values";
import { api } from "./api";

abstract class ApplicationStore {
  //TODO: Could create a singleton from "api" to avoid calling this method multiple times
  static setupToAddTokenInApiClientHeader(): boolean {
    const token = this.getToken();
    if (token === null) {
      return false;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return true;
  }

  static handleLogout() {
    api.defaults.headers.common.authorization = "";
    this.removeToken();
  }

  static saveToken(token: string) {
    localStorage.setItem(Strings.token, token);
    this.setupToAddTokenInApiClientHeader();
  }

  static getToken(): string | null {
    return localStorage.getItem(Strings.token);
  }

  static isAuthenticated(key: string): boolean {
    const token = this.getToken();
    return token !== null;
  }

  static removeToken() {
    localStorage.removeItem(Strings.token);
  }
}

export { ApplicationStore };
