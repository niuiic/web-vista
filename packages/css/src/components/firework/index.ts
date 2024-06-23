import style from './firework.module.scss?raw'
import { Firework } from './Firework.tsx'
import template from './Firework.tsx?raw'

export default {
  id: 'firework',
  title: 'firework',
  desc: 'Firework animation.',
  category: 'css',
  tags: ['animation'],
  impl: Firework,
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
