<template>
  <div id="app">
    <!-- <router-link to="/">Msite</router-link> 
      <router-link to="/Search">Search</router-link>
      <router-link to="/Order">Order</router-link>
    <router-link to="/Profile">Profile</router-link>-->
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
html,
body {
  background-color: #efefef;
}
</style>
<script>
// 引入组件
import FooterGuide from "./components/FooterGuide";
// 引入mapAction
import { mapActions } from "vuex";
// 引入mock
import './mock/mockServer'
// 引入api
// import {reqFoodCategorys} from './api'
export default {
  // 注册
  components: { FooterGuide },
  // 发送请求
  // async mounted () {
  //   const result = await reqFoodCategorys()
  //   console.log(result)

  // }
  mounted() {
    //请求回来的数据存放在store中，每一个组件都可以使用，所以可以在app.vue中发送异步请求
    // this.$store.dispatch("getAddress");
    // 映射函数也可以获取数据
    this.getAddress();
  },
  methods : {
    ...mapActions(['getAddress'])
  }
};
</script>
