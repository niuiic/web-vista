import { Layout } from '@/view/component/layout'
import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Footer } from './view/component/footer'
import { Entry, Nav } from './view/component/nav'
import { Detail } from './view/page/detail/Detail'
import { Error } from './view/page/error/Error'
import { Home } from './view/page/home/Home'
import { List } from './view/page/list/List'

export const App = () => {
  const navigate = useNavigate()

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
  const [currentEntry, setCurrentEntry] = useState(entries[0].label)
  window.addEventListener('popstate', (e) => console.log(e))

  return (
    <Layout
      nav={<Nav entries={entries} currentEntry={currentEntry} setCurrentEntry={setCurrentEntry} />}
      main={
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/showcase" element={<List isStandard={false} />}></Route>
          <Route path="/standard" element={<List isStandard={true} />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      }
      footer={<Footer />}
    />
  )
}
