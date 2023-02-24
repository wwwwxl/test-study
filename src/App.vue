<template>
  <div id="app">
    <nav>
      <router-link to="/">登录页</router-link>  |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="container" ref="childBotRef">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
	height: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
	height: 100%;
}

nav {
  padding: 30px;
  box-sizing: border-box;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container{
  width: 100%;
  height: 800px;
  overflow: auto;
}
</style>
