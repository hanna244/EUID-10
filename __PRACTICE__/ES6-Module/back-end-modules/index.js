const utils = require('./modules/utils')
let { map, each } = utils
console.log(utils)

let r_array = map([3, 6, 9], (item) => item * item)
console.log(r_array)
