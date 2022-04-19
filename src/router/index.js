import { createRouter, createWebHistory } from 'vue-router'
import StockCard from '../views/StockCard.vue'
import OtcCard from '../views/OtcCard.vue'

const routes = [

  {
    path: '/',
    name: 'StockCard',
    component: StockCard
  },
  {
    path: '/otc',
    name: 'OtcCard',
    component: OtcCard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
