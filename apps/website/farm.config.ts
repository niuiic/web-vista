import { defineConfig } from '@farmfe/core'
import path from 'path'

export default defineConfig({
  compilation: {
    define: { __DEV__: process.env.NODE_ENV === 'development' },
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src')
      }
    },
    presetEnv: false,
    persistentCache: false
  },
  plugins: [
    [
      '@farmfe/plugin-react',
      {
        runtime: 'automatic'
      }
    ],
    '@farmfe/plugin-sass'
  ]
})
