import pxtorem from 'postcss-pxtorem'

export default {
  plugins: [
    pxtorem({
      rootValue: 100,
      propList: ['*']
    })
  ]
}
