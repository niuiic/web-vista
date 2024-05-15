import { classes } from '@/util/class'
import { useEffect, useState } from 'react'
import cls from './pagination.module.scss'

interface Props {
  count: number
  pageNum: number
  pageSize: number
  setPageNum: (pageNum: number) => void
  className?: string
}

export const Pagination = (props: Props) => {
  const [items, setItems] = useState<number[]>([])
  useEffect(() => {
    setItems(Array.from({ length: Math.ceil(props.count / props.pageSize) }).map((_, i) => i + 1))
  }, [props.count, props.pageSize])

  const onClick = (pageNum: number) => props.setPageNum(pageNum)

  return (
    <div className={classes(cls.pagination, props.className)}>
      {items.map((x) => (
        <div
          className={classes(cls.item, 'o-btn', props.pageNum === x ? cls['item--selected'] : undefined)}
          key={x}
          onClick={() => onClick(x)}
        >
          {x}
        </div>
      ))}
    </div>
  )
}
