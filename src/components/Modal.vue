<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <slot name="header">
        <h2 class="title">云笔记</h2>
        <p class="slogen">记录点滴瞬间</p>
      </slot>
      <!-- <div class="modal-header"> -->
      <div class="modal-close" @click='closeModal'>
        <img :src="img" alt="" class="img">
      </div>
      <!-- </div> -->
      <keep-alive>
        <component :is="componentName" @switchComponent='changeComponent'>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";
export default {
  name: "Modal",
  components: { Login, Register },
  data: function() {
    return {
      componentName: "Login",
      img: require("../assets/close.png")
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    changeComponent(name) {
      this.componentName = name;
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  /* overflow-x: auto; */
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 30px;
  align-items: center;
  width: 432px;
}
.title {
  font-size: 32px;
  line-height: 1;
  color: #0084ff;
}
.slogen {
  font-size: 22px;
  margin-top: 15px;
  line-height: 1;
  color: #0084ff;
}
.modal-close {
  position: absolute;
  padding: 12px;
  top: 8px;
  right: -60px;
}
.img {
  width: 24px;
  height: 24px;
}
</style>
