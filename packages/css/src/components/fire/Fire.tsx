import cls from './fire.module.scss'

export const Fire = () => (
  <div className={cls.wrapper}>
    <div className={cls.fire}>
      {Array.from({ length: 50 }).map((_, i) => (
        <div className={cls.dot} key={i} />
      ))}
    </div>
  </div>
)
