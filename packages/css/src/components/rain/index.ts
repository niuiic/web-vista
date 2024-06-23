import { Rain } from './Rain.tsx'
import template from './Rain.tsx?raw'
import style from './rain.module.scss?raw'

export default {
  id: 'rain',
  title: 'rain',
  desc: 'Rain animation',
  category: 'css',
  tags: ['animation'],
  impl: Rain,
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
