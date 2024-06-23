import style from './anonymousBlockBox.module.scss?raw'
import { AnonymousBlockBox } from './AnonymousBlockBox.tsx'
import template from './AnonymousBlockBox.tsx?raw'

export default {
  id: 'anonymousBlockBox',
  title: 'anonymous block box',
  desc: 'how anonymous boxes are generated',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: AnonymousBlockBox,
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
