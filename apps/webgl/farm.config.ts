import type { UserConfig } from '@farmfe/core'
import { builtinModules } from 'node:module'
import path from 'path'

const config: UserConfig = {
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src')
      }
    },
    external: [...builtinModules.map((x) => `^${x}$`), ...builtinModules.map((x) => `^node:${x}$`)],
    partialBundling: {
      enforceResources: [
        {
          name: 'index.js',
          test: ['.+']
        }
      ]
    },
    minify: false,
    sourcemap: false,
    presetEnv: false,
    output: {
      assetsFilename: 'assets/[resourceName].[hash].[ext]'
    },
    assets: {
      include: ['frag', 'vert']
    }
  }
}

export default config
