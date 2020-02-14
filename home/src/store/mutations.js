// 引入vue
import Vue from 'vue'
// 引入常量
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVEG_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    ADD_COUNT,
    DELETE_COUNT,
    CLEAR_ACRT,
    RECEIVE_SEARCH,
    RECEIVE_LOGIN,
    RESET_USERINFO
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state, address) {
        state.address = address
    },
    [RECEIVE_CATEGORY](state, { category }) {
        state.categorys = category
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECEIVEG_GOODS](state, { goods }) {
        state.goods = goods
        // Vue.set(state,'goods',goods)
    },
    // 搜索商家
    [RECEIVE_SEARCH](state, { searchShops }) {
        state.searchShops = searchShops
    },
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [ADD_COUNT](state, { food }) {
        if (!food.count) {
            // food.count = 1   数据丢失
            Vue.set(food, 'count', 1)
            // 第一次增加 ，将food添加到cartfoods中
            state.cartFoods.push(food)
        } else {
            food.count++;
        }
    },
    [DELETE_COUNT](state, { food }) {
        if (food.count) {
            food.count--;
            // 当count等于0的时候将food从cartfoods删除
            if (food.count === 0) {
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
    },
    // 清空购物车
    [CLEAR_ACRT](state) {
        // 让food中的count为0
        state.cartFoods.forEach(food => food.count = 0)
        // 清空cartFoods数组
        state.cartFoods = []
    },
    // // 搜索商家
    // [RECEIVE_SEARCH](state, {searchShops}) {
    //     state.searchShops = searchShops
    // }

    // 登录信息
    [RECEIVE_LOGIN](state, { userinfo }) {
        state.userinfo = userinfo
    },
    //    退出
    [RESET_USERINFO](state) {
        state.userinfo = {}
    }
}