export const useAsset = (path: string): string => new URL(`/src/asset/${path}`, import.meta.url).href
