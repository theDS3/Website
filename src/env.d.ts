/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DEPLOY_MODE: 'production' | 'development';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
