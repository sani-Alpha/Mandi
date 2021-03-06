import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

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
    component: () => import('@/components/auth/Login'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/components/auth/Signup'),
  },
  {
    path: '/mandi',
    name: 'Mandi',
    component: () => import('@/views/Mandi'),
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('@/views/Favourites'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
