import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { join } from 'path'
// @ts-expect-error
import pxtorem from 'postcss-pxtorem'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig(({ command }) => {
  const buildOnlyPlugins =
    command === 'build'
      ? [
          ViteImageOptimizer(),
          dts({
            exclude: ['vite.config.ts', 'vite.lib.config.ts', 'build.ts']
          })
        ]
      : []

  const postcssPlugins =
    command === 'serve'
      ? [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            propList: ['*']
          })
        ]
      : undefined

  return {
    plugins: [react(), ...buildOnlyPlugins],
    server: {
      port: 9001
    },
    resolve: {
      alias: {
        '@': join(process.cwd(), 'src')
      },
      extensions: ['.ts', '.js', '.scss', '.css', '.json']
    },
    css: {
      postcss: {
        plugins: postcssPlugins
      }
    },
    build: {
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]'
        },
        external: ['three', 'tween', 'react']
      }
    },
    minify: true,
    lib: {
      entry: join(process.cwd(), 'src/index.ts'),
      formats: ['es']
    }
  }
})
