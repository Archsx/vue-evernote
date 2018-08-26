<template>
  <div id="main" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
@import '//at.alicdn.com/t/font_737889_yj3c1qgtzcp.css';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body{
  height: 100%;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
body{
  font-size: 14px;
  height: 100%;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  background-color: #eee
}

a{
  text-decoration: none;
  color: #444
}
ul,ol {
  list-style: none
}

#main{
  display: flex;
  height: 100%;
  /* height: 100vh; */
  /* align-items: stretch */
  /* border: 1px solid red */
}









</style>
