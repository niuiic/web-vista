import cls from './counter.module.scss'

export const Counter = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>Basic usage</h1>
      <hr />

      <ul className={cls.parent}>
        <li className={cls.child}>child</li>
        <li>
          <span className={cls.child}>child</span>
        </li>
        <li className={cls.child}>child</li>
        <li className={cls.child}>child</li>
      </ul>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>Multiple counters</h1>
      <hr />

      <ul className={cls.parent2}>
        <li className={cls.child1}>child1</li>
        <li className={cls.child2}>child2</li>
        <li className={cls.child2}>child2</li>
        <li className={cls.child2}>child2</li>
        <li className={cls.child1}>child1</li>
        <li className={cls.parent2}>parent2</li>
        <li className={cls.child2}>child2</li>
      </ul>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>Nested counters</h1>
      <hr />

      <ul className={cls.parent3}>
        <li className={cls.child3}>child3</li>
        <li className={cls.child3}>child3</li>
        <li className={cls.child3}>
          <ul className={cls.parent3}>
            <li className={cls.child3}>child3</li>
            <li className={cls.child3}>child3</li>
          </ul>
        </li>
        <li className={cls.child3}>child3</li>
      </ul>
    </section>
  </>
)
