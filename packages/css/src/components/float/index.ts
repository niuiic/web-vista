import style from './float.module.scss?raw'
import { Float } from './Float.tsx'
import template from './Float.tsx?raw'

export default {
  id: 'float',
  title: 'float',
  desc: 'css float characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: Float,
  code: [
    {
      label: 'template',
      filetype: 'typescript',
      content: template
    },
    {
      label: 'style',
      filetype: 'scss',
      content: style
    }
  ]
} satisfies Component
