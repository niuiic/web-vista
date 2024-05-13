import type { ChangeEvent } from 'react'
// import { Icon } from '../icon'
import cls from './input.module.scss'

interface Props {
  initialValue?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export const Input = (props: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => props.onChange && props.onChange(event.target?.value)

  return (
    <div className={cls.input}>
      {/* <Icon className={cls['input__prefix']} name="search" /> */}
      <input className={cls['input__inner']} type="text" placeholder={props.placeholder} onChange={onChange} />
    </div>
  )
}
