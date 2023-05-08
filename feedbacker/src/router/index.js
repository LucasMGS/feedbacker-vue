import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Home/Home-view.vue')
const Feedbacks = () => import('@/views/Feedbacks/Feedbacks-view.vue')
const Credentials = () => import('@/views/Credentials/Credentials-view.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

export default router
