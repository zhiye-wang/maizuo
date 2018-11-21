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

    <swipe class="my-swipe">
	  <swipe-item class="slide1" v-for="data in datalist"  :key="data.id">
	  	<img :src="data.pic_url"/>
	  </swipe-item>
	
	</swipe>


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

require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

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

  },
   components: {
    'swipe':Swipe,
    'swipe-item': SwipeItem
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	img{
		width:100%;

	}

	.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
