import cls from './boxSize.module.scss'

export const BoxSize = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>
        'width: 100%;' normally represents the proportion of the content area of the child box to the content area of
        the container block. This would not be affected by box-sizing.
      </h1>
      <hr />

      <div className={cls.parent}>
        <div className={cls.child} />
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        'width: 100%;' works even the value of width property of the container block is auto.
      </h1>
      <hr />

      <div className={cls.parent2}>
        <div className={cls.child2} />
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        'height: 100%;' does not work if the value of height property of the container block is auto.
      </h1>
      <hr />

      <div className={cls.parent3}>
        <div className={cls.child3} />
        <span>block3</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>'height: 100%;' is based on actual values, not set values.</h1>
      <hr />

      <div className={cls.parent4}>
        <div className={cls.child4} />
        <span>block4</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        In absolute positioning, the reference is the padding box. It works even the value of height property of the
        container block is auto.
      </h1>
      <hr />

      <div className={cls.parent5}>
        <div className={cls.child5} />
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        The percentage value of padding in any direction is calculated based on the width of the containing block. In
        absolute positioning it includes padding.
      </h1>
      <hr />

      <div className={cls.parent6}>
        <div className={cls.child6} />
      </div>
    </section>
  </>
)
