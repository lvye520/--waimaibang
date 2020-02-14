// 引入path模块
let path = require('path')
if(process.env.NODE_ENV === 'production') {
    // 发布环境
    module.exports = {
        // 更改静态资源发布位置
        outputDir : path.join(process.cwd(),'../server/static/home'),
        // 更改模板发布位置
        indexPath : path.join(process.cwd(),'../server/views/home.html'),
        // 更改资源引入相对位置
        publicPath : '/static/home'

    }
}else {
    // 开发环境
    module.exports = {
        // 跨域请求代理
        devServer: {
            // 代理
            proxy: {
                '/data/index_category': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },
                '/data/position': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },
                '/data/shops': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },
                '/data/search': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },
                '/login/pwd': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },
                '/login/Sms': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },
                '/data/logout': {
                    // 目标地址		http://localhost:3000/data/home
                    target: 'http://localhost:3000',
                },

            }
        }
    }
}