import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
  ,
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((routeTo, routeFrom, next) => {
//   if(!store.state.token) {
//     return next({name: 'login'})
//   }
//   next
// })

export default router
