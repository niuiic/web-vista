import style from './minContent.module.scss?raw'
import { MinContent } from './MinContent.tsx'
import template from './MinContent.tsx?raw'

export default {
  id: 'minContent',
  title: 'min-content',
  desc: 'css width min-content characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: MinContent,
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
