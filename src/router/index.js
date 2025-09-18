import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSignView from '@/views/FirebaseSignView.vue'
import AboutView from '../views/AboutView.vue'
import AddBookView from '../views/AddBookView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/FireLogin', nmae:'FireLogin', component: FirebaseSignView},
    {path:'/about', name:'About', component:AboutView},
    {path:'/addbook', name:'Addbook', component:AddBookView}
  ],
})

export default router
