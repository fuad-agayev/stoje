
import { ref } from 'vue';

const cart = ref([]); 
const totalProduct = ref(0);
const totalPrice = ref(0);
const localTotalPrice = ref(0)

function addToCart(product, quantity) {
 //const existingProduct = cart.value.some((item) => item.id === product.id)
 //if(existingProduct){
 //   return
  //}
  const existingProduct = cart.value.find((item) => item.id === product.id)
  if(existingProduct){ 
    existingProduct.quantity += quantity
    existingProduct.localTotalPrice = existingProduct.quantity * existingProduct.price;
  }else{
    cart.value.push({...product, quantity, localTotalPrice: quantity * product.price}); 
  }
  
  console.log('Sepete Eklenen Ürün:', product);
  console.log('Güncel Sepet:', cart.value);
  updateTotalProduct()
}


const updateQuantity = (productId, quantity) => {
      const product = cart.value.find(item => item.id === productId);
      if(product){
        //product.quantity = Math.max(quantity, 1)
        if(quantity <= 0){
           removeFromCart(productId)
        }else{
           product.quantity = quantity;
           product.localTotalPrice = product.quantity * product.price
         
        }
      }
      updateTotalProduct()
}

const removeFromCart = (productId) => {
     cart.value = cart.value.filter((item) => item.id !== productId);
     updateTotalProduct()
}

// Sepeti temizleme
const clearCart = () => {
  cart.value = [];
  updateTotalProduct()
};

const updateTotalProduct = () => {
  totalProduct.value = cart.value.reduce((acc, item) => acc + item.quantity, 0);
  totalPrice.value = cart.value.reduce((total, item) => total + item.localTotalPrice, 0);
  //totalPrice.value = cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
 
}

export const useCart = () => {
  return { cart, addToCart, totalProduct, totalPrice, clearCart, removeFromCart, updateQuantity };
}