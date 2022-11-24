import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import loginPage from '../components/loginPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: loginPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
