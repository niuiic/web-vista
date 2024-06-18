export const injectAssets = (source: string, assets: Record<string, string>) => {
  const prefix = Object.entries(assets).map(([variable, url]) => `const ${variable}='${url}';`)
  return prefix + source
}
