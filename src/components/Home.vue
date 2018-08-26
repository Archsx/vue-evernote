<template>
  <div id="home">
    <side-bar class="test"></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './Sidebar'
export default {
  name:'home',
  components:{SideBar}
}
</script>

<style scoped>
#home{
  height: 100%;
  /* border: 1px solid red; */
}
</style>
