import cls from './batteryCharge.module.scss'

export const BatteryCharge = () => (
  <div className={cls.wrapper}>
    <div className={cls.container}>
      <div className={cls.number}>99.9%</div>
      <div className={cls.contrast}>
        <div className={cls.circle} />
        <div className={cls.bubbles}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className={cls.bubble} />
          ))}
        </div>
      </div>
    </div>
  </div>
)
