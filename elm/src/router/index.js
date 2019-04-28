import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from "../page/Login"
import manage from "../page/Manage"
import userlist from "../page/Userlist"
import shoplist from "../page/Shoplist"
import foodlist from "../page/Foodlist"
import adminlist from "../page/Adminlist"
import orderlist from "../page/Orderlist"
import canvas from "../page/Canvas"
import addshop from "../page/AddShop"
import App from "@/App"
Vue.use(Router)

export default new Router({
  routes: [
    {
    path:"/",
    component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children:[
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/shoplist',
          name: 'shoplist',
          component: shoplist
        },
        {
          path: '/foodlist',
          name: 'foodlist',
          component: foodlist
        },
        {
          path: '/adminlist',
          name: 'adminlist',
          component: adminlist
        },
        {
          path: '/orderlist',
          name: 'orderlist',
          component: orderlist
        },
        {
          path: '/',
          name: 'canvas',
          component: canvas
        },
        {
          path: '/addshop',
          name: 'addshop',
          component: addshop
        },
      ]
    },
  ]
})

