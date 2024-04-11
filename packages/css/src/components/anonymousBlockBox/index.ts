import sectionCss from '@/styles/section.scss'
import html from './anonymousBlockBox.html?raw'
import css from './anonymousBlockBox.scss'
import scss from './anonymousBlockBox.scss?raw'

const component = {
  title: 'anonymous block box',
  desc: 'how anonymous boxes are generated',
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
