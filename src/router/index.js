import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Themes from '../views/Themes.vue'
import Theme from '../views/Themes.vue'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/theme',
        component: Themes
      },
      {
        path: '/theme/:category',
        component: Theme
      }
    ]
  })

  export default router
