/*
 * @Author: wangxinliang
 * @Date: 2023-03-02 15:12:16
 * @LastEditors: wangxinliang
 * @LastEditTime: 2023-03-02 16:11:14
 * @Description: file content
 * @FilePath: \test-study\src\mock\index.js
 */
// 首先引入Mock
const Mock = require('mockjs');
import {builder} from './utils'

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/); // 读取当前文件key = ['./demoList.js','./index.js','./user.js']
files.keys().forEach((key) => {
  if (['./index.js','./utils.js'].includes(key)) return; // 去除不必要文件
  configArray = configArray.concat(files(key).default);// 导出的export default
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], builder(target));// 请求路径，方法，数据
  }
});