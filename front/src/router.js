import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/app/Home.vue';
import Shop from '@/app/Shop.vue';
import ShoppingCart from '@/app/ShoppingCart.vue';
import Innkeeper from '@/app/Innkeeper.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/innkeeper',
      name: 'innkeeper',
      component: Innkeeper
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    },
    { path: '*', redirect: '/' }
  ]
})