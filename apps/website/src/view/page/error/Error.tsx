import cls from './error.module.scss'

export const Error = () => {
  return (
    <div className={cls.error}>
      <div className={cls.wrapper}>
        <ul className={cls.box}>
          <li className={cls.side} />
          <li className={cls.side} />
          <li className={cls.side} />
          <li className={cls.side} />
          <li className={cls.side} />
          <li className={cls.side} />
        </ul>
      </div>
    </div>
  )
}
