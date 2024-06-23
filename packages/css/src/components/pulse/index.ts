import { Pulse } from './Pulse.tsx'
import template from './Pulse.tsx?raw'
import style from './pulse.module.scss?raw'

export default {
  id: 'pulse',
  title: 'pulse',
  desc: 'Simple loading icon.',
  category: 'css',
  tags: ['animation'],
  impl: Pulse,
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
