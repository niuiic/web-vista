import { Dice } from './Dice.tsx'
import template from './Dice.tsx?raw'
import style from './dice.module.scss?raw'

export default {
  id: 'dice',
  title: 'dice',
  desc: 'Dice animation',
  category: 'css',
  tags: ['animation'],
  impl: Dice,
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
