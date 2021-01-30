<template>
  <div>
    我是首页，我没什么东西呢 <br>
    <button @click="test">防抖节流测试</button>
  </div>
</template>

<script>
import {debounce,_debounce} from '../utils/util'
export default {
  data(){
    return {
      // timeID:''
    }
  },
  mounted(){
    console.log("foo")
  },
  methods:{
    // _debounce(f,n){
    //   clearTimeout(this.timeID)
    //   this.timeID = setTimeout(f,n)
    // },
    // test(){
    //   // console.log('1111111111')
    //   this._debounce(()=>{ console.log('2222222')},5000)
    // }

    //  test(){
    //   debounce(()=>{ console.log('3333333')},5000)
    // }

    test:_debounce(()=>{console.log('4444444')},5000)
  }
};
</script>

<style>
</style>