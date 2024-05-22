import { Layout } from '@/view/component/layout'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from './view/component/footer'
import type { Entry} from './view/component/nav';
import { Nav } from './view/component/nav'
import type { ShowcaseOptions } from './view/component/showcase'
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
      label: 'Showcase',
      onClick: () => navigate('/showcase')
    },
    {
      label: 'Standard',
      onClick: () => navigate('/standard')
    }
  ]
  const [currentEntry, setCurrentEntry] = useState<string>()
  useEffect(() => {
    const targetEntry = entries.find((x) => location.pathname.startsWith('/' + x.label.toLowerCase()))
    if (!targetEntry) {
      setCurrentEntry(undefined)
      return
    }
    setCurrentEntry(targetEntry.label)
  }, [location])

  // # cases
  const [cases, setCases] = useState<ShowcaseOptions[]>([])
  useEffect(() => {
    import('css').then((x) => setCases(x.default))
  }, [])

  return (
    <Layout
      nav={<Nav entries={entries} currentEntry={currentEntry} />}
      main={
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<List cases={cases.filter((x) => !x.isStandard)} />} />
          <Route path="/standard" element={<List cases={cases.filter((x) => x.isStandard)} />} />
          <Route path="/detail" element={<Detail cases={cases} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      }
      footer={<Footer />}
    />
  )
}
