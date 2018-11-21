 <template>
  <div >
   	detail
  
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'detail',
  data () {
    return { 
     
    }
  },
  mounted(){
  	console.log(this.$route.params.wangzhiyeid)
  	fetch(`api/getMemberAboutInfo?goods_id={{this.$route.params.wangzhiyeid}}&sa_id=19337985&is_pt_goods=0&req_coupons_id={{this.$route.params.wangzhiyeid}}`).then(res=>{

  		/*console.log(res.json())*/
  		return res.json()
  	}).then(res=>{
  		console.log(res)
  	}).catch(error=>{
  		
  	})
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
