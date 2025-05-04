// router/index.ts 或 router.js
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Good from '../components/Good.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/good', component: Good }, // 添加这一行
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
