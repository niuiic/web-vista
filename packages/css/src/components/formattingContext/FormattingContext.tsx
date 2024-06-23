import cls from './formattingContext.module.scss'

export const FormattingContext = () => (
  <>
    <section className={cls.section}>
      <h3>
        When a formatting context is created, its boundary is at the border position of the corresponding element.
        <br />
        Creating BFC does not affect margin of the element. The margin of parent element and the margin of child element
        are still in the same BFC.
      </h3>
      <hr />

      <div className={cls.parent1}>
        <div className={cls.child1} />
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        The margin of parent element is in the outer BFC, and the margin of child element is in the BFC created by the
        parent element.
      </h1>
      <hr />

      <div className={cls.parent2}>
        <div className={cls.child2} />
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        BFC created by child4 isolates the margin of child3 and the margin of child5.
      </h1>
      <hr />

      <div className={cls.parent3}>
        <div className={cls.child3} />
        <div className={cls.child4}>
          <div className={cls.child5} />
        </div>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>BFC created by child6 isolates its block margins.</h1>
      <hr />

      <div className={cls.parent4}>
        <div className={cls.child6} />
      </div>
    </section>
  </>
)
