<template>
  <div >
   	nowplaying
   <ul>
	   	<!-- <router-link v-for="data in datalist" tag="li" :to="'/detail/'+data.goods_id" >
	   		<img :src="data.pic_url" alt="">
	   		<h3>{{data.title}}</h3>
	   		<p>{{data.title_long}}</p>
        <span>{{data.goods_id}}</span>
	   	</router-link> -->

        <li v-for="data in datalist"  @click="handleClick(data.goods_id)" :key = "data.goods_id">
        <img :src="data.pic_url" alt="">
        <h3>{{data.title}}</h3>
        <p>{{data.title_long}}</p>
        <span>{{data.goods_id}}</span>
      </li>


   </ul>
  </div>
</template>

<script>
	import axios from "axios"
export default {
  name: 'nowplaying',
  data () {
    return {
     	datalist:[]
    }
  },
  methods:{
      handleClick(id){

       this.$router.push('/detail/'+id)
       console.log(id)
      }
  },
  mothods:{

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


li{
	overflow:hidden;
	padding:10px;
	border-bottom:1px solid #ccc;
	img{
	width:30%;
	float:left;
}
}
</style>
