/// <reference types="vite/client" />

type ImportMetaEnv = {
    readonly VITE_BASE_API_REQUEST_URL: string;
}

type ImportMeta = {
    readonly env: ImportMetaEnv;
}
