
// 引入常量
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVEG_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state,address) {
        state.address = address
    },
    [RECEIVE_CATEGORY] (state,{category}) {
        state.categorys = category
    },
    [RECEIVE_SHOPS] (state,{shops}) {
        state.shops = shops
    },
    [RECEIVEG_GOODS] (state,{goods}) {
        state.goods = goods
    },
    [RECEIVE_RATINGS] (state,{ratings}) {
        state.ratings = ratings
    },
    [RECEIVE_INFO] (state,{info}) {
        state.info = info
    }
}