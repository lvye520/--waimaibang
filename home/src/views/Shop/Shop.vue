<template>
  <div class="shop">
    <ShopHeader></ShopHeader>
    <ul class="tab">
      <router-link to='/shop/goods' tag='li' :class="{tarColor:'/shop/goods' === $route.path}">点餐</router-link>
      <router-link to='/shop/ratings' tag='li' :class="{tarColor:'/shop/ratings' === $route.path}">评价</router-link>
      <router-link to='/shop/info' tag='li' :class="{tarColor:'/shop/info' === $route.path}">商家</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
// 引入header组件
import ShopHeader from "../../components/ShopHeader/ShopHeader";
export default {
  // 注册组件
  components: { ShopHeader },
  mounted () {
    //   发送请求
    this.$store.dispatch('getShopInfo')
  }
};
</script>
<style lang="scss" scoped>
.shop{
  background-color: #fff;
  .tab{
    display:flex;
    justify-content: space-around;
    font-size: 16px;
    border-bottom: solid 1px #F4F6F5;
    li{
      padding: 15px 5px;
      &.tarColor{
        color: #2DA58B;
        border-bottom: solid 2px #2DA58B;
      }

    }
  }
}
</style>