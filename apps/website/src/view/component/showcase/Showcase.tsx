import expandSvgUrl from '@/asset/image/expand.svg'
import { classes } from '@/util/class'
import { Frame } from '../frame'
import { Image } from '../image'
import type { ShowcaseOptions } from './nonBusiness'
import cls from './showcase.module.scss'

interface Props {
  options: ShowcaseOptions
  onClick: (showcase: ShowcaseOptions) => void
}

export const Showcase = (props: Props) => {
  const hasTags = () => props.options.tags && props.options.tags.length > 0

  return (
    <div className={classes(cls.showcase, 'showcase')}>
      <div className={classes(cls['frame__wrapper'])}>
        <Frame className={cls.frame} html={props.options.html} css={props.options.css} js={props.options.js} />
        <Image className={cls['frame__btn']} src={expandSvgUrl} onClick={() => props.onClick(props.options)}></Image>
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
