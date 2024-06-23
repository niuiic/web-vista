import cls from './flex.module.scss'

export const Flex = () => (
  <section className={cls.section}>
    <h1 className={cls.section__title}>
      If the sum of the flex-grow of a flex item is less than 1, the flex container may not be filled.
    </h1>
    <hr />

    <div className={cls.parent}>
      <div className={cls.child} />
      <div className={cls.child} />
    </div>
  </section>
)
