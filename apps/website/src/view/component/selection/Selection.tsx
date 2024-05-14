import { classes } from '@/util/class'
import { useState } from 'react'
import cls from './selection.module.scss'

interface Props {
  items: string[]
  onChange?: (selected: string[]) => void
}

export const Selection = (props: Props) => {
  const [selected, setSelected] = useState<string[]>([])
  const onClick = (item: string) => {
    let newSelected: string[]

    if (selected.includes(item)) {
      newSelected = selected.filter((x) => x !== item)
    } else {
      newSelected = [...selected, item]
    }

    props.onChange && props.onChange(newSelected)
    setSelected(newSelected)
  }

  return (
    <div className={cls.selection}>
      {props.items.map((x) => (
        <div
          className={classes(cls.item, 'o-btn', selected.includes(x) ? cls['item--selected'] : undefined)}
          key={x}
          onClick={() => onClick(x)}
        >
          {x}
        </div>
      ))}
    </div>
  )
}
