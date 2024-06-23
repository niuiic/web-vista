import downSvgUrl from '@/asset/image/down.svg'
import upSvgUrl from '@/asset/image/up.svg'
import { classes } from '@/util/class'
import hljs from 'highlight.js'
import { useEffect, useRef, useState } from 'react'
import { Image } from '../image'
import cls from './code.module.scss'

interface Props {
  code: string
  language: string
  label: string
  className?: string
}

export const Code = (props: Props) => {
  const codeRef = useRef<HTMLPreElement>()
  const [collapsed, setCollapsed] = useState(false)
  const [bodyStyle, setBodyStyle] = useState({})
  const onClick = () => setCollapsed(!collapsed)

  useEffect(() => {
    if (codeRef.current) {
      try {
        codeRef.current.innerHTML = hljs.highlight(props.code, { language: props.language }).value
      } catch {
        codeRef.current.innerText = props.code
      }
    }
    setTimeout(() => {
      setBodyStyle({})
      setTimeout(() => {
        if (!codeRef.current) {
          return
        }
        setBodyStyle({
          maxHeight: codeRef.current.getBoundingClientRect().height
        })
      }, 100)
    }, 100)
  }, [props.code, props.language])

  return (
    <div className={classes(cls.code, props.className, collapsed ? cls['code--collapsed'] : undefined)}>
      <div className={cls.header}>
        <span>{props.label}</span>
        <Image
          src={collapsed ? downSvgUrl : upSvgUrl}
          className={classes(cls['collapse-btn'], 'o-btn')}
          onClick={onClick}
        />
      </div>
      <pre className={cls.body} style={bodyStyle} ref={codeRef} />
    </div>
  )
}
