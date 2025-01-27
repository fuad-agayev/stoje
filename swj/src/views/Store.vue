<template>
  <div class="relative w-full h-max border-1 border-zinc-300 bg-black/50">
    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-[1000px] h-max border">
       <select v-model="selectedCategory" class="border border-zinc-500 rounded w-[500px] p-2 mb-4">
          <option value="All">All</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bijouterie">Bijouterie</option>
       </select>
    </div>
  


  
  <div class="absolute top-[900px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-max">
      <h1 class="text-rose-700 text-4xl font-bold mb-10 drop-shadow-md">Shop by Products</h1>
      <div class="flex flex-wrap gap-6 justify-between items-center">
        <div v-for="product in filteredProducts" :key="product.id" class="w-[225px] h-[350px] rounded shadow-xl flex flex-col justify-start items-center gap-2">
           <img :src="product.image" :alt="product.title"  class="w-full h-[200px] rounded-[20px] p-2"/>
           <h3 class="font-bold text-zinc-500">{{ product.title }}</h3>
           <h3 class="font-bold text-zinc-500">{{ product.category }}</h3>
           <p class="text-rose-700 font-medium">$ {{ product.price.toFixed(2) }}</p>
           <div class="flex justify-around items-center space-x-2"> 
              <button class="w-[100px] h-7 text-zinc-500 text-sm font-medium rounded bg-yellow-500 hover:scale-110" @click="openPopup(product)">See Product</button>
              <router-link :to="`/product/${product.id}`">
                         <button class="w-[100px] h-7 text-zinc-500 text-sm font-medium rounded border border-zinc-500 hover:scale-105">Go To Detail</button>
              </router-link>
           </div>
          </div>
      </div>
    </div>

   </div>
<Modal v-if="showPopup" :product="selectProduct" @closePopup="showPopup = false"/>

</template>

<script setup>
import Modal from "@/components/Modal.vue";
import { ref, computed} from 'vue'
import { useProducts }  from "@/composables/producties";

const { products } = useProducts();
const selectProduct = ref(null)
const showPopup = ref(false)
const openPopup = (product) => {
   selectProduct.value = product
  showPopup.value = true
}


    const selectedCategory = ref("All");

    const filteredProducts = computed(() => {
      if (selectedCategory.value === "All") {
         return products.value;
      }
      return products.value.filter(
        (product) => product.category === selectedCategory.value
      );
      
    });
    
    

</script>

