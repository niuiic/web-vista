import returnSvgUrl from '@/asset/image/return.svg'
import { classes } from '@/util/class'
import { Code } from '@/view/component/code'
import { Frame } from '@/view/component/frame'
import { Image } from '@/view/component/image'
import { ShowcaseOptions } from '@/view/component/showcase'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cls from './detail.module.scss'

interface Props {
  cases: ShowcaseOptions[]
}
export const Detail = (props: Props) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [showcase, setShowcase] = useState<ShowcaseOptions>()
  const hasTags = () => showcase?.tags && showcase?.tags.length > 0

  useEffect(() => {
    const match = location.search.match(/id=([^&]+)/)
    if (!match) {
      return
    }
    const targetCase = props.cases.find((x) => x.id === match[1])
    if (!targetCase) {
      return
    }
    setShowcase(targetCase)
  }, [location, props.cases])

  const returnBack = () => {
    let search
    let returnTo
    let match = location.search.match(/search=([^&]+)/)
    if (match) {
      search = match[1]
    }
    match = location.search.match(/return=([^&]+)/)
    if (match) {
      returnTo = match[1]
    }
    returnTo = returnTo ?? '/home'

    if (search) {
      navigate(`${returnTo}?search=${search}`)
    } else {
      navigate(returnTo)
    }
  }

  return (
    <div className={cls.detail}>
      {showcase ? (
        <div className={cls.info}>
          <div className={cls['info__left']}>
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
          <div className={cls['info__right']}>
            <span className={cls.category}>{showcase.category}</span>
            <Image className={classes(cls.return, 'o-btn')} src={returnSvgUrl} onClick={returnBack}></Image>
          </div>
        </div>
      ) : undefined}
      <div className={cls.sources}>
        {showcase?.code.map((x) => <Code code={x.content} language={x.filetype} label={x.label} key={x.label}></Code>)}
      </div>
      <Frame className={cls.frame} html={showcase?.html} css={showcase?.css} js={showcase?.js}></Frame>
    </div>
  )
}
