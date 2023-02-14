// 定义一个shallowReadonly函数
function shallowReadonly(target) {
    // 需要判断当前的数据是不是对象
    if(target && typeof target === 'object') {
        return new Proxy(target, readonlyHandler)
    }
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

// let dataOrigin = 1
// let data = shallowReadonly(dataOrigin)

// data = 2
// console.log('data', data)

let dataOrigin1 = {
    a: 1,
    b: {
        bb: 11,
        bbb: 111
    }
}
let data1 = shallowReadonly(dataOrigin1)

data1.b = 2
console.log('data1', data1, data1.a)

