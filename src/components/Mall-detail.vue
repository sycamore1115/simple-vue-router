<template>
  <div class="container">
    <img :src="goods[index].pic" alt />
    <p>{{goods[index].name}}</p>
    <p>{{goods[index].price}}</p>` 
  </div>
</template>

<script>
export default {
  props: [
    "goods"
  ],
   computed: {
    index: function() {
      return this.$route.query.index;
    }
  }
};
</script>

<style>
img {
  width: 100%;
  height: 300px;
}
/* .container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aqua;
} */
</style>