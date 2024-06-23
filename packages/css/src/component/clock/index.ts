import html from './index.html?raw'
import css from './index.scss'
import scss from './index.scss?raw'

const component = {
  id: 'clock',
  title: 'clock',
  desc: 'Clock animation',
  category: 'css',
  tags: ['animation'],
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
