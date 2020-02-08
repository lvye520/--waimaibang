// 接口函数
// 引入ajax；
import ajax from './ajax'
/*1  根据经度获取位置详情  */
// export const reqAddress = (geohash) => ajax(`/data/position/${geohash}`)
// 为了方便 模拟假数据
export const reqAddress = (geohash) => ajax('/data/position')
/*2  获取食品分类列表  */
export const reqFoodCategorys = () => ajax('/data/index_category')
/*3  根据经纬度获取商铺列表  */
export const reqShops = (longitude,latitude) => ajax('/data/shops',{longitude,latitude})

// 请求mock数据
/*** 获取商家信息 */ 
export const reqShopInfo = () => ajax('/info')
// 获取评价数组
export const reqShopRatings = () => ajax('/ratings')
// 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
