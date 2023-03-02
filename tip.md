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

# 使用mock
npm install mockjs

# 安装axios
npm install axios
#增加一个loading组件方法调用


# // 动态路由需注意路由跳转,需要保证动态路由和跳转的路由相匹配

