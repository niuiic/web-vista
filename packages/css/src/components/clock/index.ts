import { Clock } from './Clock.tsx'
import template from './Clock.tsx?raw'
import style from './clock.module.scss?raw'

export default {
  id: 'clock',
  title: 'clock',
  desc: 'Clock animation',
  category: 'css',
  tags: ['animation'],
  impl: Clock,
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
