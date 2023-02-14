// 定义一个shallowRef函数
function shallowRef(target) {
    return {
        // 保存target数据
        _value:target,
        get value() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val)
            this._value = val
        }
    }
}

let currentVal = 'i am a shallowRefVal'
let shallowRefVal = shallowRef(currentVal)

shallowRefVal.value = 'change'

console.log('===currentVal===', currentVal)
console.log('===shallowRefVal===', shallowRefVal)

// 结果
// 劫持到了修改数据，准备更新界面 change
// shallowRef.js?26c2:22 ===currentVal=== i am a shallowRefVal
// shallowRef.js?26c2:23 ===shallowRefVal=== {_value: 'change'}
    // 展开
    // value: "change"
    // _value: "change"
    // get value: ƒ value()
    // set value: ƒ value(val)
    // [[Prototype]]: Object
// shallowRef.js?26c2:7 劫持到了读取数据