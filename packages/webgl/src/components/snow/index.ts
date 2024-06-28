import useThree from '@/utils/useThree.ts?raw'
import fragmentShader from './frag.glsl?raw'
import script from './impl.ts?raw'
import { Snow } from './Snow.tsx'
import template from './Snow.tsx?raw'
import vertexShader from './vert.glsl?raw'

export default {
  id: 'snow',
  title: 'snow',
  desc: 'Snow animation',
  category: 'webgl',
  tags: ['threejs', 'animation'],
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
    },
    {
      label: 'fragmentShader',
      filetype: 'glsl',
      content: fragmentShader
    },
    {
      label: 'vertexShader',
      filetype: 'glsl',
      content: vertexShader
    }
  ]
} satisfies Component
