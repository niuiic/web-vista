import { classes } from '@/util/class'
import { useState, type ReactNode } from 'react'
import { Icon } from '../icon'
import cls from './layout.module.scss'

interface Props {
  nav: ReactNode
  main: ReactNode
  footer: ReactNode
}

export const Layout = (props: Props) => {
  const [collapseNav, setCollapseNav] = useState(false)
  const onClickNav = () => {
    if (collapseNav) {
      setCollapseNav(false)
    }
  }
  const onClickCollapseBtn = () => {
    setCollapseNav(true)
  }

  return (
    <div className={classes(cls.layout, collapseNav ? cls['layout--nav-collapsed'] : undefined)}>
      <nav className={classes(cls.nav, collapseNav ? cls['nav-collapsed'] : undefined)} onClick={onClickNav}>
        {collapseNav ? undefined : props.nav}
        {collapseNav ? undefined : (
          <div className={cls['collapse-btn']} onClick={onClickCollapseBtn}>
            <Icon name="collapse" />
          </div>
        )}
      </nav>
      <main className={cls.main}>{props.main}</main>
      <footer className={cls.footer}>{props.footer}</footer>
    </div>
  )
}
