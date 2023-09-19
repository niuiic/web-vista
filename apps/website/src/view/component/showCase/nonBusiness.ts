export interface ShowCaseOptions {
  title: string
  desc: string
  category: string
  tags?: string[]

  html: string
  css?: string
  js?: string

  code: {
    label: string
    filetype: string
    content: string
  }[]
}
