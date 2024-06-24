import useThree from '@/utils/useThree.ts?raw'
import { Snow } from './Snow.tsx'
import template from './Snow.tsx?raw'
import script from './nonBusiness.ts?raw'

export default {
  id: 'snow',
  title: 'snow',
  desc: 'Snow animation',
  category: 'webgl',
  tags: ['animation'],
  impl: Snow,
  code: [
    {
      label: 'template',
      filetype: 'typescript',
      content: template
    },
    {
      label: 'script',
      filetype: 'typescript',
      content: script
    },
    {
      label: 'useThree',
      filetype: 'typescript',
      content: useThree
    }
  ]
} satisfies Component
