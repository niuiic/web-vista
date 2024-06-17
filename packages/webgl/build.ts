import { transformFile } from '@swc/core'
import { join } from 'path'

const file = join(process.cwd(), 'src', 'components', 'snow', 'impl.ts')

transformFile(file, {
  jsc: {}
}).then((x) => {
  console.log(x.code)
})
