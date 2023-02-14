// 定义一个reactiveHandler处理对象
const reactiveHandler = {
    // 获取属性值
    get(target, prop) {
        if(prop === '_is_readonly') return true
        const result = Reflect.get(target, prop)
        console.log('拦截了读取数据', prop, result)
        return result
    },
    // 修改属性值或者是添加属性
    set(target, prop, value) {
        const result = Reflect.set(target,prop,value)
        console.log('拦截了修改数据或者是添加属性', prop, value)
        return result
    },
    // 删除某个属性
    deleteProperty(target, prop) {
        const result = Reflect.defineProperty(target,prop)
        console.log('拦截了删除数据',prop)
        return result
    }
}

// 定义一个shallowReactive函数，传入一个目标对象
function shallowReactive(target) {
    // 判断当前目标对象是不是object类型(数组/对象)
    if(target && typeof target === 'object') {
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的是基本数据类型那就直接返回
    return target
}

let shallowReactiveOrigin = {
    a: 1,
    b: {
        bb: 123,
        bbb: '123'
    }
}
let shallowReactiveData = shallowReactive(shallowReactiveOrigin)
shallowReactiveData.b = 3

console.log('shallowReactiveOrigin', shallowReactiveOrigin)
console.log('shallowReactiveData', shallowReactiveData, shallowReactiveData.a)
