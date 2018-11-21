<template>
  <transition name="bounce">
  <aside>
    <div >
     	<ul @click="handleClick()">
        <router-link to="/home" tag="li" activeClass="active">home</router-link>
        <router-link to="/film" tag="li" activeClass="active">film</router-link>
     		<router-link to="/card" tag="li" activeClass="active">card</router-link>
     	</ul>    
    </div>
</aside>
</transition>
</template>

<script>
export default {
  name: 'sidebar',
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
aside{
    position: fixed;
    top:50px;
    left:0px;
    width:50%;
    height: 100%;
    background-color: black;
    color:white;
    z-index:10;
    li{
      padding:10px;
    }
  }

  .active{
    background-color: red;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  
  @keyframes bounce-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
