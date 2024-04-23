import type { JsPlugin, UserConfig } from '@farmfe/core'
import { createRequire } from 'module'

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
      executor: async (args) => ({
        content: (await sassImpl).compile(args.resolvedPath).css as string,
        moduleType: 'sass-css'
      })
    },
    transform: {
      filters: {
        moduleTypes: ['sass-css']
      },
      executor: async (args, ctx) => {
        if (farmConfig?.mode === 'development') {
          ctx?.addWatchFile(args.resolvedPath, args.resolvedPath)
        }

        return { content: 'export default' + '`' + args.content + '`', moduleType: 'js' }
      }
    }
  }
}
