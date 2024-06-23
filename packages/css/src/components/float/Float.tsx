import cls from './float.module.scss'

export const Float = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>The offset reference for the float is the current line box.</h1>
      <hr />

      <div className={cls.parent}>
        <span className={cls.line1}>line1</span>
        <br />
        <span className={cls.line2}>line2</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>Multiple floats in the same row will be aligned next to each other.</h1>
      <hr />

      <div className={cls.parent2}>
        <span className={cls.float1}>float1</span>
        <span className={cls.float2}>float2</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        The clear attribute will disable elements from being adjacent to floated elements.
      </h1>
      <hr />

      <ul className={cls.parent3}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </section>
  </>
)
