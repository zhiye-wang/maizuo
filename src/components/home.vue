<template>
  <div >
   	home
   	 <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data in datalist" :key="data.id">
                  <img :src="data.pic_url"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
    </div>

   	<ul>
   		<li v-for="data in datalist" :key="data.id">
   			<img :src="data.pic_url" alt="">
   			<h2>{{data.title}}</h2>
   		</li>
   	</ul>
  </div>
</template>

<script>
import axios from "axios"

import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

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
  		this.$nextTick(()=>{
  			new Swiper('.swiper-container',{
              pagination: {
                el: '.swiper-pagination',
              },
              loop: true, // 循环模式选项
              autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
          });
  		})
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
