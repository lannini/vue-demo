import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
<<<<<<< HEAD
=======
import City from '@/pages/city/City'
>>>>>>> origin/zujian

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    }
=======
      name: 'Home',
      component: Home
    },{
          path:'/city',
          name:'City',
          component:City
      }
>>>>>>> origin/zujian
  ]
})
