import snow from './components/snow'
interface Component {
  id: string
  title: string
  desc: string
  category: string
  tags?: string[]
  isStandard?: boolean
  impl: () => React.JSX.Element
  code?: { label: string; filetype: string; content: string }[]
}
export default [snow] satisfies Component[]