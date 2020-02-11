<template>
  <div class="shotcard">
    <div class="content">
      <div class="content-left" @click="toggle">
        <div class="logo-wriper">
          <div class="logo" :class="{highblue:toTalCount}">
            <i class="iconfont icon-buycar" :class="{highwhite:toTalCount}"></i>
          </div>
          <!-- <div class="num" v-if="toTalCount">{{toTalCount}}</div> -->
          <div class="num" v-if="toTalCount">
            <span>{{toTalCount}}</span>
          </div>
        </div>
      </div>
      <div class="content-middle" @click="toggle">
        <div class="price" :class="{highlight:toTalCount}">￥{{toTolPrice}}</div>
        <div class="deso">另需配送费{{info.deliveryPrice}}</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass" @click="settle">{{payText}}</div>
      </div>
    </div>
    <transition name="move">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <p class="shortcar">购物车</p>
          <p class="empty" @click="clearCart">清空</p>
        </div>
        <div class="list-content">
          <ul>
            <li class="food" v-for="(food,index) in cartFoods" :key="index">
              <div class="food-name">{{food.name}}</div>
              <div class="price">￥{{food.price}}</div>
              <div class="cartcontrol">
                <Cartcontrol :food="food" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <transition name="move">
      <div class="list-mask" v-show="listShow" @click="toggle"></div>
    </transition>
    <!-- mmmm--
    {{$store.state.info.name}}
    {{toTalCount}}
    {{info.deliveryPrice}}-->
    <!-- {{info.deliveryPrice}} --
    {{toTalCount}}-->
    <!-- {{$store.getters.toTalCount}} -->
    <!-- {{cart.total}} -->
  </div>
