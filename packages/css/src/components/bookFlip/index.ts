import { BookFlip } from './BookFlip.tsx'
import template from './BookFlip.tsx?raw'
import style from './bookFlip.module.scss?raw'

export default {
  id: 'bookFlip',
  title: 'book flip',
  desc: 'Book flip animation',
  category: 'css',
  tags: ['animation'],
  impl: BookFlip,
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
