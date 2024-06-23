import style from './typeWriter.module.scss?raw'
import { TypeWriter } from './TypeWriter.tsx'
import template from './TypeWriter.tsx?raw'

export default {
  id: 'typeWriter',
  title: 'type writer',
  desc: 'Type writer animation',
  category: 'css',
  tags: ['animation', 'background'],
  impl: TypeWriter,
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
