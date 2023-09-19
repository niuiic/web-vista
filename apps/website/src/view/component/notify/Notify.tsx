import { classes } from '@/util/class'
import { createRoot } from 'react-dom/client'
import cls from './notify.module.scss'

interface Props {
  msg: string
  type: 'success' | 'warning' | 'error' | 'info'
}

export const Notify = (props: Props) => {
  const className = {
    success: 'notify--success',
    warning: 'notify--warning',
    error: 'notify--error',
    info: 'notify--info'
  }[props.type]

  return <div className={classes(cls['notify'], cls[className])}>{props.msg}</div>
}

export function notify(type: Props['type'], msg: Props['msg']): void
export function notify(type: Props['type']): (msg: string) => void
export function notify(type: Props['type'], msg?: Props['msg']) {
  if (!msg) {
    return (msg: string) => notify(type, msg)
  }

  const container = document.createElement('div')
  container.setAttribute('class', cls['notify__wrapper'])
  document.body.appendChild(container)
  createRoot(container).render(<Notify msg={msg} type={type} />)
  setTimeout(() => {
    document.body.removeChild(container)
  }, 2000)
}
