
import { ref, onMounted } from 'vue';

export function useProducts() {
  const products = ref([]);

  onMounted(async() => {
    const response = await fetch('/data/anbar.json');
    const data = await response.json();
    products.value = data;
     console.log("ffffffff ", products)
  });
  
  return { products };
}

