import type { Plugin } from 'postcss'

export const transPx = (unitLength: string): Plugin => {
  const exceptFuncs = ['url']
  const regex = {
    px: new RegExp(`(?<!(?:${exceptFuncs.join('|')})\\([^\\)]*)([-\\+]?[\\d.e]+)px`, 'g'),
    opx: new RegExp(`(?<!(?:${exceptFuncs.join('|')})\\([^\\)]*)([-\\+]?[\\d.e]+)opx`, 'g')
  }
  const transedPx = (val: string) => val.replace(regex.px, (_, v) => `calc(${v} * ${unitLength})`)
  const transedOPx = (val: string) => val.replace(regex.opx, (_, v) => `calc(${v} * 1pc / 16)`)

  const trans = (value: string) => {
    if (value.includes('opx')) {
      return transedOPx(value)
    }
    if (value.includes('px')) {
      return transedPx(value)
    }
    return value
  }
  return {
    postcssPlugin: 'postcss-plugin-transPx',
    Declaration(decl) {
      decl.value = trans(decl.value)
    },
    AtRule(atRule) {
      atRule.params = trans(atRule.params)
    }
  }
}
