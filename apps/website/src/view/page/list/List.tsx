import searchSvgUrl from '@/asset/image/search.svg'
import { Input } from '@/view/component/input'
import { Pagination } from '@/view/component/pagination'
import { Selection } from '@/view/component/selection'
import type { ShowcaseOptions } from '@/view/component/showcase'
import { Showcase } from '@/view/component/showcase'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cls from './list.module.scss'

const search: Partial<{
  input: string
  selected: string[]
  pageNum: number
}> = {}

interface Props {
  cases: ShowcaseOptions[]
}

export const List = (props: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const match = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())

  // # filter
  const [input, setInput] = useState<string>(search.input ?? '')
  const [selected, setSelected] = useState<string[]>(search.selected ?? [])
  const items = ['css', 'webgl']
  const [pageNum, setPageNum] = useState<number>(search.pageNum ?? 1)
  const pageSize = 6
  const assignInput = (input: string) => {
    setInput(input)
    setPageNum(1)
  }
  const assignSelected = (selected: string[]) => {
    setSelected(selected)
    setPageNum(1)
  }

  // # cases
  const casesRef = useRef<HTMLDivElement>()
  const [cases, setCases] = useState<ShowcaseOptions[]>([])
  const updateCases = () => {
    const newCases = props.cases.filter((x) => {
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
    setCases(newCases)
  }
  useEffect(updateCases, [props.cases, input, selected])
  useEffect(() => {
    casesRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageNum, props.cases, input, selected])

  // # detail
  const checkDetail = (showcase: ShowcaseOptions) => {
    search.input = input
    search.selected = selected
    search.pageNum = pageNum
    navigate(`/detail?id=${showcase.id}&return=${location.pathname}`)
  }

  return (
    <div className={cls.list}>
      <div className={cls.filter}>
        <span className={cls['filter__label']}>Title/Tag</span>
        <Input value={input} setValue={assignInput} iconUrl={searchSvgUrl} />
        <span className={cls['filter__label']}>Category</span>
        <Selection selected={selected} setSelected={assignSelected} items={items} />
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
