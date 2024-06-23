import cls from './bookFlip.module.scss'

export const BookFlip = () => (
  <div className={cls.wrapper}>
    <div className={cls.book}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={cls.page} />
      ))}
    </div>
  </div>
)
