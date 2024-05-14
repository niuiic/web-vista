import { Layout } from '@/view/component/layout'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from './view/component/footer'
import { Entry, Nav } from './view/component/nav'
import { ShowCaseOptions } from './view/component/showCase'
import { Detail } from './view/page/detail/Detail'
import { Error } from './view/page/error/Error'
import { Home } from './view/page/home/Home'
import { List } from './view/page/list/List'

export const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // # entries
  const entries: Entry[] = [
    {
      label: 'showcase',
      onClick: () => navigate('/showcase')
    },
    {
      label: 'standard',
      onClick: () => navigate('/standard')
    }
  ]
  const [currentEntry, setCurrentEntry] = useState<string | undefined>(entries[0].label)
  useEffect(() => {
    const targetEntry = entries.find((x) => location.pathname.startsWith('/' + x.label))
    if (!targetEntry) {
      setCurrentEntry(undefined)
      return
    }
    setCurrentEntry(targetEntry.label)
  }, [location])

  // # cases
  const [cases, setCases] = useState<ShowCaseOptions[]>([])
  useEffect(() => {
    import('css').then((x) => setCases(x.default))
  }, [])

  return (
    <Layout
      nav={<Nav entries={entries} currentEntry={currentEntry} />}
      main={
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/showcase" element={<List cases={cases.filter((x) => !x.isStandard)} />}></Route>
          <Route path="/standard" element={<List cases={cases.filter((x) => x.isStandard)} />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      }
      footer={<Footer />}
    />
  )
}
