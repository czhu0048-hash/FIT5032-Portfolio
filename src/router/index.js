import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSignView from '@/views/FirebaseSignView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/FireLogin', nmae:'FireLogin', component: FirebaseSignView}
  ],
})

export default router
