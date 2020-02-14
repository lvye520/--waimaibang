// 接口函数
// 引入ajax；
import ajax from './ajax'
/*1  根据经度获取位置详情  */
// export const reqAddress = (geohash) => ajax(`/data/position/${geohash}`)
// 为了方便 模拟假数据   接口的问题没有.json,进行跨越请求
export const reqAddress = () => ajax('/data/position')
/*2  获取食品分类列表  */
export const reqFoodCategorys = () => ajax('/data/index_category')
/*3  根据经纬度获取商铺列表  */
export const reqShops = (longitude,latitude) => ajax('/data/shops',{longitude,latitude})
// 根据关键字获取商家列表
// export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})

// 登录部分
// 发送短信验证
export const reqSendCode = (phone) => ajax('/sendcode',{phone})
// // 、用户名密码登陆
// export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// // 8、手机号验证码登陆
// export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
// // 9、根据会话获取用户信息
// export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// // 10、用户登出
// export const reqLogout = () => ajax(BASE_URL+'/logout')
// 假接口
// 密码登录
export const reqPwdLogin = () => ajax('/login/pwd',{},'POST')
// 短信登录
export const reqSmsLogin = () => ajax('/login/Sms',{},'POST')
// 退出接口
export const reqLogout = () => ajax('/data/logout')

// 模拟   进行跨越请求
export const reqSearch = () => ajax('/data/search')
// 请求mock数据
/*** 获取商家信息 */ 
export const reqShopInfo = () => ajax('/info')
// 获取评价数组
export const reqShopRatings = () => ajax('/ratings')
// 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
