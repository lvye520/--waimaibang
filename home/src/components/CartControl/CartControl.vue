<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="iconfont icon-jianhao" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="num" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-jiahao" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>
<style lang="scss" scoped>
.cartcontrol {
  display: flex;
  color: rgb(0, 160, 100);
  .iconfont {
    font-size: 20px;
    &.icon-jianhao {
      margin-right: 8px;
    }
    &.icon-jiahao {
      margin-left: 8px;
    }
    // 设置过程
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all .3s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }
}
</style>
<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount(isAdd) {
      //  当点击的时候发送请求 向state中添加count
      this.$store.dispatch("updateFoodCount", { isAdd, food: this.food });
    }
  }
};
</script>