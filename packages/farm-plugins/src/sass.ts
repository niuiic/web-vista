import type { DevServer, JsPlugin, UserConfig } from '@farmfe/core'
import { createRequire } from 'module'

const sassImpl = import(createRequire(import.meta.url).resolve('sass-embedded'))

export const farmSassPlugin = (): JsPlugin => {
  let farmConfig: UserConfig['compilation']
  let devServer: DevServer

  return {
    name: 'farm-sass-plugin',
    config: (args) => (farmConfig = args),
    configDevServer: (args) => (devServer = args),
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
      executor: (args) => {
        if (farmConfig?.mode === 'development') {
          devServer?.addWatchFile(args.resolvedPath, [])
        }

        return { content: 'export default' + '`' + args.content + '`', moduleType: 'js' }
      }
    }
  }
}
