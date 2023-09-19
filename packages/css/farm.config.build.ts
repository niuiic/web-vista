import type { UserConfig } from '@farmfe/core'
import dts from '@farmfe/js-plugin-dts'
import { farmRawPlugin, farmSassPlugin } from 'farm-plugins'
import { readdirSync } from 'fs'
import { join } from 'path'

const chunks = readdirSync(join(process.cwd(), 'src/components')).map((x) => ({
  name: x,
  test: [`src/components/${x}/.*`]
}))

const config: UserConfig = {
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
    partialBundling: {
      enforceResources: chunks
    },
    minify: true,
    sourcemap: false,
    presetEnv: false
  },
  plugins: [
    farmSassPlugin(),
    farmRawPlugin(),
    dts({
      tsConfigPath: './tsconfig.json'
    })
  ]
}

export default config
