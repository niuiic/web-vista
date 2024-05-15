import { classes } from '@/util/class'
import hljs from 'highlight.js'
import { useEffect, useRef } from 'react'
import cls from './code.module.scss'

interface Props {
  code: string
  language: string
  label: string
  className?: string
}

export const Code = (props: Props) => {
  const codeRef = useRef<HTMLPreElement>()

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = hljs.highlight(props.code, { language: props.language }).value
    }
  }, [props.code, props.language])

  return (
    <div className={classes(cls.code, props.className)}>
      <p className={cls.label}>{props.label}</p>
      <pre ref={codeRef} />
    </div>
  )
}
