// export export{} export default{} 三种通用得导入、导出方式
import * as a from './a.js' // 导入export a
import * as b from './b.js' // 导入export { b }
import * as c from './c.js' // 导入export default{ c }

console.log('a===', a)
console.log('b===', b)
console.log('c===', c)

// 解构赋值方式
import {a as a_1,aa} from './a.js' // 导入export a
import {b as b_1,bb} from './b.js' // 导入export { b }
import {default as cc} from './c.js' // 导入export default{ c }

console.log('a_1===', a_1, aa)
console.log('b_1===', b_1, bb)
console.log('cc===', cc)

// 针对默认导出形式export default{ c }得简便形式
import ccc from './c.js' // 导入export default{ c }
console.log('ccc===', ccc)