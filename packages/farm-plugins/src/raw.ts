import type { JsPlugin, UserConfig } from '@farmfe/core'
import { readFile } from 'fs'

export const farmRawPlugin = (): JsPlugin[] => {
  let farmConfig: UserConfig['compilation']

  return [
    {
      name: 'farm-raw-plugin-load',
      priority: 1000,
      load: {
        filters: {
          resolvedPaths: ['\\?raw']
        },
        executor: async (args) => ({
          content: await new Promise<string>((resolve) => {
            readFile(args.resolvedPath, undefined, (_, data) => {
              resolve(data.toString())
            })
          }),
          moduleType: 'raw'
        })
      }
    },
    {
      name: 'farm-raw-plugin-transform',
      priority: -1000,
      configResolved: (args) => {
        farmConfig = args.compilation
      },
      transform: {
        filters: {
          moduleTypes: ['raw']
        },
        executor: (args, ctx) => {
          if (farmConfig?.mode === 'development') {
            ctx?.addWatchFile(args.resolvedPath, args.resolvedPath)
          }

          return { content: 'export default ' + '`' + args.content.replace(/`/g, '\\`') + '`', moduleType: 'js' }
        }
      }
    }
  ]
}
