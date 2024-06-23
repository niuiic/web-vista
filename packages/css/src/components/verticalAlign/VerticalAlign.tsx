import cls from './verticalAlign.module.scss'

export const VerticalAlign = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>
        If there is not enough space available, extend the line-height and offset it again.
      </h1>
      <hr />

      <div className={cls.parent}>
        <span className={cls.child1}>{'vertical-align > 0'}</span>
        <span className={cls.child2}>vertical-align = 0</span>
      </div>

      <div className={cls.parent2}>
        <span className={cls.child3}>{'vertical-align < 0'}</span>
        <span className={cls.child4}>vertical-align = 0</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>'vertical-align' does not allow line boxes to overlap.</h1>
      <hr />

      <div className={cls.parent3}>
        <span className={cls.child5}>{'vertical-align > 0'}</span>
        <br />
        <span className={cls.child6}>vertical-align = 0</span>
      </div>
    </section>
  </>
)
