import type { UserConfig } from '@farmfe/core'
import farmDtsPlugin from '@farmfe/js-plugin-dts'
import { builtinModules } from 'node:module'

const config: UserConfig = {
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
    external: [...builtinModules.map((x) => `^${x}$`), ...builtinModules.map((x) => `^node:${x}$`)],
    partialBundling: {
      enforceResources: [
        {
          name: 'index',
          test: ['.+']
        }
      ]
    },
    minify: false,
    sourcemap: false,
    presetEnv: false
  },
  plugins: [
    farmDtsPlugin({
      tsConfigPath: './tsconfig.json'
    })
  ]
}

export default config
