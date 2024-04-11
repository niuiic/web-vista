import { execSync } from 'child_process'
import { readdirSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'

let indexTemplate = `
interface Component {
  title: string
  desc: string
  category: string,
  tags?: string[]

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

execSync('pnpm farm build -c farm.config.build.ts', {
  stdio: 'inherit'
})

unlinkSync(join(process.cwd(), 'src/index.ts'))
