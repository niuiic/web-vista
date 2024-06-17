import { defineConfig } from '@farmfe/core'
import farmDtsPlugin from '@farmfe/js-plugin-dts'
import { builtinModules } from 'node:module'

export default defineConfig({
  compilation: {
    input: {
      index: 'src/index.ts'
    },
    output: {
      path: 'dist',
      entryFilename: '[entryName].cjs',
      targetEnv: 'node',
      format: 'cjs'
    },
    external: [
      ...builtinModules.map((x) => `^${x}$`),
      ...builtinModules.map((x) => `^node:${x}$`),
      '@farmfe/core',
      '@swc/core'
    ],
    presetEnv: false
  },
  plugins: [
    farmDtsPlugin({
      tsConfigPath: './tsconfig.json'
    })
  ]
})
