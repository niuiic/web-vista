import type { UserConfig } from '@farmfe/core'
import { farmRawPlugin, farmSassPlugin } from 'farm-plugins'
import path from 'path'

const config: UserConfig = {
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src')
      }
    },
    minify: false,
    sourcemap: true,
    presetEnv: false,
    lazyCompilation: true
  },
  plugins: [farmSassPlugin(), farmRawPlugin()]
}

export default config
