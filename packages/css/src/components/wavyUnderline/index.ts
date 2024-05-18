import html from './index.html?raw'
import css from './index.scss'
import scss from './index.scss?raw'

const component = {
  id: 'wavyUnderline',
  title: 'wavy underline',
  desc: 'Text wave underline implementated with background animation.',
  category: 'css',
  tags: ['background', 'animation'],
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
