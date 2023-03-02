/**
 * files 递归获取src文件夹下的所有以.vue结尾文件
 * 三个参数：
 * 一个要搜索的目录，
 * 一个标记表示是否还搜索其子目录， 
 * 以及一个匹配文件的正则表达式。
 * 匹配index.vue结尾的页面作为路由
 */
const files = require.context('@/views/pages', true, /^.*(index.vue){1}$/)
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
    redirect: '/loginRegister'
  },
  {
    path: "/loginRegister",
    name: "loginRegister",
    component: ()=>import("@/views/loginRegister/index.vue"),
    meta: {
      title: '登录注册',
      keepAlive: true
    }
  },
  {
    path: "/layoutHome",
    name: "layoutHome", // 作为下方添加children路由判断凭证
    component: ()=>import("@/views/layoutHome/index.vue"),
    meta: {
      title: '首页',
      keepAlive: true
    },
    children: [
      // {
      //   meta: {title: '系统首页', keepAlive: true},
      //   name: "system",
      //   path: "/system",
      //   component: ()=>import("@/views/pages/system/index.vue"),
      // },
      // {
      //   meta: {title: '组织管理', keepAlive: true},
      //   name: "systemOrg",
      //   path: "/system/org",
      //   component: ()=>import("@/views/pages/system/org/index.vue"),
      // }
    ]
  }
];
let layoutHomeChidrenInit = [
  {
    path: "/403",
    name: "403",
    component: ()=>import("@/views/pagesStatusTip/403/index.vue"),
    meta: {
      title: '403',
      keepAlive: true
    }
  },
  {
    path: "/404",
    name: "404",
    component: ()=>import("@/views/pagesStatusTip/404/index.vue"),
    meta: {
      title: '404',
      keepAlive: true
    }
  },
  {
    path: "/500",
    name: "500",
    component: ()=>import("@/views/pagesStatusTip/500/index.vue"),
    meta: {
      title: '500',
      keepAlive: true
    }
  }
];
let generator = [];
Object.keys(pages).forEach(item => {
  let Rpath=item.replace(new RegExp('/index','g'),"");
  let RpathList = Rpath.split("/");
  let Rname = ''
  if(RpathList.length>1) {
    RpathList.map((item,index)=>{
      if(index>0) {
        item = item.toString()
        item = item.slice(0,1).toUpperCase() + item.slice(1)
      }
      Rname +=item
    })
  }else {
    Rname = Rpath
  }
  generator.push({
      path: `/${Rpath}`,
      name: Rname,
      meta: pages[item].routesMeta || {title: '',keepAlive: false},
      component: pages[item]
  })
});
//将生成路由导入合并
for(let item of initRoutes) {
  if(item.name === 'layoutHome') {
    item.children = [...generator,...layoutHomeChidrenInit]
    break;
  }
}
const routes = [
 ...initRoutes
];
// 动态路由需注意路由跳转,需要保证动态路由和跳转的路由相匹配
console.log('======generator=routes======', generator)
export default routes;