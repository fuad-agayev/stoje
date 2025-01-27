import { createRouter, createWebHistory } from "vue-router";
     
import Logo from "../views/Logo.vue";

const routes = [
  {
    path: '/',
    name: "logo",
    component: Logo
  },

  {
     path: '/store',
     name: "store",
     component: () => import('../views/Store.vue')
  },

  {
    path: '/about',
    name: "about",
    component: () => import('../views/About.vue')
 },
 {
  path: '/detail',
  name: "detail",
  component: () => import('../views/Detail.vue')
},

{
  path: '/product/:id',
  name: "Product",
  component: () => import('../views/Products.vue'),
},

{
  path: '/checkout',
  name: "Checkout",
  component: () => import('../views/Checkout.vue'),
}

]

const router = createRouter({
       history: createWebHistory(),
       routes
})

export default router

