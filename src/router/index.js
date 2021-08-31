import Vue from 'vue'
import VueRouter from 'vue-router'
//路由懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
// 1. 安装router
Vue.use(VueRouter)
// 2.创建router
const routes = [{
  path: '',
  redirect: '/home',
},
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:iid',
    component: Detail,
  },
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

// 3.导出
export default router

