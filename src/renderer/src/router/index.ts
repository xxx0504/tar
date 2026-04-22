import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@renderer/view/home'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('@renderer/view/about') }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
