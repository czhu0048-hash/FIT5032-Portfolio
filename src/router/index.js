import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSignView from '@/views/FirebaseSignView.vue'
import AboutView from '../views/AboutView.vue'
import AddBookView from '../views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/FireLogin', nmae:'FireLogin', component: FirebaseSignView},
    {path:'/about', name:'About', component:AboutView},
    {path:'/addbook', name:'Addbook', component:AddBookView},
    {path:'/GetBookCount', name: 'GetBookCount', component: GetBookCountView},
    {path:'/WeatherCheck', name: 'WeatherCheck', component: WeatherView},
    {path:'/CountBookAPI', name:'CountBookAPI', component:CountBookAPI},
    {path:'/GetAllBooksAPI', name:'GetAllBooksAPI', component:GetAllBookAPI}
  ],
})

export default router
 