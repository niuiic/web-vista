import cls from './walkingDots.module.scss'

export const WalkingDots = () => (
  <div className={cls.wrapper}>
    <div className={cls.loader}>
      <div className={cls.d1} />
      <div className={cls.d2} />
      <div className={cls.d3} />
      <div className={cls.d4} />
      <div className={cls.d5} />
    </div>
  </div>
)
