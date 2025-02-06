<template>
  <div class="w-full h-[880px] flex justify-center items-start bg-black/70"> 

  <!--  Skeleton  -->
    <div v-if="loading" class="p-4 max-w-3xl mx-auto w-[700px] mt-8">
      <div class="w-[700px] h-[250px] bg-gray-50 rounded-lg mb-4 animate-pulse"></div>
      <div class="h-8 bg-gray-50 rounded w-3/4 mb-4 animate-pulse"></div>
      <div class="h-6 bg-gray-50 rounded w-full mb-4 animate-pulse"></div>
      <div class="h-6 bg-gray-50 rounded w-1/2 mb-4 animate-pulse"></div>
      <div class="h-7 bg-gray-50 rounded w-[120px] animate-pulse"></div>
    </div>
  
    <div v-if="!loading && product" class="p-4 max-w-3xl mx-auto w-[700px] mt-8">
    <img :src="product.image" alt="product.title" class="w-[700px] h-[250px] object-cover rounded-lg mb-4"/>
    <h3 class="font-bold text-3xl text-white/50">{{ product.title }}</h3>
    <p class="text-[14px] mt-4 text-emerald-400 text-justify tracking-widest">{{ product.description }}</p>
    <p class="text-xl font-bold mt-4 text-white">{{ product.price.toFixed(2) }} $</p>

    <div class="mt-4">
      <div class="flex justify-start items-center space-x-4">
            <button class="w-16 h-7 border border-zinc-400 text-center pb-2 cursor-pointer rounded bg-white text-black/70 hover:scale-y-105" @click="quantity--" :disabled="quantity <= 0"> - </button>
            <span class="m-4 inline-block w-4 h-7 text-center text-zinc-100"> {{ quantity }} </span>
            <button class="w-16 h-7 border border-zinc-400 font-medium text-center pb-2 cursor-pointer rounded bg-white text-green-500 hover:scale-y-105"  @click="quantity++"> + </button>
            <p class="font-medium text-zinc-100">{{ localPrice.toFixed(2) }} $</p>
      </div>
      <button class="w-60 h-7 text-zinc-500 text-sm font-medium rounded bg-yellow-500 hover:scale-y-105 hover:text-white" @click="addToCartHandler">Add to Basket</button>
    </div>

  </div>

 
</div>

</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProducts } from '@/composables/producties.js';
import { useCart } from '@/composables/kart.js'
const { addToCart } = useCart()
const route = useRoute();
const { products } = useProducts();
const product = ref(null);
const quantity = ref(0);
const loading = ref(true);


  
const localPrice = computed(() => {
 return product.value ? product.value.price * quantity.value : 0;
})

const addToCartHandler = () => {
  if(quantity.value <= 0){
    alert('Ürün miktarı 0 olduğu için sepete eklenmedi.');
    console.warn('Ürün miktarı 0 olduğu için sepete eklenmedi.');
    return;
  }
  addToCart(product.value, quantity.value)
  quantity.value = 0
}

onMounted(() => {
  const productId = parseInt(route.params.id);
     setTimeout(()=> {       //  watchEffect neden kaldirdik , bu da watchEffect gibi simulate edebilir verinin reactivliyini veya gelme islemini
      if (products.value.length) {
     product.value = products.value.find(p => p.id === productId);
     console.log("watcheffect: ", products)
      loading.value = false
    }
     }, 3000)
});



</script>

<style scoped>
/*
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
*/
</style>



