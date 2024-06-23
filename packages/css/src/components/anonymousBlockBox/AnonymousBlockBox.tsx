import cls from './anonymousBlockBox.module.scss'

export const AnonymousBlockBox = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>
        If a block container box has a box-level box inside it, then we force it to have only block-level boxes inside
        it.
        <br />
        There is an anonymous block box around inline box.
      </h1>
      <hr />

      <div>
        it's a block container box
        <p>this is a block level box</p>
        <span className={cls['inline-level-box']}>this is a inline level box</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        An in-flow block-level box would break down the line box.
        <br />
        Disconnected first and second halves would be wrapped by an anonymous block box.
      </h1>
      <hr />

      <p className={cls['line-box']}>
        <span className={cls['inline-box']}>I'm in a line box</span>
        <span className={cls['in-flow-block-level-box']}>this is a block box</span>
        <span className={cls['inline-box']}>after</span>
      </p>
    </section>
  </>
)
