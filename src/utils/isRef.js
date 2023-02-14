// 定义一个isRef，判断当前的对象是不是ref对象
function isRef (obj) {
    return obj && obj._is_ref
}

// 定义一个ref函数
function ref(target) {
    target = reactive(target)
    return {
        _is_ref: true, // 标识当前的对象是ref对象
        // 保存target数据
        _value: target,
        get value() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val)
            return this._value = val
        }
    }
}

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

let data = 1
let dataObject = {
    a: 1,
    b: {
        bb: 11,
        bbb: 111
    }
}
const dataRef = ref(data)
console.log('dataRef', dataRef)
console.log('isRef', isRef(dataRef))

const dataObjectRef = ref(dataObject)
console.log('dataObjectRef', dataObjectRef)
console.log('isRef', isRef(dataObjectRef))