import type { JsPlugin, UserConfig } from '@farmfe/core'
import autoprefixer from 'autoprefixer'
import { createRequire } from 'module'
import postcss from 'postcss'

const sassImpl = import(createRequire(import.meta.url).resolve('sass-embedded'))

export const farmSassPlugin = (): JsPlugin => {
  let farmConfig: UserConfig['compilation']

  return {
    name: 'farm-sass-plugin',
    configResolved: (args) => {
      farmConfig = args.compilation
    },
    load: {
      filters: {
        resolvedPaths: ['\\.scss$', '\\.sass$']
      },
      executor: async (args) =>
        await sassImpl
          .then((x) => x.compile(args.resolvedPath).css)
          .then((x) =>
            postcss([autoprefixer]).process(x, {
              from: args.resolvedPath
            })
          )
          .then((x) => x.css)
          .catch((e) => {
            console.error(e)
            return ''
          })
          .then((x) => ({ content: x, moduleType: 'sass-css' }))
    },
    transform: {
      filters: {
        moduleTypes: ['sass-css']
      },
      executor: (args, ctx) => {
        if (farmConfig?.mode === 'development') {
          ctx?.addWatchFile(args.resolvedPath, args.resolvedPath)
        }

        return { content: 'export default' + '`' + args.content.replace(/`/g, '\\`') + '`', moduleType: 'js' }
      }
    }
  }
}
