<template>
  <div>
    <div class="shopgoods">
      <div class="menu-wrapper">
        <ul class="menu">
          <li
            v-for="(good,index) in goods"
            :key="index"
            class="menu-item"
            :class="{current : index === currentIndex}"
            @click="clickMenuItem(index)"
          >
            <span class="text">
              <img :src="good.icon" alt v-if="good.icon" />
            </span>
            <span class="menu-name">{{good.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li v-for="(good,index) in goods" :key="index" class="foods">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li
                class="food-item"
                v-for="(food,index) in good.foods"
                :key="index"
                @click="showFood(food)"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" alt />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <p class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </p>
                  <p class="price">
                    <span class="now">￥{{food.price}}</span>&nbsp;
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </p>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- food组件 -->
      <!-- <Food :food="food" v-show="showfoods" :toggle="showFood"/> -->
      <ShotCard />
    </div>
    <Food :food="food" ref="food" />
  </div>
</template>
<style lang="scss" scoped>
.shopgoods {
  position: absolute;
  top: 236px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  .menu-wrapper {
    flex: 3;
    font-size: 14px;
    .menu {
      box-sizing: border-box;
      // padding: 0 18px;
      background-color: #f0f4f5;
      .menu-item {
        padding: 20px 18px;
        border-bottom: solid 2px #e7ebeb;
        text-align: center;

        &.current {
          background-color: #fff;
          color: green;
        }
        .text {
          display: inline-block;
          width: 10px;
          height: 10px;
          // margin-right: 5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .foods-wrapper {
    flex: 8;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      position: relative;
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      border-bottom: solid 2px #f8f8f7;
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
      .icon {
        margin-right: 10px;
      }
      .content {
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc,
        .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
          margin-bottom: 8px;
        }
        .desc {
          line-height: 12px;
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>
<script>
// 引入mapstate
import { mapState } from "vuex";
// 引入better-scroll
import BScroll from "better-scroll";
// 引入组件cartcontrol
import CartControl from "../../../components/CartControl/CartControl";
import Food from "../../../components/Food/Food";
import ShotCard from "../../../components/ShotCard/ShotCard";
export default {
  data() {
    return {
      scrollY: 0, //右侧滑动的y轴坐标 ，实时更新的数据
      tops: [], //所有右侧分类li的top值  例表第一次显示收集
      food: {} // 需要显示的food  一开始并没有 点击以后添加
      // showfoods : true
    };
  },
  // 注册组件
  components: { CartControl, Food, ShotCard },
  mounted() {
    this.$store.dispatch("getShopGoods", () => {
      // 数据更新之后执行回调函数
      this.$nextTick(() => {
        this._initscrollY();
        this._initTop();
      });
    });
  },
  computed: {
    ...mapState(["goods"]),
    currentIndex() {
      // 通过计算返回索引值
      // 解构
      let { scrollY, tops } = this;
      let index = tops.findIndex((item, index) => {
        return scrollY >= item && scrollY < tops[index + 1];
      });
      return index;
    }
  },
  methods: {
    // 获取右侧滑动的y轴值
    _initscrollY() {
      // 列表显示之后创建new BScroll
      new BScroll(".menu-wrapper", {
        click: true //设置之后才可以使用点击事件
      });
      // 将foodscroll添加给了this
      this.foodsScroll = new BScroll(".foods-wrapper", {
        // 回调函数为配置项  probeType有三种情况  1,2,3
        // 1 没有惯性 2,3有，
        probeType: 1,
        click: true
      });
      // 给右侧添加scroll监听
      this.foodsScroll.on("scroll", ({ x, y }) => {
        // 收集y值
        this.scrollY = Math.abs(y);
        console.log(x, y);
      });
      // 监听scrollEnd，解决惯性bug
      this.foodsScroll.on("scrollEnd", ({ x, y }) => {
        // 收集y值
        this.scrollY = Math.abs(y);
        console.log(x, y);
      });
    },
    _initTop() {
      // 初始化tops
      let tops = [];
      let top = 0;
      // 将0填入数组中
      tops.push(top);
      // 右侧所有的li   ref迅速定位
      let lis = this.$refs.foodsUl.getElementsByClassName("foods");
      // console.log(lis)
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight;
        tops.push(top);
      });
      // 更新数据
      this.tops = tops;
      console.log(tops);
    },
    clickMenuItem(index) {
      // console.log(index)
      // 获取点击对应右侧的位置  但是有延迟
      // let y =-this.tops[index];
      // console.log(y)
      // this.foodsScroll.scrollTo(0,y,300)

      // 优化
      let y = this.tops[index];
      this.scrollY = y;
      this.foodsScroll.scrollTo(0, -y, 300);
    },
    // 显示点击的food
    showFood(food) {
      this.food = food;
      // 父组件调用子组件的方法
      this.$refs.food.toggleShow();
      // this.showfoods = !this.showfoods
    }
  }
};
</script>