import { createRouter, createWebHistory } from "vue-router";
     
import Store from "../components/Store.vue";

const routes = [
  {
    path: '/',
    name: "store",
    component: Store
 },
  {
    path: '/store',
    name: "store",
    component: () => import('../components/Store.vue'),
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

