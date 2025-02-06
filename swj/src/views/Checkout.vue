<template>
  <div class="relative w-full h-[700px] flex items-center justify-center gap-16">
    <div class="relative w-[1000px] h-max shadow-xl rounded">

      <ul class="flex justify-center items-center">
          <li v-for="item in items" :key="item" class="w-[200px] h-[50px] text-center">{{ item }}</li>
      </ul>
    
      <ul class="flex justify-center items-center col-gap-4" v-for="item in cart" :key="item.id">
           <li class="w-[200px] h-[50px]"><img :src="item.image" alt="item.title" class="w-[200px] h-[50px]"/></li>
           <li class="w-[200px] h-[50px] text-center pt-2 mt-1">{{ item.title }}</li>
           <li class="w-[200px] h-[50px] text-center pt-2 mt-1">{{ item.price }} $</li>
           <li class="w-[200px] h-[50px] text-center pt-2 mt-1">{{ item.quantity }} </li>
           <li class="w-[200px] h-[50px] text-center pt-2 mt-1"> {{ item.localTotalPrice.toFixed(2) }} $</li>
           <li class="w-[200px] h-[50px] text-center pt-2 mt-1 cursor-pointer" @click="removeFromCart(item.id)"> X </li>
     </ul>
     <div class="w-full h-[50px] border flex justify-end items-center gap-2">
      <p class="w-[165px] h-[50px] text-center pt-3 text-emerald-400"> {{ totalPrice.toFixed(2) }} $</p>
      <button class="text-indigo-500 w-[165px] h-[35px] font-medium bg-white" @click="clearCart()"> Total clear Cart </button>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ref(["Picture", "Title", "Price", "Quantity", "Total", "Delete"])
import { useCart } from "@/composables/kart.js"
const { cart, totalPrice, clearCart, removeFromCart } = useCart();
</script>




