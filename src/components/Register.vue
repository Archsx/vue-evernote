<template>
  <div id="register">
    <div class="main">
      <div class="wrapper">
        <!-- <input type="text" v-model="account" placeholder="手机号或邮箱" class="ipt" @blur="check1"> -->
        <input type="text" v-model="account" placeholder="手机号或邮箱" class="ipt">
        <div class="accountError" v-show="accountError" @click="toggleAccountError">
          请输入正确格式的帐号
        </div>
      </div>
      <div class="wrapper">
        <input type="password" name="" id="" v-model="password" placeholder="密码" class="ipt">
        <div class="passwordError" v-show="passwordError" @click="togglePasswordError">
          请输入正确格式的密码
        </div>
      </div>
      <div class="btn" @click="register">
        注册
      </div>
    </div>
    <div class="footer">
      已有帐号？
      <span class="mockA" @click="switchComponent">登录</span>
    </div>
  </div>
</template>


<script>
import request from '../utils/request.js'
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      accountError: false,
      passwordError: false
    };
  },
  watch: {
    account: function(newVal, oldVal) {
      // console.log(1)
      this.checkAccount.next(newVal);
    },
    password: function(newVal, oldVal) {
      this.checkPassword.next(newVal);
    }
  },
  created() {
    this.checkAccount = this.throttle(this.validateAccount, 2000);
    this.checkAccount.next();
    this.checkPassword = this.throttle(this.validatePassword, 2000);
    this.checkPassword.next();
  },
  methods: {
    // check1(){
    // this.checkAccount.next(this.account)

    // },
    toggleAccountError() {
      this.accountError = !this.accountError;
    },
    togglePasswordError() {
      this.passwordError = !this.passwordError;
    },
    switchComponent() {
      this.$emit("switchComponent", "Login");
    },
    *throttle(fn, time) {
      let timerId;
      // console.log(4)
      function thr(params) {
        // console.log(2)
        clearTimeout(timerId);
        timerId = setTimeout(fn.bind(this, params), time);
      }
      while (true) {
        // yield thr();
        thr(yield); //这里很神奇，第一次g.next()的时候，这里停在了yield这里，thr并没有执行！！！不是我原以为的thr(undefined)!!!一定要注意！！
      }
    },
    validateAccount(params) {
      // console.log(params)
      let accountPattern = /^[a-zA-Z0-9_-]{1,}$/;
      this.accountError = !accountPattern.test(params);
      // console.log(3)
    },
    validatePassword(params) {
      let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      this.passwordError = !passwordPattern.test(params);
    },
    register() {
      this.checkAccount.next(this.account);
      this.checkPassword.next(this.password);
      if (this.accountError || this.passwordError) {
        return 
      }else{
        request('/auth/register','post',{
          username:this.account,
          password:this.password
        })
      }
    }
  }
};
</script>

<style scoped>
#register {
  width: 100%;
}
.main {
  padding: 0 40px 36px;
  overflow: hidden;
}
.wrapper {
  margin-top: 16px;
  border-bottom: 1px solid #ebebeb;
  min-width: 72px;
  position: relative;
}
.ipt {
  border: none;
  height: 48px;
}
.ipt:focus {
  outline: none;
}
.accountError {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  text-align: left;
  width: 100%;
  color: red;
  z-index: 10;
  opacity: 1;
  line-height: 48px;
  background: #fff;
  transition: opacity 5.25s ease;
  cursor: text;
}
.passwordError {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  text-align: left;
  width: 100%;
  color: red;
  line-height: 48px;
  opacity: 1;
  background: #fff;
  transition: opacity 1.25 ease;
  cursor: text;
}

.btn {
  margin-top: 30px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: #0084ff;
  border: 1px solid #0084ff;
  width: 100%;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
}
.btn:hover {
  background-color: #0077e6;
  border: 1px solid #0077e6;
}
.mockA {
  color: #175199;
  cursor: pointer;
}
.footer {
  display: flex;
  width: 100%;
  height: 58px;
  border-top: 1px solid #ebebeb;
  font-size: 16px;
  line-height: 1;
  justify-content: center;
  align-items: center;
}
</style>