</template>
<style lang="scss" scoped>
.shotcard {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  font-size: 14px;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #111c1f;
    color: white;
    font-weight: bold;
    position: relative;
    .content-left {
      flex: 3;

      .logo-wriper {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        left: 14px;
        top: -15px;
        z-index: 600;
        text-align: center;
        line-height: 50px;
        background-color: #111c1f;
        .logo {
          width: 40px;
          height: 40px;
          margin: 5px 0px 0px 5px;
          border-radius: 50%;
          line-height: 40px;
          background-color: #283334;
          &.highblue {
            background-color: #009266;
            .icon-buycar {
              font-size: 30px;
            }
          }
        }
        .num {
          background-color: red;
          color: white;
          position: relative;
          left: 27px;
          top: -50px;
          width: 30px;
          height: 20px;
          border-radius: 30%;
          span {
            position: absolute;
            left: 9px;
            top: -16px;
          }
        }
      }
    }
    .content-middle {
      flex: 8;
    }
    .content-right {
      flex: 5;
      text-align: center;
      .pay {
        width: 100%;
        height: 100%;
        line-height: 50px;
      }

      .not-enough {
        background-color: #273233;
      }
      .enough {
        background-color: #009266;
      }
    }
  }
  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    z-index: -1;
    width: 100%;
    background-color: red;
    font-size: 14px;
    color: black;
    // 设置隐藏状态
    &.move-enter,
    &.move-leave-to {
      transform: translateY(0);
    }
    // 设置过程
    &.move-enter-active,
    &.move-leave-active {
      transition: transform 0.5s;
    }
    .list-header {
      display: flex;
      justify-content: space-between;
      background-color: #f0f5f0;
      height: 30px;
      line-height: 30px;
      padding: 5px 20px;
      width: 100%;
      border-bottom: solid 1px gray;
      .empty {
        margin-right: 40px;
      }
    }
    .list-content {
      background-color: #fff;
      max-height: 150px;
      overflow: hidden;
      ul {
        padding: 0 20px;
        li {
          display: flex;
          height: 40px;
          line-height: 40px;
          border-bottom: solid 1px #fafaf9;
          .food-name {
            flex: 1;
          }
          .price {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: rgba(0, 0, 0, 0.5);
    // 设置隐藏状态
    &.move-enter,
    &.move-leave-to {
      opacity: 0;
    }
    // 设置过程
    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.5s;
    }
  }
}
</style>
<script>
// 引入mapState
import { mapState, mapGetters } from "vuex";
// 引入cartcontrol
import Cartcontrol from "../../components/CartControl/CartControl";
//引入better-scoll库
import BScroll from "better-scroll";
// 引入MessageBox
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      isShow: false
    };
  },
  // 注册组件
  components: { Cartcontrol },
  // 在state中添加cartFoods 属性 更改cartFoods
  computed: {
    // 获取state，getter数据
    ...mapState(["cartFoods", "info"]),
    // ...mapGetters(['toTalCount']),
    // ...mapGetters('cart', {
    //   toTalCount: 'toTalCount'
    // })
    // 求购买的总数量
    toTalCount() {
      let { cartFoods } = this.$store.state;
      //  解构
      return cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
    },
    // 求购买的总价格
    toTolPrice() {
      let { cartFoods } = this.$store.state;
      return cartFoods.reduce(
        (preTotal, food) => preTotal + food.count * food.price,
        0
      );
    },
    // 当购买价格大于最低购买时，添加类名
    payClass() {
      let { minPrice } = this.info;
      let { toTolPrice } = this;
      if (toTolPrice >= minPrice) {
        return "enough";
      } else {
        return "not-enough";
      }
    },
    // 根据不同的购买价格显示不同的文本
    payText() {
      let { minPrice } = this.info;
      let { toTolPrice } = this;
      if (toTolPrice === 0) {
        return `￥${minPrice}元起送`;
      } else if (toTolPrice < minPrice) {
        return `还差￥${minPrice - toTolPrice}元起送`;
      } else {
        return "结算";
      }
    },
    // 显示以隐藏有两个条件 toTalCount为0直接隐藏，当isShow为false隐藏
    listShow() {
      if (this.toTalCount === 0) {
        // 当toTalCount为0时 要改变isShow的值
        this.isShow = false;
        // 当toTalCount为0直接隐藏
        return false;
      }
      //   if (this.isShow) {
      //     //   当列表显示的时候创建scroll对象
      //     this.$nextTick(() => {
      //       new BScroll(".list-content", {
      //         click: true
      //       });
      //     });
      //   }

      if (this.isShow) {
        this.$nextTick(() => {
          // 实现BScroll的实例是一个单例  不然每次切换的时候就会创建一个scroll实例 影响购物车的加减
          //   创建之前判断scroll是否存在
          if (!this.scroll) {
            //   不存在，保存起来
            this.scroll = new BScroll(".list-content", {
              click: true
            });
          } else {
            //   解决小bug
            this.scroll.refresh(); // 让滚动条刷新一下: 重新统计内容的高度
          }
        });
      }
      // 走到这说明totalCount不为o
      return this.isShow;
    }
  },
  methods: {
    toggle() {
      //   只有当总数量大于零才切换
      if (this.toTalCount > 0) {
        this.isShow = !this.isShow;
      }
	},
	// 支付按钮
    settle() {
		let {toTolPrice} = this
		let {deliveryPrice} = this.info
      if (this.payText === "结算") {
        MessageBox({
          title: "支付",
          message: `您需要支付${toTolPrice + deliveryPrice}元`,
          showCancelButton: true
		});
      }
      console.log(323, this.payText);
	},
	// 清空购物车
	clearCart() {
		 MessageBox.confirm('确定清空购物车吗?').then(action => {
          this.$store.dispatch('clearCart')
        }, () => {});
	}
  },
  created() {
    // console.log(this.$store.state.info.deliveryPrice)
    console.log(50, this.$store.state.info.name);
    // console.log(50,this.$store.state.info)
    console.log(51, this.$store.getters);
    console.log(52, this.$store.getters.toTalCount);
  }
};
</script>