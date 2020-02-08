// ajax请求函数模块
// 返回的是promise对象（异步返回的数据是response.data）
import axios from 'axios'
// 暴露默认接口
export default function ajax(url, data = {}, type = 'GET') {
    // data传递的为query数据对象
    return new Promise((resolve, reject) => {
        let promise;
        if (type = 'GET') {
            // 如果是get请求，需要将query数据合并到url中
            let dataStr = '';
            // 调用Object.keys方法  返回的是字符串数组
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                // 合并地址
                url = url + '?' + dataStr.substring(0, dataStr.lastIndexOf('&'))
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        // 监听数据的返回
        promise.then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })

    })
}