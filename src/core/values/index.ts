abstract class Strings {
  static token = "@application:session";
  static favorites = "@application:favorites";
  static splitGitHubCode = "?code=";
  static redirectLinkToLoginWithGitHub = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_GITHUB_CLIENT_ID
  }`;
}

abstract class AppRoutes {
  static home = "/";
  static login = "/login";
  static profile = "/profile";
  static createFeed = "/criar";
  static notFound = "*";
}

export { Strings, AppRoutes };
