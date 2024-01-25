import html from './boxModel.html?raw'
import css from './boxModel.scss'
import scss from './boxModel.scss?raw'

const component = {
  title: 'box model',
  desc: 'css box model characterization',
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
