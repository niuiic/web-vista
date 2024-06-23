import style from './batteryCharge.module.scss?raw'
import { BatteryCharge } from './BatteryCharge.tsx'
import template from './BatteryCharge.tsx?raw'

export default {
  id: 'batteryCharge',
  title: 'battery charge',
  desc: 'HuaWei battery charging animation.',
  category: 'css',
  tags: ['animation'],
  impl: BatteryCharge,
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
