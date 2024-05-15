import { Code } from '@/view/component/code'
import { Frame } from '@/view/component/frame'
import { ShowcaseOptions } from '@/view/component/showcase'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import cls from './detail.module.scss'

interface Props {
  cases: ShowcaseOptions[]
}
export const Detail = (props: Props) => {
  const location = useLocation()

  const [showcase, setShowcase] = useState<ShowcaseOptions>()
  const hasTags = () => showcase?.tags && showcase?.tags.length > 0

  useEffect(() => {
    const match = location.search.match(/id=(.*)/)
    if (!match) {
      return
    }
    const targetCase = props.cases.find((x) => x.id === match[1])
    if (!targetCase) {
      return
    }
    setShowcase(targetCase)
  }, [location, props.cases])

  return (
    <div className={cls.detail}>
      {showcase ? (
        <div className={cls.info}>
          <div className={cls.info__left}>
            <p className={cls.title} title={showcase.title}>
              {showcase.title}
            </p>
            {hasTags() ? (
              <p className={cls.tags} title={showcase.tags?.join('/')}>
                {showcase.tags?.join('/')}
              </p>
            ) : undefined}
            <p className={cls.desc} title={showcase.desc}>
              {showcase.desc}
            </p>
          </div>
          <p className={cls.category}>{showcase.category}</p>
        </div>
      ) : undefined}
      <div className={cls.sources}>
        {showcase?.code.map((x) => (
          <Code code={x.content} language={x.filetype} label={x.label} key={x.label} className={cls.source}></Code>
        ))}
      </div>
      <Frame className={cls.frame} html={showcase?.html} css={showcase?.css} js={showcase?.js}></Frame>
    </div>
  )
}
