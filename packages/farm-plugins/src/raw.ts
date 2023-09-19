import type { DevServer, JsPlugin, UserConfig } from '@farmfe/core'
import { promises } from 'fs'

export const farmRawPlugin = (fileSuffixes: string[]): JsPlugin => {
  let farmConfig: UserConfig['compilation']
  let devServer: DevServer

  return {
    name: 'raw-resolve-plugin',
    config: (args) => (farmConfig = args),
    configDevServer: (args) => (devServer = args),
    load: {
      filters: {
        resolvedPaths: fileSuffixes.map((x) => `\\.${x}$`)
      },
      executor: async (args) => {
        const content = await promises.readFile(args.resolvedPath, 'utf8')
        return {
          content,
          moduleType: 'raw'
        }
      }
    },
    transform: {
      filters: {
        moduleTypes: ['raw']
      },
      executor: (args) => {
        if (farmConfig?.mode === 'development') {
          devServer?.addWatchFile(args.resolvedPath, [])
        }
        return { content: 'export default' + '`' + args.content + '`', moduleType: 'js' }
      }
    }
  }
}
