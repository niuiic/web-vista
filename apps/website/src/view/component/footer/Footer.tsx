import { classes } from '@/util/class'
import cls from './footer.module.scss'

export const Footer = () => {
  const githubRepoUrl = 'https://github.com/niuiic/web-vista'

  return (
    <div className={cls.footer}>
      <p className={cls.text}>
        {'View on '}
        <a className={classes('wavy-underline', 'o-btn')} href={githubRepoUrl} target="_blank">
          github
        </a>
      </p>
      <p className={cls.text}>Copyright © 2023-present niuiic</p>
    </div>
  )
}
