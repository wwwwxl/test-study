//axios插件请求引入
import axios from "axios";
//请求主地址配置
import configHttp from "./config.js";

// 引入loading
import loadingObject from "@/components/AntLoading/loading.js"
//设置请求地址
const BASEURL = configHttp.baseUrl;
//创建请求实例
const service = axios.create({
    baseURL: BASEURL,
    timeout: 30000
});
service.defaults.withCredentials = false;
// 添加请求拦截器（在发送请求之前做些什么）
service.interceptors.request.use(function (config) {
    // 添加等待动画
    loadingObject.loading.open()
    // 添加头部信息
    config.headers['Content-Type'] = 'application/json';
    return config;
}, function (error) {
    // 对请求错误做些什么
    loadingObject.loading.close()
    return Promise.reject(error);
});
// 添加响应拦截器(对响应数据做点什么)
service.interceptors.response.use(function (response) {
    // 关闭动画
    loadingObject.loading.close()
    // 处理响应数据
    let res = response.data;
    if (res.status == 200) {
        return res;
    } else {
        return Promise.reject(response);
    }
}, function (error) {
    // 对响应错误做点什么
    loadingObject.loading.close()
    return Promise.reject(error);
});
export default service;