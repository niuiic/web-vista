import { defineConfig } from '@farmfe/core'
import dts from '@farmfe/js-plugin-dts'
import { farmRawPlugin, farmSassPlugin } from 'farm-plugins'
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
    presetEnv: false
  },
  plugins: [
    farmSassPlugin(),
    farmRawPlugin(),
    dts({
      tsConfigPath: './tsconfig.json'
    })
  ]
})
