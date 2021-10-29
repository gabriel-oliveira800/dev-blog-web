interface AuthStore {
  key: string;
  token: string;
}

abstract class ApplicationStore {
  static saveToken({ key, token }: AuthStore) {
    localStorage.setItem(key, token);
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
  }
}

export { ApplicationStore };
