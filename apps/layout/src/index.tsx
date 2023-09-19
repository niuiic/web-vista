import '@/style/element/index.scss'
import '@/style/object/index.scss'
import '@/style/setting/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
