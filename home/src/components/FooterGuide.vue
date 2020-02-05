<template>
  <div>
    <div class="footer-guide" v-show="$route.meta.show">
      <div class="msite" :class="{on:'/msite' === $route.path}" @click="goTo('/msite')">
        <span>
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </div>
      <div class="search" :class="{on:'/search' === $route.path}" @click="goTo('/search')" >
        <span>
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span>搜所</span>
      </div>
      <div class="order" :class="{on:'/order' === $route.path}" @click="goTo('/order')">
        <span>
          <i class="iconfont icon-icon-"></i>
        </span>
        <span>订单</span>
      </div>
      <div class="profile" :class="{on:'/profile' === $route.path}" @click="goTo('/profile')">
        <span>
          <i class="iconfont icon-self"></i>
        </span>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-guide {
  border-top: solid 1px #e4e4e4;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
    &.on {
      color: #02a774;
      span {
        font-size: 12px;
        margin-top: 2px;
        margin-bottom: 2px;
        .iconfont {
          font-size: 22px;
        }
      }
    }
  }
}
</style>
<script>
export default {
    methods : {
        goTo(path) {
            this.$router.replace(path)
        }
    }
};
</script>