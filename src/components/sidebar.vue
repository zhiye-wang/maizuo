<template>
  <aside>
    <div >
     	<ul>
        <router-link to="/home" tag="li" activeClass="active">home</router-link>
        <router-link to="/film" tag="li" activeClass="active">film</router-link>
     		<router-link to="/card" tag="li" activeClass="active">card</router-link>
     	</ul>    
    </div>
</aside>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
		aside{
      position:fixed;
      top:50px;
      left:0px;
      width:50%;
      height:100%;
      background:black;
      color:white;
      li{
        padding:10px;
      }
    }
    .active{
      background:red;
    }

</style>
