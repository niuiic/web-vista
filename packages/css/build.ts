import { build } from '@farmfe/core'
import { readdirSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'

let indexTemplate = `
interface Component {
  id: string
  title: string
  desc: string
  category: string,
  tags?: string[]
  isStandard?: boolean

  html: string
  css?: string
  js?: string

  code: {
    label: string
    filetype: string
    content: string
  }[]
}
`
const components = readdirSync(join(process.cwd(), 'src/components'))
indexTemplate = components.map((x) => `import ${x} from './components/${x}'`).join('\n') + indexTemplate
indexTemplate = indexTemplate + `export default [${components.join(', ')}] as Component[]`

writeFileSync(join(process.cwd(), 'src/index.ts'), indexTemplate)

build({
  configPath: join(process.cwd(), 'farm.config.build.ts')
}).finally(() => {
  unlinkSync(join(process.cwd(), 'src/index.ts'))
})
