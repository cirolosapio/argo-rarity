/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RARITY_SNIPER_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}