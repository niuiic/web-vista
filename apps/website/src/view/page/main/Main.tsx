import { useDebounce } from '@/util/debounce'
import { Input } from '@/view/component/input'
import type { ShowCaseOptions } from '@/view/component/showCase'
import { ShowCase } from '@/view/component/showCase'
import cssComponents from 'css'
import { useState } from 'react'
import cls from './main.module.scss'

export const Main = () => {
  const match = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())

  const searchChange = useDebounce((value: string) => {
    setCases(
      allCases.filter((x) => {
        if (match(x.title, value)) {
          return true
        }

        if (x.tags?.find((x) => match(x, value))) {
          return true
        }

        if (match(x.category, value)) {
          return true
        }

        return false
      })
    )
  })

  const allCases = cssComponents as ShowCaseOptions[]
  const [cases, setCases] = useState<ShowCaseOptions[]>(allCases)

  return (
    <div className={cls.main}>
      <Input onChange={searchChange} placeholder="Name/Category/Tag" />
      <div className={cls.showcases}>
        {cases.map((options, i) => (
          <ShowCase options={options} key={i} />
        ))}
      </div>
    </div>
  )
}
