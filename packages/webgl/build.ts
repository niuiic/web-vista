import { readdirSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'
import { build } from 'vite'

let indexTemplate = `
interface Component {
  id: string
  title: string
  desc?: string
  category?: string
  tags?: string[]
  impl: () => React.JSX.Element
  code?: { label: string; filetype: string; content: string }[]
}
`
const components = readdirSync(join(process.cwd(), 'src/components'))
indexTemplate = components.map((x) => `import ${x} from './components/${x}'`).join('\n') + indexTemplate
indexTemplate = indexTemplate + `export default [${components.join(', ')}] as Component[]`

writeFileSync(join(process.cwd(), 'src/index.ts'), indexTemplate)

build().finally(() => unlinkSync(join(process.cwd(), 'src/index.ts')))
