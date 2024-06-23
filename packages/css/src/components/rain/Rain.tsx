import cls from './rain.module.scss'

export const Rain = () => (
  <div className={cls.wrapper}>
    <div className={cls.rain}>
      {Array.from({ length: 50 }).map((_, i) => (
        <div className={cls.raindrop} key={i} />
      ))}
    </div>
  </div>
)
