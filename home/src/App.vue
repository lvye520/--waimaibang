<template>
  <div id="app">
      <!-- <router-link to="/">Msite</router-link> 
      <router-link to="/Search">Search</router-link>
      <router-link to="/Order">Order</router-link>
      <router-link to="/Profile">Profile</router-link> -->
      <router-view></router-view>
      <FooterGuide></FooterGuide>
  </div>
</template>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body{
  background-color: #efefef;
}

</style>
<script>
// 引入组件
import FooterGuide from './components/FooterGuide'
export default {
  // 注册
  components : {FooterGuide}
}
</script>
