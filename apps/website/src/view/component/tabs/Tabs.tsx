import { classes } from '@/util/class'
import { useState } from 'react'
import cls from './tabs.module.scss'

interface Props {
  tabs: string[]
  onTabChange?: (tab: string | undefined) => void
  className?: string
}

export const Tabs = (props: Props) => {
  const [curTab, setCurTab] = useState<string>()

  const onClickTab = (tab: string) => {
    if (curTab !== tab) {
      setCurTab(tab)
      props.onTabChange && props.onTabChange(tab)
    } else {
      setCurTab(undefined)
      props.onTabChange && props.onTabChange(undefined)
    }
  }

  return (
    <div className={classes(cls.tabs, props.className)}>
      {props.tabs.map((x) => (
        <span
          key={x}
          className={classes(cls.tab, curTab === x ? cls['tab--active'] : undefined)}
          onClick={() => onClickTab(x)}
        >
          {x}
        </span>
      ))}
    </div>
  )
}
