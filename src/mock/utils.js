/**
 * builder 构建响应体
 * @params data
 * @params message="请求成功"
 * @params code = 0
 * @params headers = {}
 * @return object
 */
export const builder = (data, message="请求成功", code = 0, headers = {}) => {
    // 注意responseBody不能是全局变量。每次进入重新定义一个。如果是全局的最后一个将会覆盖之前的。导致意料之外的错误
    const responseBody = {
        message: '',
        timestamp: 0,
        result: null,
        code: 0,
        status: 200
    }
    responseBody.result = data
    if (message !== undefined && message !== null) {
        responseBody.message = message
    }
    if (code !== undefined && code !== 0) {
        responseBody.code = code
        responseBody._status = code
    }
    if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
        responseBody._headers = headers
    }
    responseBody.timestamp = new Date().getTime()
    return responseBody
}
// 获取get请求参数
export const getQueryParameters = (options) => {
    const url = options.url
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}')
}
// 获取post请求参数
export const getBody = (options) => {
    return options.body && JSON.parse(options.body)
}