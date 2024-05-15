export interface ShowcaseOptions {
  id: string
  title: string
  desc: string
  category: string
  tags?: string[]
  isStandard?: boolean

  html: string
  css?: string
  js?: string

  code: {
    label: string
    filetype: string
    content: string
  }[]
}
