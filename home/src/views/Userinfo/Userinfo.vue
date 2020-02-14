<template>
  <section class="userinfo">
    <HeaderTop title="个人中心">
      <span slot="left" class="header-back">
        <i class="iconfont icon-xiaoyu" @click="$router.back()"></i>
      </span>
    </HeaderTop>
    <div class="userinfo-content">
      <div class="base-message">
        <h2>基础信息</h2>
        <div class="img">
          <span>头像</span>
          <span></span>
        </div>
        <div class="name">
          <span>用户名</span>
          <span>{{userinfo.name}}</span>
        </div>
        <div class="get-message">
          <span>收货信息</span>
          <span></span>
        </div>
      </div>
      <div class="num">
        <h2>账号绑定</h2>
        <div class="phone">
          <span>
            <i class="iconfont icon-shouji"></i>
            手机
          </span>
          <span></span>
        </div>
        <div class="taobao">
          <span>
            <i class="iconfont icon-taobao" style="color:red"></i>
            淘宝
          </span>
          <span>
            <a href="javascript:void(0)">未绑定</a>
            <i class="iconfont icon-jiantou_huaban"></i>
          </span>
        </div>
        <div class="zhifubao">
          <span>
            <i class="iconfont icon-alipay_app" style="color:blue"></i>
            支付宝
          </span>
          <span>
            <a href="javascript:void(0)">未绑定</a>
            <i class="iconfont icon-jiantou_huaban"></i>
          </span>
        </div>
        <div class="weibo">
          <span>
            <i class="iconfont icon-weibo" style="color:red"></i>
            微博
          </span>
          <span>
            <a href="javascript:void(0)">未绑定</a>
            <i class="iconfont icon-jiantou_huaban"></i>
          </span>
        </div>
        <div class="weixin">
          <span>
            <i class="iconfont icon-wenxin-whit" style="color:green"></i>
            微信
          </span>
          <span>
            <a href="javascript:void(0)">未绑定</a>
            <i class="iconfont icon-jiantou_huaban"></i>
          </span>
        </div>
        <div class="weixin">
          <span>
            <i class="iconfont icon-qq" style="color:blue"></i>
            QQ
          </span>
          <span>
            <a href="javascript:void(0)">未绑定</a>
            <i class="iconfont icon-jiantou_huaban"></i>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.userinfo-content {
  .iconfont {
    font-size: 25px;
    margin-right: 10px;
    color: #e9ee9e;
    vertical-align: center;
  }
  background-color: #fff;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  padding: 10px;
  h2 {
    font-size: 14px;
    color: gray;
  }
  .base-message,
  .num {
    margin-bottom: 20px;
    div {
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      border-bottom: solid 1px #e9ee9e;
      display: flex;
      justify-content: space-between;
      i {
        display: inline-block;
      }
    }
  }
}
</style>
<script>
// 引入headerTop组件
import HeaderTop from "../../components/HeaderTop";
import { mapState } from "vuex";
export default {
  components: { HeaderTop },
  computed: {
    ...mapState(["userinfo"])
  }
};
</script>