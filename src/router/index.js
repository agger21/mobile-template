import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/vuepage/home/home.vue')
const Discuss = () => import('@/vuepage/discuss/discuss.vue')
const Order = () => import('@/vuepage/order/order.vue')
const My = () => import('@/vuepage/my/my.vue')
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        theIndex: "1",
        title: '首页'
      }
    },
    {
      path: '/Home',
      component: Home,
      meta: {
        theIndex: "1",
        title: '首页'
      }
    },
    {
      path: '/Discuss',
      component: Discuss,
      meta: {
        theIndex: "2",
        title: '论坛'
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        theIndex: "3",
        title: '订单'

      }
    },
    {
      path: '/My',
      component: My,
      meta: {
        theIndex: "4",
        title: '我的'
      }
    },
    {
      path: '*',
      component: Home,
      redirect: '/Home',
      meta: {
        theIndex: "1",
        title: '首页'
      }
    }
  ]
})
