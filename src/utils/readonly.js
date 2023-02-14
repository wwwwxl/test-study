// 定义一个readonly函数
function readonly (target) {
    // 需要判断当前的数据是不是对象
    if(target && typeof target === 'object') {
        // 判断target是不是数组
        if(Array.isArray(target)) {
            // 遍历数组
            target.forEach((item,index)=>{
                target[index] = readonly(item)
            })
        }else { // 判断target是不是对象
            // 遍历对象
            Object.keys(target).forEach(key=>{
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target, readonlyHandler)
    }
    // 如果不是数组或者对象直接返回
    return target
}

// 定义一个readonlyHandler
const readonlyHandler = {
    get(target, prop) {
        const result = Reflect.get(target,prop)
        console.log('拦截到了读取数据了', prop, result)
        return result
    },
    set(target,prop,value) {
        console.warn('只能读取数据，不能修改数据或者添加数据')
        return true
    },
    deleteProperty(target,prop) {
        console.warn('只能读取数据，不能删除数据')
        return true
    }
}

let dataOrigin1 = {
    a: 1,
    b: {
        bb: 11,
        bbb: 111
    }
}
let data1 = readonly(dataOrigin1)

data1.b.bb = 2
console.log('data1', data1, data1.a, data1.b.bb)