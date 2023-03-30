import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import { useUserStore } from '@/store/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {requireAuth: true},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {requireAuth: true},
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  
  if(to.meta.requireAuth) {
    if(!userStore.isAuthenticated) {
      return '/login'
    }
  }
  
})

export default router