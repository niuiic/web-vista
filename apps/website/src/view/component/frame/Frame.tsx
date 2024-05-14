import { localUniqId } from '@/util/id'
import { useEffect, useRef } from 'react'

interface Props {
  css?: string
  html?: string
  js?: string
  className?: string
}

export const Frame = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>()
  let shadowRoot: ShadowRoot | undefined
  const id = localUniqId()

  useEffect(() => {
    if (!shadowRoot) {
      if (containerRef?.current?.shadowRoot) {
        shadowRoot = containerRef.current.shadowRoot
      } else {
        shadowRoot = containerRef.current?.attachShadow({ mode: 'open' })
      }
    }
    if (!shadowRoot) {
      return
    }

    while (shadowRoot.firstChild) {
      shadowRoot.removeChild(shadowRoot.firstChild)
    }

    if (props.html) {
      shadowRoot.innerHTML = props.html
    }
    if (props.css) {
      const style = document.createElement('style')
      style.textContent = props.css
      shadowRoot.appendChild(style)
    }
    if (props.js) {
      const queryShadowRoot = `const shadowRoot = document.getElementById('${id}').shadowRoot\n`
      const script = document.createElement('script')
      const js = queryShadowRoot + props.js.replaceAll('document.', 'shadowRoot.')
      script.textContent = `(() => {${js}})()`

      shadowRoot.appendChild(script)
    }
  }, [props.js, props.html, props.css])

  return <div id={id} ref={containerRef} className={props.className} />
}
