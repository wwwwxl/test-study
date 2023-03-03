import Message from "./index.vue";
// 定义vue实例和节点对象
let VueItem = null
let loadingNode = null
// 导出一个对象
export default {
    install(Vue) {
        VueItem = Vue
        Vue.prototype.$loading = this.loading
    },
    loading:{
        open() {
            let div = document.createElement('div')
            // div.style.cssText = 'position:fixed;top:0;zIndex:9;width: 100%;height:10%;' // 元素添加样式形式
            div.id = 'loadMessage'
            document.body.appendChild(div)
            /**
             * 注意事项：
             * 此处实例渲染表示渲染哪个节点，并不是代表把哪个节点插入节点之后渲染
             * main.js渲染App和挂载是同一个地方;
             * APP.vue中有一个id="app",html中也有一个id="app"
             * new Vue({render: (h) => h(App),}).$mount("#app");意思渲染App节点到html中id节点并替换它
             * 前提是body节点提前有这个id元素。给各自id加名字看渲染后的名字就知道
             */
            loadingNode =  new VueItem({
                render: (h) => h(Message),
            })
            loadingNode.$mount("#loadMessage");
        },
        close() {
            loadingNode.$destroy("#loadMessage");
            let div = document.getElementById("loadMessage")
            document.body.removeChild(div)  
        }
    },
}
