import { transPx } from 'postcss-plugins'

export default {
  plugins: [transPx('var(--unit-length)')]
}
