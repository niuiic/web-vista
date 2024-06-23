import cls from './jellyBox.module.scss'

export const JellyBox = () => (
  <div className={cls.wrapper}>
    <div className={cls.loader}>
      <div className={cls.shadow} />
      <div className={cls.box} />
    </div>
  </div>
)
