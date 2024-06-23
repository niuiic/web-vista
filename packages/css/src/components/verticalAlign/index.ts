import style from './verticalAlign.module.scss?raw'
import { VerticalAlign } from './VerticalAlign.tsx'
import template from './VerticalAlign.tsx?raw'

export default {
  id: 'verticalAlign',
  title: 'vertical-align',
  desc: 'css vertical-align characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: VerticalAlign,
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
