<template>
  <div id="init">
    <div class="wrapper">
      <div class="avatar">
      </div>
      <div class="btn" @click="show">
        登录/注册
      </div>
    </div>
    <modal v-if="condition"></modal>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "Init",
  components: { Modal },
  data: function() {
    return {
      condition: false
    };
  },
  methods: {
    show() {
      this.condition = true;
    }
  }
};
</script>

<style scoped>
#init {
  /* position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  width: 100vw;
  height: 100vh;
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.avatar {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-image: url("../assets/newperson.png");
}
.btn {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
  background-color: #0084ff;
  font-size: 16px;
  color: #fff;
  /* color: #8590a6; */
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
}
</style>
