import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AlluraList from '../views/AlluraList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/callback',
      name: 'list',
      component: AlluraList
    }
  ]
})

export default router
