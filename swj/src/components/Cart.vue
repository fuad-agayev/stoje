<template>
  <div class="fixed top-0 right-0 w-[370px] h-screen rounded bg-black/70 backdrop-blur-md z-[99]">
      <div class="w-full h-12 border-b-2">
         <div class="ml-3 mt-3 w-[35px] h-[35px] hover:border hover:border-rose-400 hover:scale-105 cursor-pointer text-center">
            <p class="text-white mt-px text-lg" @click="$emit('close')"> X </p>
         </div>
      </div>

      <div class="">
            <h1 class="text-center text-xl text-white font-bold mt-4"> YOUR CART </h1>
            
            <div class="w-full">
               <h4  v-if="cart.length === 0" class="absolute top-1/3 left-1/3 transform -translate-x-1/3 -translate-y-1/3 w-full text-zinc-50 text-center text-medium text-lg scale-95
                                               ">Hi There...  Yout cart is empty!</h4>
              <div class="mt-4 w-[350px] h-[125px] m-[10px] flex justify-start items-center gap-8 border border-zinc-400 rounded" v-for="item in cart" :key="item.id">
                       <img :src="item.image" alt="item.title" class="w-[80px] h-[100px] object-cover rounded-lg"/>
                       <div class="">
                        <h3 class="font-bold text-[14px] pt-2 text-blue-500">{{ item.title }}</h3>
                        <p class="text-[14px] font-bold text-zinc-200">{{ item.price.toFixed(2) }} $</p>

                        <div class="flex justify-between items-center mt-2 w-[100px]">
                           <div class="absolute w-6 h-4 border border-slate-200 rounded text-rose-100">
                              <button class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-1 font-medium cursor-pointer hover:scale-x-105" @click="updateQuantity(item.id, item.quantity - 1)">-</button>
                           </div>
                            
                           <div class="my-2 pl-7 font-small text-[12px] text-indigo-50 mx-auto">{{ item.quantity }}</div>

                          <div class="relative w-6 h-4 border border-slate-200 rounded text-green-100 ml-2">
                              <button class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-1 font-medium cursor-pointer hover:scale-x-105" @click="updateQuantity(item.id, item.quantity + 1)"> + </button>
                          </div>

                          
                          
                        </div>

                         <div class="flex items-center justify-between w-[90px] mx-2">
                            <div class="text-rose-400 cursor-pointer"><i class='bx bxs-trash-alt text-[12px]' @click="removeFromCart(item.id)"></i></div>
                            <p class="text-[12px] text-emerald-500 font-medium">{{ item.localTotalPrice.toFixed(2)  }} $</p>
                         </div>
                       </div>
               </div>
              
            </div>
         
           <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full">
               <div class="flex justify-center items-center gap-3 mb-2 ml-2">
                  <p class="w-[140px] h-[35px] text-[14px] border text-white text-center pt-1 rounded"> {{ totalPrice.toFixed(2) }} $</p>
                  <p class="w-[140px] h-[35px] text-[14px] border text-white text-center cursor-pointer pt-1 rounded hover:bg-slate-50 hover:text-zinc-700" @click="addSomeProuct"> Clear Cart </p>
               </div>
               <button class="text-indigo-50 w-[300px] ml-10 h-[35px] font-medium bg-indigo-500 rounded pb-1 hover:bg-zinc-50 hover:text-indigo-500  hover:scale-y-105" @click="proceedCheckout"> checkout </button>
           </div>
      </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/kart.js';
const { cart, clearCart, totalPrice, localTotalPrice, removeFromCart, updateQuantity } = useCart();
const router = useRouter();

  const proceedCheckout = () => {
     if(cart.value.length === 0){
      alert("Basket is Empty!");
      return;
     }
     router.push("/checkout");
  }

const addSomeProuct = () => {
if(cart.value.length === 0){
   alert("You should add product to basket. Hey where are you with!")
}
clearCart()
}
</script>
