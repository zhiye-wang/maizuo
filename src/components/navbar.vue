<template>
  <nav >
  <!--  navbar  -<button type="" @click="handleClick()">click</button> -->
    <div class="left">
      <slot></slot>
      <span>卖座电影</span>
    </div>

    <div class="right">
        <span>大连</span>
        <i class="iconfont icon-account"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleClick(){
        this.$emit("event")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   
   nav{
      position:fixed;
      top:0px;
      left:0px;
      width:100%;
      height:50px;
      line-height:50px;
      background: black;
      color:white;
      .left{
        float:left;
      }
      .right{
        float:right;
      }
   }
</style>
