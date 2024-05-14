import { useAsset } from '@/util/asset'
import { useDebounce } from '@/util/debounce'
import { Input } from '@/view/component/input'
import { Selection } from '@/view/component/selection/Selection'
import type { ShowCaseOptions } from '@/view/component/showCase'
import { ShowCase } from '@/view/component/showCase'
import cssComponents from 'css'
import { useEffect, useState } from 'react'
import cls from './list.module.scss'

interface Props {
  isStandard: boolean
}

export const List = (props: Props) => {
  const match = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())

  // # filter
  const [items, setItems] = useState<string[]>([])
  useEffect(() => {
    const itemSet = new Set<string>()
    allCases.forEach((x) => itemSet.add(x.category))
    const newItems: string[] = []
    itemSet.forEach((x) => newItems.push(x))
    setItems(newItems)
  }, [props.isStandard])

  // # cases
  const allCases = cssComponents as ShowCaseOptions[]
  const [cases, setCases] = useState<ShowCaseOptions[]>(allCases)
  let prevInput: string
  let prevSelected: string[]
  const onInputChange = (input: string) => {
    prevInput = input
    updateCases()
  }
  const onSelectionChange = (selected: string[]) => {
    prevSelected = selected
    updateCases()
  }
  const updateCases = useDebounce(() => {
    setCases(
      allCases.filter((x) => {
        if (!prevInput && (!prevSelected || prevSelected.length === 0)) {
          return true
        }
        if (prevInput && match(x.title, prevInput)) {
          return true
        }
        if (prevInput && x.tags?.find((x) => match(x, prevInput))) {
          return true
        }
        if (prevSelected && prevSelected.includes(x.category)) {
          return true
        }
        return false
      })
    )
  })

  return (
    <div className={cls.main}>
      <div className={cls.filter}>
        <span className={cls['filter__label']}>Title/Tag</span>
        <Input onChange={onInputChange} iconUrl={useAsset('image/search.svg')} />
        <span className={cls['filter__label']}>Category</span>
        <Selection onChange={onSelectionChange} items={items}></Selection>
      </div>
      <div className={cls.showcases}>
        {cases.map((options, i) => (
          <ShowCase options={options} key={i} />
        ))}
      </div>
    </div>
  )
}
