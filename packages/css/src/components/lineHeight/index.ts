import style from './lineHeight.module.scss?raw'
import { LineHeight } from './LineHeight.tsx'
import template from './LineHeight.tsx?raw'

export default {
  id: 'lineHeight',
  title: 'line-height',
  desc: 'css line-height characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: LineHeight,
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
