import fragmentShader from './frag.glsl?raw'
import script from './impl.ts?raw'
import { Rain } from './Rain.tsx'
import template from './Rain.tsx?raw'
import vertexShader from './vert.glsl?raw'

export default {
  id: 'rainWebgl',
  title: 'rain',
  desc: 'Rain animation',
  category: 'webgl',
  tags: ['shader', 'animation'],
  impl: Rain,
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
