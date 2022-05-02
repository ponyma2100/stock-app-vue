import { createRouter, createWebHistory } from 'vue-router'
import StockCard from '../views/StockCard.vue'
import OtcCard from '../views/OtcCard.vue'
import StockMain from '../views/StockMain'

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
  {
    path: '/:id',
    name: 'Main',
    component: StockMain,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
