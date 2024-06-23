import style from './flex.module.scss?raw'
import { Flex } from './Flex.tsx'
import template from './Flex.tsx?raw'

export default {
  id: 'flex',
  title: 'flex',
  desc: 'css flex characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: Flex,
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
