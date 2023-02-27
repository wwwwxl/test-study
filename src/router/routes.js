/**
 * files 递归获取src文件夹下的所有以.vue结尾文件
 * 三个参数：
 * 一个要搜索的目录，
 * 一个标记表示是否还搜索其子目录， 
 * 以及一个匹配文件的正则表达式。
 * 匹配index.vue结尾的页面作为路由
 */
const files = require.context('@/views', true, /^.*(index.vue){1}$/)
// 循环获取到的匹配的文件路径如./loginRegister/index.vue,
// key是文件的名称,files（key）.default拿到该模块的vue对象
let pages = {};
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
  // aboutView/index: {vue实例}
});
/**
 * generator 生成路由规则,实例如下
 * [
 *  {
 *     path: "/",
 *     name: "home",
 *     component: HomeView (= import("../views/aboutView/index.vue") =)
 *  }
 * ]
 */
let initRoutes = [
  {
    path: "/",
    name: "initPage",
    component: ()=>import("@/views/loginRegister/index.vue"),
    meta: {
      title: '登录注册',
      keepAlive: true
    }
  }
]
let generator = [];
Object.keys(pages).forEach(item => {
  let Rpath=item.replace(new RegExp('/index','g'),"");
  generator.push({
      path: `/${Rpath}`,
      name: Rpath,
      meta: pages[item].routesMeta || {title: '',keepAlive: false},
      component: pages[item]
  })
});
//将生成路由导入合并
const routes = [
 ...initRoutes,...generator
];
console.log('======routes======', routes)
export default routes;