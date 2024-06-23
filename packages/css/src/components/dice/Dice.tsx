import cls from './dice.module.scss'

export const Dice = () => (
  <div className={cls.wrapper}>
    <div className={cls.dice}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={cls.side} />
      ))}
    </div>
  </div>
)
