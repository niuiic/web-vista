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
      <h1 className={[cls.title, 'o-btn'].join(' ')} onClick={goHome}>
        Gallery
      </h1>

      <h2 className={cls.slogan}>Sharing Ideas</h2>

      {props.entries.map((entry) => (
        <p key={entry.label} className={[cls.entry, 'o-btn'].join(' ')} onClick={entry.onClick}>
          {entry.label}
        </p>
      ))}
    </div>
  )
}
