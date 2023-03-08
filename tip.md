# vue2用于学习测试得项目
# [Symbol.iterator]
# 常见指令
# vue2，vue3响应式原理
# vue.use使用
# vue自动生成路由
# 描点跳转
# es6导入导出
# 自定义组件注册
# 自定义插件vue.use

# vue2使用ant-design-vue 高级配置按需引入
# npm i --save ant-design-vue@1.7.8
# npm install less@3.0.4 less-loader@5.0.0 --save-dev
# ant-design-vue所有组件位置https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js
# 登录页面
# 页面导航页面,使用render递归生成

# keep-alive
# <KeepAlive> 默认会缓存内部的所有组件实例，
# 它会根据组件的 name 选项进行匹配，所以组件如果想要条件性地被 KeepAlive 缓存，就必须显式声明一个 name 选项。
不生效
检查这个组件在router文件中的配置name和组件实例中的name不一致，
如下面，
全局守卫中拿到的to或from的name是从router中对应的路由对象中拿的，
而App.js 中的keepAlive标签中的exclude是对比的组件实例中的name
使用过程发现，组件的name和router配置的name不一样，keep-alive也无法生效，
这里也提供给我们一种思路，如果页面不需要缓存，把name设置不一样就好了（不推荐使用）
# 生命周期
activated() {
    // 在首次挂载、
    // 以及每次从缓存中被重新插入的时候调用
  },
  deactivated() {
    // 在从 DOM 上移除、进入缓存
    // 以及组件卸载时调用
  }
## vue-tools工具中会有组件是否失活提示，inactive
# 读取文件夹方式生成router.js路由文件

# 403,404,500页面

# 使用mock(需要注意匹配的路径问题避免拦截请求失败)
npm install mockjs

# 安装axios两者选其一
# npm install axios
# npm install --save axios vue-axios
# main.js如下
// 使用自定义axios
import service from "@/api/axios"
Vue.prototype.$serviceReq = service
// axios使用
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

# 数据请求注意事项===========================================
1、注意mock的匹配路径。如果发现拦截失败，可以检查请求的路径和定义的路径是否一致
2、注意设置的根路径请求地址是否是/斜杠开头，如果不是会加上路由路径
3、注意自定义请求方法的时候api/axios文件的拦截状态响应是不是做了拦截处理

# 自定义一个loading加载框并通过方法调用涉及vue.use和vue.prototype以及vue实例渲染挂载知识
# 知识找寻处，有道云笔记，github项目test-study, vue-ant-pinia

# 动态路由需注意路由跳转,需要保证动态路由和跳转的路由相匹配

# 增加一个loading组件方法调用，数据请求调用方法 
# npm i --save lodash   是一个一致性/模块化/高性能的 javascript 实用工具库
#
import _lodash from 'lodash'
Vue.prototype._ = _lodash

# 原因是由于在webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入
# npm install node-polyfill-webpack-plugin
# 在vue.config.json中添加（本文作者没有用到这一步，用第一步命令安装后就可以运行）

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
 
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  }
})

###
问题分析
如果模板字符串中${}大括号中的值不是字符串，则将按照一般的规则转换为字符串。如，若大括号中是一个对象，则将默认调用对象的toString方法，把对象转换为字符串。但是空对象调用toString方法就会显示[object Object]，因此问题出现。

####  不要随意删除组件内得方法，哪怕组件内没有使用到，但是有可能父组件使用到了 ####

## 表单初始值赋值，表单添加，修改

# // 动态路由，路由守卫（菜单权限），按钮权限，