<template>
  <div >
   	home
   
  </div>
</template>

<script>
	import axios from "axios"
export default {
  name: 'home',
  data () {
    return {
     
    }
  },

  mounted(){		
  	axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc").then(res=>{
  		console.log(res)
  	}).catch(error=>{
  		console.log(error)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
