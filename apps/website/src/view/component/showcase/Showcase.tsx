import { classes } from '@/util/class'
import type { ShowcaseOptions } from './nonBusiness'
import cls from './showcase.module.scss'

interface Props {
  options: ShowcaseOptions
  onClick: (showcase: ShowcaseOptions) => void
  className?: string
}

export const Showcase = (props: Props) => {
  const hasTags = () => props.options.tags && props.options.tags.length > 0

  return (
    <div className={classes(cls.showcase, props.className, 'o-btn')} onClick={() => props.onClick(props.options)}>
      <div className={cls.frame}>
        <props.options.impl />
      </div>
      <div className={cls.info}>
        <div className={cls.info__left}>
          <p className={cls.title} title={props.options.title}>
            {props.options.title}
          </p>
          {hasTags() ? (
            <p className={cls.tags} title={props.options.tags?.join('/')}>
              {props.options.tags?.join('/')}
            </p>
          ) : undefined}
          <p className={cls.desc} title={props.options.desc}>
            {props.options.desc}
          </p>
        </div>
        <p className={cls.category}>{props.options.category}</p>
      </div>
    </div>
  )
}
