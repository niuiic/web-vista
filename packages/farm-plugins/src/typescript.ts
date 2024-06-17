import type { JsPlugin, UserConfig } from '@farmfe/core'
import { transformFile } from '@swc/core'

export const farmTypescriptPlugin = (): JsPlugin => {
  let farmConfig: UserConfig['compilation']

  return {
    name: 'farm-typescript-plugin',
    load: {
      filters: {
        resolvedPaths: ['\\?js']
      },
      executor: (args) =>
        transformFile(args.resolvedPath, {
          jsc: {
            target: 'esnext'
          },
          minify: true
        })
          .then((x) => ({ content: x.code, moduleType: 'ts-js' }))
          .catch(() => ({ content: '', moduleType: 'ts-js' }))
    },
    configResolved: (args) => {
      farmConfig = args.compilation
    },
    transform: {
      filters: {
        moduleTypes: ['ts-js']
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
