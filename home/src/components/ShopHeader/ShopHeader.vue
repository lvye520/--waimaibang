<template>
  <div class="shop-header">
    <nav class="shop-nav" :style="{backgroundImage:`url(${info.bgImg})`}">
      <span>
        <i class="iconfont icon-xiaoyu" @click="$router.back()"></i>
      </span>
    </nav>
    <div class="shop-content" v-if="info.supports">
      <img :src="info.avatar" alt />
      <div class="shop-title" @click="toggleShopShow">
        <span class="mini-tag">品牌</span>
        <span class="shop-title-name">{{info.name}}</span>
        <i class="content-icon"></i>
      </div>
      <div class="shop-message">
        <span class="shop-message-detail">{{info.score}}</span>
        <span class="shop-message-detail">月售{{info.sellCount}}单</span>
        <span class="shop-message-detail">{{info.description}}</span>
        <span class="shop-message-detail">约{{info.deliveryTime}}分钟</span>
        <span class="shop-message-detail">距离{{info.distance}}</span>
      </div>
      <div class="shop-discount" @click="togglePerfer">
        <span class="activity-green">{{info.supports[0].name}}</span>
        <span class="shop-msg">{{info.supports[0].content}}</span>
        <span class="shop-count">
          {{info.supports.length}}个优惠
          <i class="jiantou-down"></i>
        </span>
      </div>
    </div>
    <transition name="fade">
      <div class="shop-brief-modal" v-show="modalShow">
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{info.name}}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{info.score}}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{info.sellCount}}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{info.description}}</h3>
              <p>约{{info.deliveryTime}}分钟</p>
            </li>
            <li>
              <h3>{{info.deliveryPrice}}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{info.distance}}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">{{info.bulletin}}</div>
          <div class="mask-footer" @click="toggleShopShow">
            <span class="iconfont icon-cha"></span>
          </div>
        </div>
        <div class="brief-modal-cover"></div>
      </div>
    </transition>
    <transition name="fade">
      <div class="activity-sheet" v-show='supportsShow'>
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul>
            <li v-for="(item,index) in info.supports" :key="index" :class="supportClasses[index]">
              <span class="mini-tag">{{info.supports[index].name}}</span>
              <span class="activity-content">{{info.supports[index].content}}</span>
            </li>
          </ul>
        </div>
        <div class="activity-sheet-close"  @click="togglePerfer">
          <span class="iconfont icon-cha"></span>
        </div>
        <div class="activity-sheet-cover"></div>
      </div>
    </transition>
  </div>
