import style from './formattingContext.module.scss?raw'
import { FormattingContext } from './FormattingContext.tsx'
import template from './FormattingContext.tsx?raw'

export default {
  id: 'formattingContext',
  title: 'formatting context',
  desc: 'css formatting context characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: FormattingContext,
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
