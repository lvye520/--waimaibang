<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.7</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <!-- <Star :score="4.6" :size="36" /> -->
            <span class="score">4.6</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <!-- <Star :score="4.7" :size="36" /> -->
            <span class="score">4.7</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">30 分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive active">
            全部
            <span class="count">30</span>
          </span>
          <span class="block positive">
            满意
            <span class="count">28</span>
          </span>
          <span class="block negative">
            不满意
            <span class="count">2</span>
          </span>
        </div>
        <div class="switch on">
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item">
            <div class="avatar">
              <img
                width="28"
                height="28"
                src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              />
            </div>
            <div class="content">
              <h1 class="name">aa</h1>
              <div class="star-wrapper">
                <!-- <Star :score="5" :size="24" /> -->
                <span class="delivery">30</span>
              </div>
              <p class="text">不错</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img
                width="28"
                height="28"
                src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              />
            </div>
            <div class="content">
              <h1 class="name">aa</h1>
              <div class="star-wrapper">
                <!-- <Star :score="4" :size="24" /> -->
                <span class="delivery">30</span>
              </div>
              <p class="text">不错</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_down"></span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// 引入mapstate
import { mapState } from "vuex";
// 引入star组件
// import Star from "../../../components/Star/Star";
export default {
  // 组件创建成功是发送请求
  mounted() {
    this.$store.dispatch("getShopRatings");
  },
  computed: {
    ...mapState(["ratings", "info"])
  },
//   components: { Star }
};
</script>
<style lang="scss" scoped>
.ratings{
    width: 100%;
    position: absolute;
    top: 236px;
    bottom: 0;
    background-color: #fff;
    overflow: hidden;
}
</style>
