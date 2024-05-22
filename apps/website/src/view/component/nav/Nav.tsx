import { classes } from '@/util/class'
import { useNavigate } from 'react-router-dom'
import cls from './nav.module.scss'
import type { Entry } from './nonBusiness'

interface Props {
  entries: Entry[]
  currentEntry?: Entry['label']
}

export const Nav = (props: Props) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return (
    <div className={cls.nav}>
      <h1 className={classes(cls.title, 'o-btn')} onClick={goHome}>
        Web Vista
      </h1>

      <svg className={cls.slogan} viewBox="0 0 140 60">
        <defs>
          <path id="circle" d="M 10 25 Q 70 60 130 25" />
        </defs>
        <rect
          className={cls.slogan__inner}
          width={140}
          height={60}
          fill="none"
          strokeWidth={5}
          strokeDasharray="100 100"
         />
        <text>
          <textPath xlinkHref="#circle" stroke="currentcolor" fill="currentcolor">
            Sharing Ideas
          </textPath>
        </text>
      </svg>

      <ul className={cls.entries}>
        {props.entries.map((entry) => (
          <li
            key={entry.label}
            className={classes(
              cls.entry,
              'o-btn',
              entry.label === props.currentEntry ? cls['entry--active'] : undefined
            )}
            onClick={entry.onClick}
          >
            {entry.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
