import type { JsPlugin, Server, UserConfig } from '@farmfe/core'
import { readFileSync } from 'fs'

export const farmRawPlugin = (): JsPlugin[] => {
  let farmConfig: UserConfig['compilation']
  let devServer: Server

  return [
    {
      name: 'farm-raw-plugin-load',
      priority: 1000,
      load: {
        filters: {
          resolvedPaths: ['\\?raw']
        },
        executor: async (args) => ({ content: readFileSync(args.resolvedPath, 'utf8'), moduleType: 'raw' })
      }
    },
    {
      name: 'farm-raw-plugin-transform',
      priority: -1000,
      config: (args) => (farmConfig = args.compilation),
      configDevServer: (args) => (devServer = args),
      transform: {
        filters: {
          moduleTypes: ['raw']
        },
        executor: (args) => {
          if (farmConfig?.mode === 'development') {
            devServer?.addWatchFile(args.resolvedPath, [])
          }

          return { content: 'export default ' + '`' + args.content + '`', moduleType: 'js' }
        }
      }
    }
  ]
}
