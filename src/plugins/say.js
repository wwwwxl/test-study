// 创建一个简单的插件 say.js
var install = function (Vue) {
    if (install.installed) return 
        // 如果已经注册过了，就跳过
        install.installed = true
        Object.defineProperties(Vue.prototype, {
            $say: {      
                value: function(val='val') {
                    console.log(`i am a say.js plugin 传入${val}`)
                    return `value = ${val}`
                }
            }
        })
    }
    module.exports = install