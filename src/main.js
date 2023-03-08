import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 只要在index.js里规定了install方法，就可以向其他ui组件库那样，使用Vue.use()来全局使用
import exportDefaultObject from '@/components/TestVueUse.js'
Vue.use(exportDefaultObject)

// import objectPrototype from '@/utils/objectPrototype.js'
// import '@/plugins/use.js'
import say from '@/plugins/say.js'
Vue.use(say)

// vue3响应式原理
// import '@/utils/isProxy'

// ant-design-vue按需引入
import '@/components/antDesign.js'

// 引用mock
require('./mock/index.js');

// 引用自定义loading
import loading from "@/components/AntLoading/loading.js"
Vue.use(loading)

// 使用自定义axios
import service from "@/api/axios"
Vue.prototype.$serviceReq = service
// axios使用
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import _lodash from 'lodash'
Vue.prototype.$_lodash = _lodash


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
