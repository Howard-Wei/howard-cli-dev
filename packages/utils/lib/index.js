'use strict'

module.exports = {
  init (option, value) {
    console.log('-----welcome to howard cli-----')
    console.log('-----init start-----')
    console.log('🚀 ~ file: index.js ~ line 5 ~ init ~ value', value)
    console.log('🚀 ~ file: index.js ~ line 5 ~ init ~ option', option)
    console.log('-----init end-----')
  },
  version () {
    console.log('v1.0.0')
  }
}
