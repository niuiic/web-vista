import { Loading } from './Loading.tsx'
import template from './Loading.tsx?raw'
import style from './loading.module.scss?raw'

export default {
  id: 'loading',
  title: 'loading',
  desc: 'Text loading animation.',
  category: 'css',
  tags: ['animation'],
  impl: Loading,
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
