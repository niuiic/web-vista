import { defineConfig } from '@farmfe/core'
import postcss from '@farmfe/js-plugin-postcss'
import path from 'path'

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src')
      }
    },
    presetEnv: false
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
})
