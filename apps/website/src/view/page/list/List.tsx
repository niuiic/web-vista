import searchSvgUrl from '@/asset/image/search.svg'
import { Input } from '@/view/component/input'
import { Pagination } from '@/view/component/pagination'
import { Selection } from '@/view/component/selection/Selection'
import type { ShowcaseOptions } from '@/view/component/showcase'
import { Showcase } from '@/view/component/showcase'
import { decode, encode } from 'js-base64'
import { useEffect, useRef, useState } from 'react'
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
  const [pageNum, setPageNum] = useState<number>(1)
  const pageSize = 6
  useEffect(() => {
    const itemSet = new Set<string>()
    props.cases.forEach((x) => itemSet.add(x.category))
    const newItems: string[] = []
    itemSet.forEach((x) => newItems.push(x))
    setItems(newItems)
  }, [props.cases])
  useEffect(() => {
    const match = location.search.match(/search=([^&]+)/)
    let search: Record<string, any>
    try {
      search = match ? JSON.parse(decode(match[1])) : {}
    } catch {
      search = {}
    }
    setInput(search.input ?? '')
    setSelected(search.selected ?? [])
    setPageNum(search.pageNum ?? 1)
  }, [location])

  // # cases
  const casesRef = useRef<HTMLDivElement>()
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
  useEffect(() => {
    casesRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageNum, props.cases, input, selected])

  const checkDetail = (showcase: ShowcaseOptions) => {
    const search = { input, selected, pageNum }
    navigate(`/detail?id=${showcase.id}&return=${location.pathname}&search=${encode(JSON.stringify(search), true)}`)
  }

  return (
    <div className={cls.list}>
      <div className={cls.filter}>
        <span className={cls['filter__label']}>Title/Tag</span>
        <Input value={input} setValue={setInput} iconUrl={searchSvgUrl} />
        <span className={cls['filter__label']}>Category</span>
        <Selection selected={selected} setSelected={setSelected} items={items} />
        <span className={cls['filter__label']}>Page</span>
        <Pagination
          className={cls.pagination}
          pageNum={pageNum}
          setPageNum={setPageNum}
          pageSize={pageSize}
          count={cases.length}
        />
      </div>
      <div className={cls.showcases} ref={casesRef}>
        {cases.slice((pageNum - 1) * pageSize, pageNum * pageSize).map((options, i) => (
          <Showcase className={cls.showcase} options={options} key={i} onClick={checkDetail} />
        ))}
      </div>
    </div>
  )
}
