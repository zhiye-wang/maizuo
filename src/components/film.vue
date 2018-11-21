<template>
  <div >
   	film
   	<ul>
   		<router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
   		<router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
   		
   	</ul>

   	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'film',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	ul {
		display:flex;
	
	li{
		flex:1;
		height:40px;
		line-height:40px;
		list-style:none;
		text-align:center;
		}
	}
	.active{
		border-bottom:5px solid red;
		color:red;
	}

</style>
