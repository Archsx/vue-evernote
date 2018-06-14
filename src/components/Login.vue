<template>
  <div id="login">
    <div class="wrapper">
      <input type="text" v-model="account" placeholder="手机号或邮箱" class="ipt">
    </div>
    <div class="wrapper">
      <input type="password" name="" id="" v-model="password" placeholder="密码" class="ipt">
    </div>
  </div>
</template>

<script>
export default {
  name:'Login'
}
</script>

<style scoped>
  #login{
    padding:  0 40px 36px;
    overflow: hidden;
  }
  .wrapper{
    margin-top: 16px;
    border-bottom: 1px solid #ebebeb;
    min-width: 72px;
  }
  .ipt{
    border: none;
  }
  .ipt:focus{
    outline: none
  }
</style>
