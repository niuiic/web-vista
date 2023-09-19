import type { UserConfig } from '@farmfe/core'
import postcss from '@farmfe/js-plugin-postcss'
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
  plugins: [
    [
      '@farmfe/plugin-react',
      {
        runtime: 'automatic'
      }
    ],
    '@farmfe/plugin-sass',
    postcss()
  ]
}

export default config
