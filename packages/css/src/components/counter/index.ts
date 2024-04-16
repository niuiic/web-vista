import sectionCss from '@/styles/section.scss'
import html from './index.html?raw'
import css from './index.scss'
import scss from './index.scss?raw'

const component = {
  title: 'counter',
  desc: 'css counter characterization',
  category: 'css',
  tags: ['standard'],
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
