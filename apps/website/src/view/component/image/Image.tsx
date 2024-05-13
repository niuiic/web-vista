import { classes } from '@/util/class'
import cls from './image.module.scss'

interface Props {
  src: string
  className?: string
  onClick?: () => void
}

export const Image = (props: Props) => (
  <img
    src={props.src}
    draggable="false"
    loading="lazy"
    className={classes(cls.image, props.className)}
    onClick={props.onClick}
  />
)
