import { Fire } from './Fire.tsx'
import template from './Fire.tsx?raw'
import style from './fire.module.scss?raw'

export default {
  id: 'fire',
  title: 'fire',
  desc: 'Fire animation',
  category: 'css',
  tags: ['animation'],
  impl: Fire,
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
