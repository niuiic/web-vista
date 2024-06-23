import cls from './walkingBox.module.scss'

export const WalkingBox = () => (
  <div className={cls.wrapper}>
    <div className={cls['box__wrapper']}>
      <ul className={cls.box}>
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} />
        ))}
      </ul>
    </div>
  </div>
)
