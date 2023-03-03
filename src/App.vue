<template>
  <div name="appVue" id="app">
    <div class="container" ref="containerRef">
      <keep-alive :include="includeList" :exclude="excludeList" :max="max">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
      /**
       * max 最大缓存数
       * include 和 exclude prop 允许组件有条件地缓存。
       * 二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：
       * include="a,b"
       * :include="/a|b/"
       * :include="['a', 'b']"
       */
      max: 3,
			includeList: ['loginRegister'], // 页面结尾loginRegister
      excludeList: ['layoutHome'] // 优先级高
		}
	}
}
</script>
<style lang="scss">
html,body{
  width: 100%;
	height: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
	height: 100%;
}
.container{
  width: 100%;
	height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
