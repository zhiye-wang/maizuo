/*import Vue from 'vue'
import Router from 'vue-router'*/

import Vue from 'vue'
import Router from 'vue-router'

//引入路由
/*import Home from "../components/home"
import Film from "../components/film"
import Card from "../components/card"*/

import Home from "../components/home"
import Film from "../components/film"
import Card from "../components/card"

Vue.use(Router) //注册路由
//路由配置


export default new Router({ //通过router构造函数构造出对象
  routes: [
    {
      path:"/home",
      component:Home
    },
     {
      path:"/film",
      component:Film,    
    },
    {
      path:'/card',
      component:Card
    },
     {
      path:"*",
      redirect:"/home"
    }
  ]
})



/*
====*/
/*import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "../components/home"


import Film from "../components/film"

import Card from "../components/card"


Vue.use(Router) //注册路由  app.use()
//路由配置
export default new Router({
 

  // 路由模式 (1) hash #  (2) history
  routes: [
    // {
    //   path:"/",
    //   component:Home
    // },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/film",
      component:Film,    },
    {
      path:"/card",
      component:Card
    },

    
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
*/