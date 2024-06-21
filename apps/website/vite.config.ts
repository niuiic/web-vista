import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { join } from 'path'
import removeComments from 'postcss-discard-comments'
// @ts-expect-error
import pxtorem from 'postcss-pxtorem'
import { defineConfig, loadEnv } from 'vite'
import { compression } from 'vite-plugin-compression2'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const buildOnlyPlugins =
    command === 'build'
      ? [
          compression(),
          ViteImageOptimizer(),
          legacy(),
          VitePWA({
            registerType: 'autoUpdate',
            manifest: { theme_color: '#ffffff' }
          })
        ]
      : []

  return {
    plugins: [react(), ...buildOnlyPlugins],
    server: {
      port: 9000
    },
    resolve: {
      alias: {
        '@': join(process.cwd(), 'src')
      },
      extensions: ['.ts', '.js', '.scss', '.css', '.json']
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            propList: ['*']
          }),
          removeComments({ removeAll: true })
        ]
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]'
        }
      }
    }
  }
})
