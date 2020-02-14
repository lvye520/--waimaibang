<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">外卖帮</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:isShowInput}" @click="isShowInput=true">短信登录</a>
          <a href="javascript:;" :class="{on:!isShowInput}" @click="isShowInput=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="submit">
          <div :class="{on:isShowInput}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                :disabled="!phoneRight"
                class="get_verification"
                :class="{right : phoneRight}"
                @click.prevent="getCode"
              >{{dataTime>0?`已发送${dataTime}秒`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code" />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!isShowInput}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd" />
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd" />
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right:showPwd}"></div>
                  <span class="switch_text">{{showPwd?'abc':''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" />
                <img
                  class="get_verification"
                  src="./images/captcha.svg"
                  alt="captcha"
                  ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-xiaoyu"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" @closeTip="closeTip" v-show="showAlert" />
  </section>
</template>
<style lang="scss" scoped>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        > a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      > form {
        > div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;
              &.right {
                color: green;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              &.on {
                background-color: green;
              }

              .switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
                &.right {
                  transform: translateX(30px);
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            > a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      > .iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>
<script>
// 引入提示框组件
import AlertTip from "../../components/AlertTip/AlertTip";
import { reqSendCode, reqSmsLogin, reqPwdLogin } from "../../api";
export default {
  data() {
    return {
      isShowInput: true,
      dataTime: 0, // 定义定时器时间
      showPwd: false, //是否显示密码
      pwd: "", //密码
      phone: "", //手机号
      code: "", //短信验证码
      name: "", //密码登录手机或用户名
      captcha: "", //图形验证码
      alertText: "", //提示框显示的文本
      showAlert: false // 提示框的显隐
    };
  },
  //   注册
  components: { AlertTip },
  computed: {
    //  当手机格式正确的话 更改样式
    phoneRight() {
      return /^1\d{10}$/.test(this.phone);
    }
  },
  methods: {
    //   关闭弹窗方法
    closeTip() {
      this.showAlert = false;
      this.alertText = "";
    },
    // 动态获取验证图形
    getimg(e) {
      // 要求每次图形不一致
      this.$refs.captcha.src =
        "http://localhost:4000/captcha?time=" + Date.now();
      // http:'//localhost:4000/captcha?time='+Data.now()
    },
    // 封装提示信息
    showMessage(alertText) {
      this.showAlert = true;
      this.alertText = alertText;
    },
    //   当点击获取验证码 倒计时，发送请求
    getCode() {
      if (!this.dataTime) {
        this.dataTime = 30;
        let interval = setInterval(() => {
          this.dataTime--;
          if (this.dataTime <= 0) {
            // 清除计时器
            clearInterval(interval);
          }
        }, 1000);
        // 发送ajax请求 获取短信验证码
        // let result = reqSendCode(this.phone)
        // if(result.code === 1) {
        // 	// 发送失败
        // 	this.showMessage(result.msg)
        // 	if(this.dataTime) {
        // 		this.dataTime = 0
        // 		this.clearInterval(interval)
        // 	}
        // }
      }
    },
    async submit() {
      // 进行表单验证
      let result;
      //短信登录
      if (this.isShowInput) {
        // 解构
        let { phone, code, phoneRight } = this;
        if (!phoneRight) {
          // 手机格式不正确
          this.showMessage("手机格式不正确");
          return;
        } else if (!/^\d{6}$/.test(code)) {
          // 短信验证码不正确
          this.showMessage("短信验证码不正确");
          return;
        }
        // 发送登录请求
        result = await reqSmsLogin();
      } else {
        //   密码登录
        // 解构
        let { name, captcha, pwd } = this;
        if (!name) {
          // 手机/邮箱/同户名不能为空
          this.showMessage("手机/邮箱/同户名不能为空");
          return;
        } else if (!pwd) {
          // 密码不能为空
          this.showMessage("密码不能为空");
          return;
        } else if (!captcha) {
          // 验证码不正确
          this.showMessage("验证码不能为空");
          return;
        }
        // // 发送登录请求
        result = await reqPwdLogin();
      }

      //
      if (result.code === 0) {
        console.log(result.data);
        // 将数据保存到vuex中
        this.$store.dispatch("user", result.data);
        // 跳转到个人中心
        this.$router.replace("/Profile");
      } else {
        //  提示信息
        this.showMessage(result.msg);
      }
    }
  }
};
</script>