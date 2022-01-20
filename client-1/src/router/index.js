import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import listQuran from '../views/listQuran.vue'
import detailQuran from '../views/detailQuran.vue'
import Bookmark from '../views/Bookmark.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/listquran',
    name: 'listQuran',
    component: listQuran
  },
  {
    path: '/detailquran/:id',
    name: 'detailQuran',
    component: detailQuran
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: '404_Not_Found',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Bookmark' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else if (to.name === 'Register' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else next()
})

export default router
