import { defineConfig } from '@farmfe/core'
import path from 'path'

export default defineConfig({
  compilation: {
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
