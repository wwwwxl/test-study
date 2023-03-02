//axios插件请求引入
import axios from "axios";
//请求主地址配置
import configHttp from "./config.js";
/**
 * axios拦截器
 */
//设置请求地址
const BASEURL = configHttp.baseUrl;
//创建请求实例
const service = axios.create({
    baseURL: BASEURL,
    timeout: 30000
});
service.defaults.withCredentials = false;
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 添加等待动画
    // 添加头部信息
    config.headers['Content-Type'] = 'application/json';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 关闭动画
    // 处理响应数据
    let res = response.data;
    if (res.status == 200) {
        return res;
    } else {
        return Promise.reject(response);
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default service;