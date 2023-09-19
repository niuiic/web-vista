import hljs from 'highlight.js'
import { useEffect, useRef } from 'react'
import cls from './code.module.scss'

interface Props {
  code: string
  language: string
}

export const Code = (props: Props) => {
  const codeRef = useRef<HTMLPreElement>()

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = hljs.highlight(props.code, { language: props.language }).value
    }
  }, [props.code, props.language])

  return <pre ref={codeRef} className={cls.code} />
}
