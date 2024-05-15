import searchSvgUrl from '@/asset/image/search.svg'
import { useDebounce } from '@/util/debounce'
import { Input } from '@/view/component/input'
import { Selection } from '@/view/component/selection/Selection'
import type { ShowcaseOptions } from '@/view/component/showcase'
import { Showcase } from '@/view/component/showcase'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './list.module.scss'

interface Props {
  cases: ShowcaseOptions[]
}

export const List = (props: Props) => {
  const navigate = useNavigate()
  const match = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())

  // # filter
  const [items, setItems] = useState<string[]>([])
  useEffect(() => {
    const itemSet = new Set<string>()
    props.cases.forEach((x) => itemSet.add(x.category))
    const newItems: string[] = []
    itemSet.forEach((x) => newItems.push(x))
    setItems(newItems)
  }, [props.cases])

  // # cases
  const [cases, setCases] = useState<ShowcaseOptions[]>([])
  let prevInput: string
  let prevSelected: string[]
  const onInputChange = (input: string) => {
    prevInput = input
    debounceedUpdateCases()
  }
  const onSelectionChange = (selected: string[]) => {
    prevSelected = selected
    debounceedUpdateCases()
  }
  const updateCases = () => {
    setCases(
      props.cases.filter((x) => {
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
  }
  const debounceedUpdateCases = useDebounce(updateCases)
  useEffect(updateCases, [props.cases])

  const checkDetail = (showcase: ShowcaseOptions) => {
    navigate(`/detail?id=${showcase.id}`)
  }

  return (
    <div className={cls.main}>
      <div className={cls.filter}>
        <span className={cls['filter__label']}>Title/Tag</span>
        <Input onChange={onInputChange} iconUrl={searchSvgUrl} />
        <span className={cls['filter__label']}>Category</span>
        <Selection onChange={onSelectionChange} items={items}></Selection>
      </div>
      <div className={cls.showcases}>
        {cases.map((options, i) => (
          <Showcase options={options} key={i} onClick={checkDetail} />
        ))}
      </div>
    </div>
  )
}
