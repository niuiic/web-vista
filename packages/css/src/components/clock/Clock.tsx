import cls from './clock.module.scss'

export const Clock = () => (
  <div className={cls.clock}>
    <div className={cls['frame-face']} />
    <div>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} className={cls['minute-mark']} />
      ))}
    </div>
    <div className={cls.digits}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={cls.digit} />
      ))}
    </div>
    <div className={cls['hours-hand']} />
    <div className={cls['minutes-hand']} />
    <div className={cls['seconds-hand']} />
    <div className={cls['digit-wrap']}>
      <div className={cls['digit-hours']}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div className={cls['digit-card']} key={i} />
        ))}
      </div>
      <div className={cls['digit-minutes']}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div className={cls['digit-card']} key={i} />
        ))}
      </div>
      <div className={cls['digit-seconds']}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div className={cls['digit-card']} key={i} />
        ))}
      </div>
    </div>
  </div>
)
