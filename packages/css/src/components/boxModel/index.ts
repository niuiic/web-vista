import style from './boxModel.module.scss?raw'
import { BoxModel } from './BoxModel.tsx'
import template from './BoxModel.tsx?raw'

export default {
  id: 'boxModel',
  title: 'box model',
  desc: 'css box model characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  impl: BoxModel,
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
