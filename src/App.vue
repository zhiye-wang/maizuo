<template>
  <div id="app">
    <navbar @event="isShow=!isShow">
      <i class="iconfont icon-category" @click="isShow=!isShow"></i>
    </navbar>
    <sidebar v-show="isShow"></sidebar>

    <router-view></router-view> <!-- 路由容器 -->
  </div>
</template>

<script>
  import navbar from "./components/navbar"
  import sidebar from "./components/sidebar"


export default {
  name: 'App',
  data(){
    return {
      title:"wanzhiye",
      isShow:false
    }
  },
  computed:{

  },
  watch:{

  },
  methods:{
    handleClick(){
      // this.title = "xiaoming"
    }
  },
  components:{
    navbar,
    sidebar
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
