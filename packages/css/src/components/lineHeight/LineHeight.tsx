import cls from './lineHeight.module.scss'

export const LineHeight = () => (
  <section className={cls.section}>
    <h1 className={cls.section__title}>
      The height of a line box is determined by the highest content within it, including the empty node.
    </h1>
    <hr />

    <div className={cls.parent}>
      <span className={cls.child}>child</span>
      <br />
      <span className={cls.child2}>child2</span>
    </div>

    <div className={cls.parent2}>
      <span className={cls.child}>child</span>
      <span className={cls.child2}>child2</span>
    </div>
  </section>
)
