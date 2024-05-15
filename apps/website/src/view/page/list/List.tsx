import searchSvgUrl from '@/asset/image/search.svg'
import { Input } from '@/view/component/input'
import { Selection } from '@/view/component/selection/Selection'
import type { ShowcaseOptions } from '@/view/component/showcase'
import { Showcase } from '@/view/component/showcase'
import { decode, encode } from 'js-base64'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cls from './list.module.scss'

interface Props {
  cases: ShowcaseOptions[]
}

export const List = (props: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const match = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())

  // # filter
  const [input, setInput] = useState<string>('')
  const [selected, setSelected] = useState<string[]>([])
  const [items, setItems] = useState<string[]>([])
  useEffect(() => {
    const itemSet = new Set<string>()
    props.cases.forEach((x) => itemSet.add(x.category))
    const newItems: string[] = []
    itemSet.forEach((x) => newItems.push(x))
    setItems(newItems)
  }, [props.cases])
  useEffect(() => {
    const match = location.search.match(/search=([^&]+)/)
    const search = match ? JSON.parse(decode(match[1])) : {}
    setInput(search.input ?? '')
    setSelected(search.selected ?? [])
  }, [location])

  // # cases
  const [cases, setCases] = useState<ShowcaseOptions[]>([])
  const updateCases = () => {
    setCases(
      props.cases.filter((x) => {
        if (selected.length > 0 && !selected.includes(x.category)) {
          return false
        }
        if (!input) {
          return true
        }
        if (match(x.title, input)) {
          return true
        }
        if (x.tags?.find((x) => match(x, input))) {
          return true
        }
        return false
      })
    )
  }
  useEffect(updateCases, [props.cases, input, selected])

  const checkDetail = (showcase: ShowcaseOptions) => {
    const search = { input, selected }
    navigate(`/detail?id=${showcase.id}&return=${location.pathname}&search=${encode(JSON.stringify(search), true)}`)
  }

  return (
    <div className={cls.main}>
      <div className={cls.filter}>
        <span className={cls['filter__label']}>Title/Tag</span>
        <Input value={input} setValue={setInput} iconUrl={searchSvgUrl} />
        <span className={cls['filter__label']}>Category</span>
        <Selection selected={selected} setSelected={setSelected} items={items}></Selection>
      </div>
      <div className={cls.showcases}>
        {cases.map((options, i) => (
          <Showcase options={options} key={i} onClick={checkDetail} />
        ))}
      </div>
    </div>
  )
}
