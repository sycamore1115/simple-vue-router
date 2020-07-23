<template>
  <div>
    <ul v-show="$route.name!='detail'">
      <li v-for="(item,index) in goods" :key="index" @click="select(item,index)">
        {{item.name}}
        <!-- <router-link :to="'/mall/' + item.name">{{item.name}}</router-link> -->
      </li>
    </ul>
    <router-view :goods="goods"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          name: "咖啡",
          price: "$15",
          pic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3567956517,422339750&fm=26&gp=0.jpg",
        },
        {
          name: "笔记本",
          price: "$8",
          pic:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595416946646&di=d7364acbf9ffe91362e8bd052afae753&imgtype=0&src=http%3A%2F%2Fimg.11665.com%2Fimg03_p%2Fi3%2FT1h4KgFIJcXXXXXXXX_%2521%25210-item_pic.jpg",
        },
        {
          name: "鼠标",
          price: "$36",
          pic:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595416979736&di=f731928b97882d0559df385fc566c89b&imgtype=0&src=http%3A%2F%2F2e.zol-img.com.cn%2Fproduct%2F8%2F216%2FcecETvc5Hd4E.jpg",
        },
      ],
    };
  },
  methods: {
    select(item,index) {
      this.$router.push({
        path: `/mall/${item.name}`,
        query: {
          index: index,
        },
      });
    },
  },
  mounted() {
    console.log("mall");
  },
};
</script>

<style>
</style>