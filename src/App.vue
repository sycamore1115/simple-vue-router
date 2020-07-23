<template>
  <div id="app">
    <div id="nav" v-show="$route.name!='detail'">
      <router-link to="/foo">首页</router-link>
      <router-link to="/mall">商城</router-link>
      <router-link to="/user">个人信息</router-link>
    </div>
    <keep-alive>
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus">
#nav {
  display: flex;
  justify-content: space-around;
}
.router-link-active{
  color : red
}
</style>
