import { classes } from '@/util/class'
import cls from './footer.module.scss'

export const Footer = () => {
  const accessGithub = () => {
    window.open('https://github.com/niuiic/web-vista', '_blank')
  }

  return (
    <div className={cls.footer}>
      <p className={cls.text}>
        {'View on '}
        <span className={classes(cls.link, 'o-btn')} onClick={accessGithub}>
          github
        </span>
      </p>
      <p className={cls.text}>Copyright © 2023-present niuiic</p>
    </div>
  )
}
