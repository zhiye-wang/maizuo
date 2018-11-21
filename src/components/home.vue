<template>
  <div >
   	home
   	<ul>
   		<li v-for="data in datalist">
   			<img :src="data.pic_url" alt="">
   			<h2>{{data.title}}</h2>
   		</li>
   	</ul>
  </div>
</template>

<script>
	import axios from "axios"
export default {
  name: 'home',
  data(){
  	return {
  		 datalist:[]
  	}
   
  },

  mounted(){		
  	axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc").then(res=>{
  		console.log(res.data)
  		this.datalist = res.data.data.goods
  	}).catch(error=>{
  		console.log(error)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	img{
		width:100%;
		
	}

</style>
