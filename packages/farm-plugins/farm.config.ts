import { defineConfig } from '@farmfe/core'
import farmDtsPlugin from '@farmfe/js-plugin-dts'

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
    external: ['@farmfe/core', '@swc/core'],
    presetEnv: false
  },
  plugins: [
    farmDtsPlugin({
      tsConfigPath: './tsconfig.json'
    })
  ]
})
