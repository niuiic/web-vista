import returnSvgUrl from '@/asset/image/return.svg'
import { classes } from '@/util/class'
import { Code } from '@/view/component/code'
import { Image } from '@/view/component/image'
import type { ShowcaseOptions } from '@/view/component/showcase'
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
            <div className={cls.title} title={showcase.title}>
              {showcase.title}
            </div>
            {hasTags() ? (
              <div className={cls.tags} title={showcase.tags?.join('/')}>
                {showcase.tags?.join('/')}
              </div>
            ) : undefined}
            <div className={cls.desc} title={showcase.desc}>
              {showcase.desc}
            </div>
          </div>
          <div className={cls['info__right']}>
            <span className={cls.category}>{showcase.category}</span>
            <Image className={classes(cls.return, 'o-btn')} src={returnSvgUrl} onClick={returnBack} />
          </div>
        </div>
      ) : undefined}
      <div className={cls['sources_wrapper']}>
        <div className={cls.sources}>
          {showcase?.code?.map((x) => (
            <Code code={x.content} language={x.filetype} label={x.label} key={x.label} className={cls.source} />
          ))}
        </div>
      </div>
      <div className={cls.frame}>{showcase ? <showcase.impl /> : undefined}</div>
    </div>
  )
}
