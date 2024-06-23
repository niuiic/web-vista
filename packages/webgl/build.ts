import { readdirSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'
import { build } from 'vite'

const entryFile = join(process.cwd(), 'src/index.ts')

let entryTemplate = `
interface Component {
  id: string
  title: string
  desc: string
  category: string
  tags?: string[]
  isStandard?: boolean
  impl: () => React.JSX.Element
  code?: { label: string; filetype: string; content: string }[]
}
`
const components = readdirSync(join(process.cwd(), 'src/components'))
entryTemplate = components.map((x) => `import ${x} from './components/${x}'`).join('\n') + entryTemplate
entryTemplate = entryTemplate + `export default [${components.join(', ')}] satisfies Component[]`

writeFileSync(entryFile, entryTemplate)

build().finally(() => unlinkSync(entryFile))
