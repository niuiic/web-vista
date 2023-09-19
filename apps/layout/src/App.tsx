import { Layout } from '@/view/component/layout'
import type { Entry } from './view/component/nav'
import { Nav } from './view/component/nav'

export const App = () => {
  const entries: Entry[] = ['webgl', 'css'].map((x) => ({
    label: x,
    onClick: () => console.log(x)
  }))

  return <Layout nav={<Nav entries={entries} />} main={<div>hello</div>} footer={<div>hello</div>} />
}
