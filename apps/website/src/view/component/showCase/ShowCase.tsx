import { classes } from '@/util/class'
import { useCallback, useMemo, useState } from 'react'
import { Code } from '../code'
import { Dialog } from '../dialog'
import { Frame } from '../frame'
// import { Icon } from '../icon'
import { Tabs } from '../tabs'
import type { ShowCaseOptions } from './nonBusiness'
import cls from './showCase.module.scss'

interface Props {
  options: ShowCaseOptions
}

export const ShowCase = (props: Props) => {
  const hasTags = props.options.tags && props.options.tags.length > 0
  const [dialogVisiable, setDialogVisiable] = useState(false)

  const showDialog = () => setDialogVisiable(true)
  const closeDialog = () => {
    setDialogVisiable(false)
    setShowCode(false)
  }

  const Info = useCallback(
    () => (
      <div className={cls.info}>
        <div className={cls.info__left}>
          <p className={cls.title} title={props.options.title}>
            {props.options.title}
          </p>
          {hasTags ? (
            <p className={cls.tags} title={props.options.tags?.join('/')}>
              {props.options.tags?.join('/')}
            </p>
          ) : undefined}
          <p className={cls.desc} title={props.options.desc}>
            {props.options.desc}
          </p>
        </div>
        <p className={cls.category}>{props.options.category}</p>
      </div>
    ),
    [props.options.title, props.options.tags, props.options.category]
  )

  const tabs = useMemo(() => props.options.code?.map((x) => x.label), [props.options.code])
  const [showCode, setShowCode] = useState(false)
  const onTabChange = (tab: string | undefined) => {
    if (!tab) {
      setShowCode(false)
      return
    }

    setShowCode(true)

    const targetCode = props.options.code?.find((x) => x.label === tab)
    if (!targetCode) {
      return
    }
    setCode({
      text: targetCode.content,
      language: targetCode.filetype
    })
  }

  const [code, setCode] = useState<{ text: string; language: string }>()

  return (
    <>
      {dialogVisiable ? (
        <Dialog onClickOutside={closeDialog} className={cls.dialog}>
          <div className={cls['dialog__header']}>
            <Info />
          </div>
          {tabs ? <Tabs tabs={tabs} className={cls.tabs} onTabChange={onTabChange} /> : undefined}
          <div className={cls['dialog__body']}>
            {showCode ? (
              <div className={cls['code__wrapper']}>
                <Code code={code?.text ?? ''} language={code?.language ?? 'txt'} />
              </div>
            ) : undefined}
            <Frame className={cls.frame} html={props.options.html} css={props.options.css} js={props.options.js} />
          </div>
        </Dialog>
      ) : undefined}
      <div className={classes(cls.showcase, 'showcase')}>
        <div className={classes(cls['frame__wrapper'], dialogVisiable ? cls['frame__wrapper--disactive'] : undefined)}>
          <Frame className={cls.frame} html={props.options.html} css={props.options.css} js={props.options.js} />
          <div className={cls['frame__btn']} onClick={showDialog}>
            {/* <Icon name="expand" /> */}
          </div>
        </div>
        <Info />
      </div>
    </>
  )
}
