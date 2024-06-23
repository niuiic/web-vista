import cls from './absolute.module.scss'

export const Absolute = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>
        Setting absolute positioning changes the element's display value to the corresponding block type.
      </h1>
      <hr />

      <div className={cls.parent}>
        <span className={cls.child}>child</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        If the element on which overflow is set is not a containment block of an absolutely positioned element and does
        not contain a containment block of the absolutely positioned element within it, overflow does not take effect on
        that absolutely positioned element.
      </h1>
      <hr />

      <div className={cls.parent2}>
        <span className={cls.child2}>child2</span>
      </div>
    </section>
  </>
)
