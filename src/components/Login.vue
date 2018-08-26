<template>
  <div id="login">
    <div class="main">
      <div class="wrapper">
        <input type="text" v-model="account" placeholder="手机号或邮箱" class="ipt">
      </div>
      <div class="wrapper">
        <input type="password" name="" id="" v-model="password" placeholder="密码" class="ipt">
      </div>
      <div class="btn" @click="login">
        登录
      </div>
    </div>
    <div class="footer">
      没有帐号？
      <span class="mockA" @click="switchComponent">注册</span>
    </div>
  </div>
</template>

<script>
import request from "../utils/request.js"
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    switchComponent() {
      this.$emit("switchComponent", "Register");
    },
    login(){
      request('/auth/login','post',{
        username:this.account,
        password:this.password
      })
    }
  }
};
</script>

<style scoped>
#login{
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
}
.ipt {
  border: none;
  height: 48px;
}
.ipt:focus {
  outline: none;
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
