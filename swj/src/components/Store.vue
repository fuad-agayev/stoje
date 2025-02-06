
<template>
  <Carousel/>
  <div class="w-full max-w-[1200px] mx-auto px-4 mt-4">
    
    <!-- Arama Kutusu -->
    <div class="w-full max-w-[700px] h-[40px] flex justify-between items-center bg-white rounded mx-auto mt-4">
      <input 
        type="text" 
        class="ml-2 rounded flex-1 h-[30px] border-none outline-none text-sm pb-1 text-indigo-400" 
        v-model="searchQuery" 
        placeholder="Search product..."
      />
      <div class="w-[50px] h-full bg-indigo-400 text-center flex items-center justify-center">
        <i class='bx bx-search text-lg text-white cursor-pointer'></i>
      </div> 
    </div>

    <!-- Ürünler -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      <div 
        v-for="product in searchedProducts" 
        :key="product.id" 
        class="w-full max-w-[260px] mx-auto rounded shadow-sm bg-white flex flex-col justify-center items-center gap-2 p-4"
      >
        <router-link :to="`/product/${product.id}`">
          <img 
            :src="product.image" 
            :alt="product.title"  
            class="w-[150px] h-[250px] object-cover rounded-[20px] p-2"
          />
          <h3 class="font-bold text-zinc-500 text-center">{{ product.title }}</h3>
          <p class="text-rose-700 font-medium text-center">$ {{ product.price.toFixed(2) }}</p>
        </router-link>
        <div class="flex justify-between items-center w-full mt-1">
          <i class='bx bx-cart text-indigo-500 cursor-pointer text-2xl'></i>
          <button 
            class="w-[80%] h-7 text-zinc-50 text-sm font-medium rounded bg-indigo-500 hover:scale-y-105 transition-all"
            @click="openPopup(product)"
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal v-if="showPopup" :product="selectProduct" @closePopup="showPopup = false"/>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import Modal from "@/components/Modal.vue";
import { ref, computed } from 'vue'
import { useProducts }  from "@/composables/producties";

const { products } = useProducts();
const selectProduct = ref(null)
const showPopup = ref(false)
const searchQuery = ref();

const openPopup = (product) => {
   selectProduct.value = product
  showPopup.value = true
}

const searchedProducts = computed(() => {
  if(searchQuery.value === "") return products.value;
  return products.value.filter(product => {
   return product.title.toLowerCase().includes(searchQuery.value);
  })
  

})

</script>

