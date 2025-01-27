<template>
    <div class="flex justify-center items-center gap-x-16 w-full h-16 border-2 border-b-zinc-200">

      <div class="w-[70px] h-[35px] rounded bg-rose-400 text-center py-1">
        <RouterLink to="/" class="italic text-zinc-50 font-medium"> Market </RouterLink>
      </div>

      <nav class="flex justify-center items-center space-x-4">
        <RouterLink to="/store" class="text-indigo-700 font-medium"> STORE </RouterLink>
        <RouterLink to="/about" class="text-zinc-700"> ABOUT </RouterLink>
        <RouterLink to="/detail" class="text-zinc-700"> DETAIL </RouterLink>
      </nav>

      <div class="flex justify-center items-center gap-4">
        <div class="relative h-[35px] w-[25px] cursor-pointer" @click="openCart()">
           <i class='bx bx-shopping-bag text-2xl text-zinc-700'></i>
           <div class="absolute top-1 right-[-3px] rounded min-w-[12px] w-[12] h-[12px] bg-rose-500 text-white"><span class="text-center block mt-[-2px] text-[10px] font-medium">{{ totalProduct }}</span></div>
        </div>

        <div class="relative cursor-pointer">
               <div class="">
                  <i class='bx bxs-moon absolute top-[-7px] left-0 hidden'></i>
                  <i class='bx bxs-sun absolute top-[-7px] left-0'></i>
               </div>
               <div class="absolute top-8 left-2 transform -translate-x-1/2 w-14 h-16 z-[99] bg-neutral-300 border border-zinc-300 rounded flex justify-center items-center invisible">
                  <ul class="">
                    <li class="hover:bg-zinc-200 h-6 w-12 rounded text-center"> Light </li>
                    <li class="hover:bg-zinc-200 h-6 w-12 rounded text-center"> Dark </li>
                  </ul>
               </div>
        </div>
      </div>
    </div>
<Cart v-if="showCart" @close="showCart = false"/>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
import Cart from '../components/Cart.vue'
import { useCart } from '@/composables/kart';
    const { totalProduct } = useCart()
    const showCart = ref(false)
    const openCart = () => {
      showCart.value = true
    }
</script>

