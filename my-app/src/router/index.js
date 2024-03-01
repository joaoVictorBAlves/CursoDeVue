import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/postProducts',
      name: 'postProducts',
      component: () => import('../views/PostProductView.vue')
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      props: true,
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
