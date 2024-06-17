import { defineConfig } from '@farmfe/core'
import { farmRawPlugin, farmSassPlugin, farmTypescriptPlugin } from 'farm-plugins'
import path from 'path'

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src')
      }
    },
    persistentCache: false
  },
  plugins: [farmSassPlugin(), farmRawPlugin(), farmTypescriptPlugin()]
})