</template>
<script>
// 引入mapState
import { mapState } from "vuex";
export default {
  data() {
    return {
      supportClasses: ["activity-green", "activity-red", "activity-orange"],
      modalShow: false,
      supportsShow:false
    };
  },
  methods: {
    toggleShopShow() {
      this.modalShow = !this.modalShow;
    },
    togglePerfer() {
        this.supportsShow = !this.supportsShow
    }
  },
  computed: {
    // 获取state中的数据
    ...mapState(["info"])
  }
};
</script>
<style lang="scss" scoped>
.shop-header {
  background-color: white;
  position: relative;
  height: 100%;
  overflow: hidden;
  .shop-nav {
    height: 60px;
    width: 100%;
    line-height: 60px;
    color: white;
    .iconfont {
      font-size: 25px;
    }
  }
  .shop-content {
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 10px;
      border: solid 1px #efefef;
    }
    .shop-title {
      margin-top: 38px;
      color: black;
      .mini-tag {
        display: inline-block;
        width: 34px;
        height: 18px;
        background-color: yellow;
        line-height: 18px;
        font-size: 14px;
        margin-right: 10px;
        vertical-align: top;
      }
      .shop-title-name {
        font-size: 21px;
        line-height: 21px;
        font-weight: bold;
      }
      .content-icon {
        margin-left: 15px;
        display: inline-block;
        border: solid 6px transparent;
        border-left-color: black;
      }
    }
    .shop-message {
      margin-top: 8px;
      .shop-message-detail {
        font-size: 14px;
        line-height: 20px;
        margin-right: 5px;
        margin-right: 5px;
        &:first-of-type ~ span:before {
          content: "";
          display: inline-block;
          position: relative;
          left: -2px;
          top: -2px;
          width: 2px;
          height: 2px;
          background-color: gray;
          border-radius: 50%;
        }
      }
    }
    .shop-discount {
      border: solid 1px #e9e9e9;
      width: 90%;
      margin: auto;
      padding: 5px;
      font-size: 12px;
      color: gray;
      .activity-green {
        display: inline-block;
        background-color: green;
        padding: 0px 2px;
        color: white;
        margin-right: 5px;
      }
      .shop-msg {
        display: inline-block;
        width: 60%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .shop-count {
        vertical-align: top;
        i {
          display: inline-block;
          border: solid 5px transparent;
          border-top-color: black;
          vertical-align: center;
          position: relative;
          top: 4px;
        }
      }
    }
  }
  .shop-brief-modal {
    // 设置隐藏状态
    &.fade-leave-to,
    &.fade-enter {
      opacity: 0;
    }
    // 设置过程
    &.fade-leave-active,
    &.fade-enter-active {
      transition: all 0.5s;
    }
    .brief-modal-content {
      box-sizing: border-box;
      padding: 20px;
      text-align: center;
      width: 90%;
      height: 260px;
      overflow: scroll;
      margin: auto;
      position: fixed;
      left: 0;
      right: 0;
      z-index: 10000;
      border-radius: 10px;
      background-color: #fff;
      .content-title {
        .mini-tag {
          display: inline-block;
          background: yellow;
          font-size: 14px;
          padding: 2px 4px;
          margin-right: 20px;
          margin-bottom: 20px;
        }
      }
      .brief-modal-msg {
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        li {
          margin-right: 10px;
          h3 {
            font-size: 1.1em;
          }
          p {
            font-size: 14px;
            color: gray;
          }
        }
      }
      .brief-modal-title {
        padding: 20px;
        color: gray;
        span:before,
        span:after {
          content: ""; /*CSS伪类用法*/
          position: absolute; /*定位背景横线的位置*/
          top: 65%;
          width: 9%;
          height: 2px;
        }
        span:before {
          left: 30%; /*调整背景横线的左右距离*/
          background: linear-gradient(to left, #b6b6b6, #efefef);
        }
        span:after {
          right: 30%;
          background: linear-gradient(to left, #efefef, #b6b6b6);
        }
      }
      .mask-footer {
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        .icon-cha {
          color: white;
          font-size: 40px;
        }
      }
    }
    .brief-modal-cover {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .activity-sheet {
    position: relative;
    // 设置隐藏状态
    &.fade-leave-to,
    &.fade-enter{
        opacity: 0;
    }
    // 设置过程
    &.fade-leave-active,
    &.fade-enter-active{
        transition: all 0.5s
    }
    .activity-sheet-content {
      position: fixed;
      bottom: 0;
      z-index: 1000;
      background: #f4f4f3;
      width: 100%;
      height: 250px;
      overflow: scroll;
      padding: 0 20px;
      .activity-sheet-title {
        text-align: center;
        height: 60px;
        line-height: 60px;
        font-size: 25px;
      }
      ul {
        li {
          height: 30px;
          line-height: 30px;

          &.activity-green {
            .mini-tag {
              background-color: green;
              margin-right: 15px;
            }
          }
          &.activity-red {
            .mini-tag {
              background-color: red;
              margin-right: 15px;
            }
          }
          &.activity-orange {
            .mini-tag {
              background-color: orange;
            }
          }
          .mini-tag {
            background-color: orange;
          }
        }
      }
    }
    .activity-sheet-close {
      position: absolute;
      right: 10px;
      top: 245px;
      z-index: 1000;
      .icon-cha {
        font-size: 30px;
      }
    }
    .activity-sheet-cover {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>