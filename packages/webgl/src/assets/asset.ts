export const asset = (path: string): string => new URL(`/src/assets/${path}`, import.meta.url).href
