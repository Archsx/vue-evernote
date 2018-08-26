<template>
  <div id="sidebar">
    <avatar></avatar>
    <div class="icons">
      <router-link to="/home/note" title="笔记">
        <i class="iconfont icon-note"></i>
      </router-link>
      <router-link to="/home/notebooks" title="笔记本">
        <i class="iconfont icon-notebooks"></i>
      </router-link>
      <router-link to="/home/trash" title="回收站">
        <i class="iconfont icon-trash"></i>
      </router-link>
    </div>
    <div class="logout">
      <i class="iconfont icon-logout" @click="logout"></i>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import request from '../utils/request.js'
export default {
  name: "sidebar",
  components: {
    Avatar
  },
  methods:{
    logout(){
      request('/auth/logout').then(res =>{
      })
    }
  }
};
</script>

 <style lang='less' scoped>
#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;
  height: 100%;
  /* border: 1px solid red; */
}
.icons {
  /* margin-top: 15px */
  padding-top: 15px;

  a {
    padding: 12px 0;
    display: block;
  }

  .router-link-active {
    background-color: #5e6266;
  }
}
.logout {
  position: absolute;
  bottom: 20px;
  width: 100%;
  cursor: pointer;
}
.iconfont {
  color: #fff;
}
</style>
