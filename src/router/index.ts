import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import NewsDetail from '../components/NewsDetail.vue'

const routes = [
    {
      path: '',
      name: 'home',
      component: Home
    },
     {
      path: '/news/:id',
      name: 'newsDetail',
      component: NewsDetail
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router