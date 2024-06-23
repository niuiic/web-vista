import style from './zIndex.module.scss?raw'
import { ZIndex } from './ZIndex.tsx'
import template from './ZIndex.tsx?raw'

export default {
  id: 'zIndex',
  title: 'z-index',
  desc: 'css z-index characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: ZIndex,
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
