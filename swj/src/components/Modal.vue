<template>
  <div class="fixed top-1/2 left-1/2 px-4 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-black/80 backdrop-blur-md z-[1000] flex justify-center items-center">
      <div class="relative w-[500px] h-[500px] bg-white/50 rounded-[10px]">
           <div class="absolute top-4 right-4 w-[30px] h-[30px] border border-zinc-700 hover:scale-110 rounded">
                <p class="text-black text-lg cursor-pointer text-center" @click="$emit('closePopup')"> X </p>
           </div>
           <div class="absolute top-16 left-0 bg-zinc-500 w-full h-px"></div>
        
      <div v-if="product" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-max mt-7 flex flex-col justify-between items-start">   
           <img :src="product.image" alt="product.title" class="w-[400px] h-[150px] object-cover rounded-lg mb-4"/>
           <div class="">
            <h3 class="font-semibold text-[17px]">{{ product.title }}</h3>
           <p class="text-[13px] text-emerald-950 tracking-small text-justify">{{ product.description }}</p>
           <p class="text-[17px] font-medium mt-3">{{ product.price.toFixed(2) }} $</p>
         <div class="flex justify-center items-center gap-2 w-full mt-3">
          <button class="w-[125px] h-8 text-zinc-500 text-sm font-medium rounded bg-yellow-500 hover:scale-y-110" @click="addToCart(product, quantity = 1)">Add Cart</button>
          <router-link :to="`/product/${product.id}`"><button class="w-[135px] h-7 text-zinc-700 text-sm font-medium rounded border border-zinc-700 hover:scale-y-105">Go To Detail</button></router-link>
        </div>
           </div>
         
      </div>
    </div>
  </div>

</template>

<script setup>
import { useCart } from '@/composables/kart.js'
const  { addToCart }= useCart()

 defineProps({
  product: Object
 })
</script>

