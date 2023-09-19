import type { ReactNode } from 'react'
import cls from './layout.module.scss'

interface Props {
  nav: ReactNode
  main: ReactNode
  footer: ReactNode
}

export const Layout = (props: Props) => {
  return (
    <div className={cls.layout}>
      <nav className={cls.nav}>{props.nav}</nav>
      <main className={cls.main}>{props.main}</main>
      <footer className={cls.footer}>{props.footer}</footer>
    </div>
  )
}
