<template>
  <div class="flex justify-center items-center gap-x-4 w-full h-[60px] border border-b-zinc-500">
    <div class="w-[70px] h-[35px] rounded text-center py-1 border">
       <RouterLink to="/store" class="italic text-rose-500 text-xl font-medium"> STORE </RouterLink>
    </div>
<div class="flex justify-center items-center gap-4">
  <div class="relative h-[35px] w-[25px] cursor-pointer" @click="openCart()">
     <i class='bx bx-cart text-zinc-500 cursor-pointer text-3xl'></i>
     <div class="absolute top-0 right-[-10px] rounded min-w-[12px] w-[12] h-[12px] bg-indigo-500 text-zinc-50"><span class="text-center block mt-[-1px] text-[9px] font-medium">{{ totalProduct }}</span></div>
  </div>
  </div>
</div>

<Cart v-if="showCart" @close="showCart = false"/>
</template>

<script setup>
import { ref } from 'vue';
import Cart from '../components/Cart.vue';
const showCart = ref(false)
import { useCart } from '@/composables/kart';

const { totalProduct } = useCart()
const openCart = () => {
      showCart.value = true
    }

</script>

<style scoped>

</style>