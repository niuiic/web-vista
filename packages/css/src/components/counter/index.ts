import style from './counter.module.scss?raw'
import { Counter } from './Counter.tsx'
import template from './Counter.tsx?raw'

export default {
  id: 'counter',
  title: 'counter',
  desc: 'css counter characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: Counter,
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
