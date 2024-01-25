import html from './formattingContext.html?raw'
import css from './formattingContext.scss'
import scss from './formattingContext.scss?raw'

const component = {
  title: 'formatting context',
  desc: 'css formatting context characterization',
  category: 'css',
  tags: ['standard'],
  html,
  css,
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
