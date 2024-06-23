import style from './walkingBox.module.scss?raw'
import { WalkingBox } from './WalkingBox.tsx'
import template from './WalkingBox.tsx?raw'

export default {
  id: 'walkingBox',
  title: 'walking box',
  desc: 'Walking box animation',
  category: 'css',
  tags: ['animation'],
  impl: WalkingBox,
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
