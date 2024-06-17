import js from './impl.ts?js'
// import ts from './impl.ts?raw'
import snowflakeUrl from '../../assets/images/snowflake.png'
import html from './index.html?raw'

const component = {
  id: 'snow',
  title: 'snow',
  desc: 'Snow animation',
  category: 'webgl',
  tags: ['animation'],
  html,
  js: js.replace(/snowflakeUrl/g, `'${snowflakeUrl}'`),
  code: [
    {
      label: 'html',
      filetype: 'html',
      content: html
    }
    // {
    //   label: 'script',
    //   filetype: 'typescript',
    //   content: ts
    // }
  ]
}

export default component
