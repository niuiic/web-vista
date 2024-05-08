import { classes } from '@/util/class'
import cls from './nav.module.scss'
import type { Entry } from './nonBusiness'

interface Props {
  entries: Entry[]
}

export const Nav = (props: Props) => {
  const goHome = () => {
    window.location.href = window.location.protocol + '//' + window.location.host
  }

  return (
    <div className={cls.nav}>
      <h1 className={classes(cls.title, 'o-btn')} onClick={goHome}>
        Web Vista
      </h1>

      <h2 className={cls.slogan}>
        <span className={cls['slogan__inner']}>Sharing Ideas</span>
      </h2>

      <ul className={cls.entries}>
        {props.entries.map((entry) => (
          <li key={entry.label} className={classes(cls.entry, 'o-btn')} onClick={entry.onClick}>
            {entry.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
