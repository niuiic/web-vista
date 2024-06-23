import style from './walkingDots.module.scss?raw'
import { WalkingDots } from './WalkingDots.tsx'
import template from './WalkingDots.tsx?raw'

export default {
  id: 'walkingDots',
  title: 'walking dots',
  desc: 'Yet another loading animation.',
  category: 'css',
  tags: ['animation'],
  impl: WalkingDots,
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
