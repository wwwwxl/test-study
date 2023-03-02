import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/homeView/index.vue";
// import About from "../views/aboutView/index.vue"

import routes from './routes'

// 忽略跳转到同一页面报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "about",
//     component: About,
//     // component: () => import(/* webpackChunkName: "about" */ "../views/aboutView/index.vue"),
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
