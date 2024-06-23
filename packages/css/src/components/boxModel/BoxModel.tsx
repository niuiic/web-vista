import cls from './boxModel.module.scss'

export const BoxModel = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>
        'width: 100%;' represents the proportion of the content area of the child box to the content area of the parent
        box. This would not be affected by box-sizing.
      </h1>
      <hr />

      <div className={cls.parent}>
        <div className={cls.child} />
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        Padding, margin and border of the inline element would not push away surrounding elements vertically.
      </h1>
      <hr />

      <p className={cls.p1}>
        <span className={cls['inline-1']}>inline-1</span>
        <span className={cls['inline-2']}>inline-2</span>
        <p className={cls.p2}>p2</p>
      </p>
    </section>
  </>
)
