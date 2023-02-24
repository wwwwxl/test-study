import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 只要在index.js里规定了install方法，就可以向其他ui组件库那样，使用Vue.use()来全局使用
import exportDefaultObject from '@/components/index.js'
Vue.use(exportDefaultObject)

// import objectPrototype from '@/utils/objectPrototype.js'
// import '@/plugins/use.js'
import say from '@/plugins/say.js'
Vue.use(say)

// vue3响应式原理
// import '@/utils/isProxy'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
