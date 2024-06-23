import cls from './minContent.module.scss'

export const MinContent = () => (
  <>
    <section className={cls.section}>
      <h1 className={cls.section__title}>
        The English language is divided into words, and the cjk text is a single character.
      </h1>
      <hr />

      <div className={cls.box}>
        <span>hello world</span>
      </div>

      <div className={cls.box}>
        <span>中文</span>
      </div>
    </section>

    <section className={cls.section}>
      <h1 className={cls.section__title}>
        Inline-block elements with defined widths are not split. Also works for inline-flex, inline-grid, etc.
      </h1>
      <hr />

      <div className={cls.box}>
        <span className={cls['inline-block']}>中文</span>
        <span>中文</span>
      </div>
      <div className={cls.box}>
        <span className={[cls['inline-block'], cls['defined-width']].join(' ')}>中文</span>
        <span>中文</span>
      </div>
    </section>
  </>
)
