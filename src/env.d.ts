interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  readonly VITE_GITHUB_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
