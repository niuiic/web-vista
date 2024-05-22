import type { ChangeEvent } from 'react'
import { Image } from '../image'
import cls from './input.module.scss'

interface Props {
  value: string
  setValue: (value: string) => void
  onChange?: (value: string) => void
  placeholder?: string
  iconUrl?: string
}

export const Input = (props: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value)
    props.onChange && props.onChange(event.target.value)
  }

  return (
    <div className={cls.input}>
      {props.iconUrl ? <Image src={props.iconUrl} className={cls['input__prefix']} /> : undefined}
      <input
        value={props.value}
        className={cls['input__inner']}
        type="text"
        placeholder={props.placeholder}
        onChange={onChange}
      />
    </div>
  )
}
