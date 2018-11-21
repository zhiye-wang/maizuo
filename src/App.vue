<template>
  <div id="app">
    <navbar @event="isShow=!isShow">
      <i class="iconfont icon-category" @click="isShow=!isShow"></i>
    </navbar>
    <sidebar v-show="isShow" @event="isShow=!isShow"></sidebar>

    <section>
      <router-view></router-view> <!-- 路由容器 -->
    </section>
    
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
section{
  position: relative;
  top: 50px;
}
</style>
