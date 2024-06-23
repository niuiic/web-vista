import style from './jellyBox.module.scss?raw'
import { JellyBox } from './JellyBox.tsx'
import template from './JellyBox.tsx?raw'

export default {
  id: 'jellyBox',
  title: 'jelly box',
  desc: 'Jumping jelly box',
  category: 'css',
  tags: ['animation'],
  impl: JellyBox,
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
