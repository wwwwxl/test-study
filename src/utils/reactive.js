// 定义一个reactive函数，传入一个目标对象
function reactive(target) {
    // 判断当前的目标对象是不是object类型(对象/数组)
    if(target && typeof target === 'object') {
        // 对数组或者是对象中所有的数据进行reactive的递归处理
        // 先判断当前的数据是不是数组
        if(Array.isArray(target)) {
            // 数组的数据要进行遍历操作
            target.forEach((item,index)=>{
                target[index] = reactive(item)
            })
        }else {
            // 再判断当前的数据是不是对象
            // 对象的数据也要进行遍历的操作
            Object.keys(target).forEach(key=>{
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target,reactiveHandler)
    }
    // 如果传入的是基本数据类型那就直接返回
    return target
}

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

let reactiveOrigin = {
    a: 1,
    b: {
        bb: 123,
        bbb: '123'
    }
}
let reactiveData = reactive(reactiveOrigin)
reactiveData.b.bb = 3

console.log('reactiveOrigin', reactiveOrigin)
console.log('reactiveData', reactiveData, reactiveData.a)