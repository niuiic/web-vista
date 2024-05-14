import type { ChangeEvent } from 'react'
import { Image } from '../image'
import cls from './input.module.scss'

interface Props {
  placeholder?: string
  onChange?: (value: string) => void
  iconUrl?: string
}

export const Input = (props: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => props.onChange && props.onChange(event.target?.value)

  return (
    <div className={cls.input}>
      {props.iconUrl ? <Image src={props.iconUrl} className={cls['input__prefix']}></Image> : undefined}
      <input className={cls['input__inner']} type="text" placeholder={props.placeholder} onChange={onChange} />
    </div>
  )
}
