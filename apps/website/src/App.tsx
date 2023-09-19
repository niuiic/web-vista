import { Layout } from '@/view/component/layout'
import { Footer } from './view/component/footer'
import { Nav } from './view/component/nav'
import { Main } from './view/page/main/Main'

export const App = () => <Layout nav={<Nav entries={[]} />} main={<Main />} footer={<Footer />} />
