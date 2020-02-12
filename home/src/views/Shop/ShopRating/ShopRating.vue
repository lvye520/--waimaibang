<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.foodScore}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <Star :score="4.6" :size="36" />
            <span class="title">服务态度</span>
            <span class="score">{{info.score}}</span>
          </div>
          <div class="score-wrapper">
            <Star :score="4.7" :size="36" />
            <span class="title">商品评分</span>
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}} 分钟</span>
          </div>
        </div>
      </div>
      <div class="ratings-list">
        <div class="rating-title">
          <span :class="{active:selectType === 2}" @click="setselectType(2)">全部</span>
          <span :class="{active:selectType === 0}" @click="setselectType(0)">满意</span>
          <span :class="{active:selectType === 1}" @click="setselectType(1)">不满意</span>
        </div>
        <div class="switch" :class="{on:onlyShowText}" @click="showText">
          <span class="iconfont icon-ziyuan"></span>
          <span class="text">只看有内容的评价</span>
        </div>
        <div class="rating-wrapper">
          <ul>
            <li rating-wrapper-content v-for="(item,index) in filterRating" :key="index">
              <div class="content-left">
                <i class="iconfont icon-ren1"></i>
              </div>
              <div class="content-right">
                <p>{{item.username}}</p>
                <div class="star">
                  <Star :score="item.score" :size="24" />
                  <span>{{item.deliveryTime}}</span>
                </div>
                <div class="text">{{item.text}}</div>
                <div class="recommend">
                  <span class="iconfont" :class="item.rateType===0 ? 'icon-zan' : 'icon-cai'"></span>
                  <span class="item" v-for="(item, index) in item.recommend" :key="index">{{item}}</span>
                </div>
                <div class="time">{{item.rateTime}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入mapstate
import { mapState } from "vuex";
// 引入star组件
import Star from "../../../components/Star/Star";
//引入BScroll
import BScroll from "better-scroll";
export default {
  data() {
    return {
      onlyShowText: false,
      // 根据数据可得rateType的值不同，可分为满意和不满意，定义selectType为全部
      // 即 全部 2   满意 0    不满意 1
      selectType: 2
    };
  },
  // 组件创建成功是发送请求  获取mock数据
  mounted() {
    this.$store.dispatch("getShopRatings", () => {
      this.$nextTick(() => {
        new BScroll(".ratings", {
          click: true
        });
      });
    });
  },
  computed: {
    ...mapState(["ratings", "info"]),
    // 定义计算属性数据  过滤数据 数据为双重过滤
    filterRating() {
      // 解构数据
      let { ratings, selectType, onlyShowText } = this;
      return ratings.filter(rating => {
        // 解构
        let { rateType, text } = rating;
        // 1 selectType类型为 0,1,2
        // selectType === 2; //为全部
        // selectType === rateType; //selectType为0 过滤满意   selectType为1过滤不满意   rateType的值正好为0或1

        // 2 onlyShowText 类型为 true和false
        // !onlyShowText || text.length > 0;  //逻辑为全部显示 和只显示有内容的
        return (selectType === 2 || selectType === rateType) &&  (!onlyShowText || text.length > 0)
      });
    }
  },
  methods: {
    showText() {
      this.onlyShowText = !this.onlyShowText;
    },
    setselectType(selectType) {
      this.selectType = selectType;
    }
  },
  components: { Star }
  //   watch: {
  //     ratings(value) {
  //       this.$nextTick(() => {
  //         new BScroll(".rating-wrapper", {
  //           click: true
  //         });
  //       });
  //     }
  //   }
};
</script>
<style lang="scss" scoped>
.ratings {
  width: 100%;
  position: absolute;
  top: 236px;
  bottom: 0;
  // background-color: #fff;
  overflow: hidden;
  .overview {
    display: flex;
    padding: 10px;
    border-bottom: solid 1px #e6eae7;
    margin-bottom: 20px;
    background-color: #fff;
    font-size: 14px;
    .overview-left {
      padding: 10px;
      border-right: solid 1px #eef0ec;
      text-align: center;
      flex: 3;
      .score {
        color: orange;
        font-size: 28px;
      }
    }
    .overview-right {
      flex: 6;
      padding: 20px;
      .score-wrapper {
        line-height: 20px;
        height: 30px;
        .title {
          margin-left: 10px;
        }
      }
      .delivery-wrapper {
        margin-left: 20px;
      }
    }
  }
  .ratings-list {
    background-color: #fff;
    font-size: 14px;
    .rating-title {
      padding: 15px 15px 10px;
      span {
        display: inline-block;
        width: 46px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        margin-right: 10px;
        &.active {
          background-color: green;
        }
      }
    }
    .switch {
      padding: 12px;
      border-bottom: solid 2px #e6eae7;
      &.on {
        .icon-ziyuan {
          color: green;
        }
      }
    }
    .rating-wrapper {
      height: 100%;
      ul {
        padding: 10px;
        li {
          display: flex;
          border-bottom: solid 1px #e6eae7;
          .content-left {
            flex: 1;
            .icon-ren1 {
              font-size: 24px;
            }
          }
          .content-right {
            flex: 8;
            padding: 10px 0px 20px 0px;
            line-height: 24px;
            position: relative;
            .recommend {
              .item {
                margin-right: 10px;
                border: solid 1px #e6eae7;
                padding: 2px;
              }
            }
            .time {
              position: absolute;
              right: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
}
</style>
