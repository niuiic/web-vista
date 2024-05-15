import { classes } from '@/util/class'
import cls from './selection.module.scss'

interface Props {
  items: string[]
  selected: string[]
  setSelected: (selected: string[]) => void
  onChange?: (selected: string[]) => void
}

export const Selection = (props: Props) => {
  const onClick = (item: string) => {
    let newSelected: string[]

    if (props.selected.includes(item)) {
      newSelected = props.selected.filter((x) => x !== item)
    } else {
      newSelected = [...props.selected, item]
    }

    props.setSelected(newSelected)
    props.onChange && props.onChange(newSelected)
  }

  return (
    <div className={cls.selection}>
      {props.items.map((x) => (
        <div
          className={classes(cls.item, 'o-btn', props.selected.includes(x) ? cls['item--selected'] : undefined)}
          key={x}
          onClick={() => onClick(x)}
        >
          {x}
        </div>
      ))}
    </div>
  )
}
