import style from './absolute.module.scss?raw'
import { Absolute } from './Absolute.tsx'
import template from './Absolute.tsx?raw'

export default {
  id: 'absolute',
  title: 'absolute',
  desc: 'css absolute characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: Absolute,
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
