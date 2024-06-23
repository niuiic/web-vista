import cls from './zIndex.module.scss'

export const ZIndex = () => (
  <section className={cls.section}>
    <h1 className={cls.section__title}>
      The z-index of an element is only valid in the current cascading context. If an element itself generates a new
      cascading context, its z-index is for the cascading context outside of it
    </h1>
    <hr />

    <div className={cls.parent}>
      <div className={cls.child1} />
      <div className={cls.child2} />
    </div>
  </section>
)
