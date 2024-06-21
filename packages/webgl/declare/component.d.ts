declare interface Component {
  id: string
  title: string
  desc?: string
  category?: string
  tags?: string[]
  impl: () => React.JSX.Element
  code?: { label: string; filetype: string; content: string }[]
}
