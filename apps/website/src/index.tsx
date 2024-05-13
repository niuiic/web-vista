import '@/style/element/index.scss'
import '@/style/object/index.scss'
import '@/style/setting/index.scss'
import { notify } from '@/view/component/notify'
import 'highlight.js/styles/tokyo-night-dark.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

if (!document.head.attachShadow) {
  notify('error', 'Your browser does not support shadow dom. Please use the another browser supporting it instead.')
}

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
