import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { join } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// @ts-expect-error
import pxtorem from 'postcss-pxtorem'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command }) => {
  const buildOnlyPlugins =
    command === 'build'
      ? [dts({ exclude: ['vite.config.ts', 'vite.lib.config.ts', 'build.ts'] }), libAssetsPlugin(), libInjectCss()]
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
      port: 9002
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
      lib: {
        entry: join(process.cwd(), 'src/index.ts'),
        formats: ['es']
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]'
        },
        external: ['three', 'tween', 'react', 'react/jsx-runtime']
      }
    },
    minify: true
  }
})
