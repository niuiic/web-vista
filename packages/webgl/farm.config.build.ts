import { defineConfig } from '@farmfe/core'
import dts from '@farmfe/js-plugin-dts'
import { farmRawPlugin, farmSassPlugin, farmTypescriptPlugin } from 'farm-plugins'
import { join } from 'path'

export default defineConfig({
  compilation: {
    input: {
      index: './src/index.ts'
    },
    output: {
      entryFilename: 'index.mjs',
      targetEnv: 'browser',
      format: 'esm'
    },
    resolve: {
      alias: {
        '@/': join(process.cwd(), 'src')
      }
    },
    presetEnv: false,
    external: ['three']
  },
  plugins: [
    farmSassPlugin(),
    farmRawPlugin(),
    farmTypescriptPlugin(),
    dts({
      tsConfigPath: './tsconfig.json'
    })
  ]
})
