import Vue from 'vue'
import Vuex from 'vuex'
// 引入各个js文件
import actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations';
// import mutationTypes from './mutation-types';

Vue.use(Vuex)

export default new Vuex.Store({
  // 配置
  actions,
  getters,
  state,
  mutations
})
