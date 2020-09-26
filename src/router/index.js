import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Theme from '../views/Theme.vue'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/themes',
        component: Theme
      },
      {
        path: '/themes/:category',
        component: Theme
      }
    ]
  })

  export default router
