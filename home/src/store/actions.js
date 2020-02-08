// 引入常量
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVEG_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO
} from './mutation-types'
// 引入接口函数 发送请求
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqShopInfo,
    reqShopRatings,
    reqShopGoods


} from '../api'
export default {
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude;
        // 发送请求
        const result = await reqAddress(geohash)
        // 提交mutations 
        if(result.code === 0) {
            const address = result.data
            console.log(21,address)
            // commit(RECEIVE_ADDRESS,{address})
            commit(RECEIVE_ADDRESS,address)
        }
    },
    async getCategorys({commit}) {
        const result = await reqFoodCategorys()
        // 提交一个mutation
        if (result.code === 0) {
            const category = result.data;
            console.log(31,category)
            commit(RECEIVE_CATEGORY,{category})
        }
    },
    // 根据经纬度获取商家
    async getShops({commit,state}) {
        let {latitude,longitude} = state;
        // 发送请求
        const result = await reqShops(latitude,longitude)
        if(result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
        
    },
    async getShopInfo({commit}) {
        const result = await reqShopInfo();
        if(result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    async getShopRatings({commit}) {
        const result = await reqShopRatings();
        if(result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings})
        }
    },
    async getShopGoods({commit}) {
        const result = await reqShopGoods();
        if(result.code === 0) {
            const info = result.data
            commit(RECEIVEG_GOODS,{info})
        }
    }
      
}