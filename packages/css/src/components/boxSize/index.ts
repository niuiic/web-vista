import style from './boxSize.module.scss?raw'
import { BoxSize } from './BoxSize.tsx'
import template from './BoxSize.tsx?raw'

export default {
  id: 'boxSize',
  title: 'box size',
  desc: 'css box size characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: BoxSize,
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
