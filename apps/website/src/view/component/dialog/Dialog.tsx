import { classes } from '@/util/class'
import { useCallback, useEffect, useRef, type ReactNode } from 'react'
import cls from './dialog.module.scss'

interface Props {
  className?: string
  children: ReactNode | ReactNode[]
  onClickOutside?: () => void
}

export const Dialog = (props: Props) => {
  const dialogRef = useRef<HTMLDivElement>()

  const onClickOutside = useCallback(
    (e: Event) => {
      if (props.onClickOutside && !dialogRef?.current?.contains(e.target as Node)) {
        props.onClickOutside()
      }
    },
    [props.onClickOutside]
  )

  useEffect(() => {
    setTimeout(() => document.addEventListener('click', onClickOutside), 0)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  return (
    <div className={classes(props.className, cls.dialog)}>
      <div ref={dialogRef} className={classes(cls['dialog__inner'], 'dialog__inner')}>
        {props.children}
      </div>
    </div>
  )
}
