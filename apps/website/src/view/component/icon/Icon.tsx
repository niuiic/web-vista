import { classes } from '@/util/class'
import cls from './icon.module.scss'

interface Props {
  name: string
  className?: string
}

export const Icon = (props: Props) => (
  <svg className={classes(cls.icon, props.className ?? '')} aria-hidden="true">
    <use xlinkHref={`#icon-${props.name}`} />
  </svg>
)
