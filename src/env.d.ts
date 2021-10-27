interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_GITHUB_CLIENT_ID: string;
  readonly VITE_VITE_GITHUB_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
