import sectionCss from '@/styles/section.scss'
import html from './index.html?raw'
import css from './index.scss'
import scss from './index.scss?raw'

const component = {
  id: 'lineHeight',
  title: 'line-height',
  desc: 'css line-height characterization',
  category: 'css',
  tags: ['standard'],
  isStandard: true,
  html,
  css: css + sectionCss,
  code: [
    {
      label: 'html',
      filetype: 'html',
      content: html
    },
    {
      label: 'scss',
      filetype: 'scss',
      content: scss
    }
  ]
}

export default component
