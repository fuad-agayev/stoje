<template>
  <div class="relative w-full max-w-[700px] h-[400px] mx-auto overflow-hidden mt-4">
       <div class="flex transition-transform duration-700 ease-in-out" :style="{transform: `translateX(-${currentIndex * 100 }%)`}">
           <div v-for="(image, index) in photoes" :key="index" class="w-full flex-shrink-0">
               <img :src="image" alt="" class="w-full h-[400px] object-cover rounded"/>
           </div>
       </div>
      <button @click="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded"><i class="bx bx-chevron-left text-lg"></i></button>
      <button @click="next" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded"><i class="bx bx-chevron-right text-lg"></i></button>
       <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span v-for="(image, index) in photoes" :key="index" @click="toGo(index)" class="w-8 h-[2px] mb-[5px] rounded cursor-pointer" :class="currentIndex === index ? 'bg-emerald-400' : 'bg-white'"></span>
       </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
    import tesbeh from '@/assets/images/tesbeh-v.webp';
    import pyrite from '@/assets/images/pyrite-v.webp';
    //import infiniti from '@/assets/images/infinity-v.jpg';
    //import jew from '@/assets/images/jewl.webp';
   const photoes = ref([
        tesbeh,
        pyrite,
        '/imajes/duz-v.jpg', // iIMPORT ETMEDEN DE PUBLIC DIZININDEN CEKMEK MUMKUN ALTERNATIVE Bunun sebebi Vite veya Webpack gibi derleyicilerin, statik dosya yollarını çalışma zamanında değil, derleme zamanında çözmesidir.
        '/imajes/infinity-v.jpg' 
        ])
   const currentIndex = ref(0);

   const prev = () => {
    currentIndex.value = currentIndex.value === 0 ? photoes.value.length - 1 : currentIndex.value - 1;
   }

   const next = () => {
    currentIndex.value = currentIndex.value === photoes.value.length - 1 ? 0 : currentIndex.value + 1;
   }

  const carouselTimer = ()=> {

  }

   const toGo = (index) => {
    currentIndex.value = index;
   }
</script>