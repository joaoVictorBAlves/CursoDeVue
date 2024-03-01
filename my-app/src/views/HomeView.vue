<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

import Navbar from '@/components/Navbar.vue';
import Product from '@/components/Product.vue';
// States
const titulo = ref('Página Inicial');
const cart = ref(0);
const products = ref([
  { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, qtd: 10 },
  { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, qtd: 20 },
  { id: 3, name: 'Produto 3', description: 'Descrição do produto 3', price: 300, qtd: 0 },
  { id: 4, name: 'Produto 4', description: 'Descrição do produto 4', price: 400, qtd: 25 },
  { id: 6, name: 'Produto 6', description: 'Descrição do produto 6', price: 600, qtd: 0 },
  { id: 8, name: 'Produto 8', description: 'Descrição do produto 8', price: 800, qtd: 15 },
]);
const productSoldEffect = ref(false);
// Effects
onMounted(() => {
  alert("Seja bem vindo a nossa loja :)")
});

onUnmounted(() => {
  console.log('HomeView desmontada');
});

watch(productSoldEffect, () => {
  if (productSoldEffect.value) {
    console.log("Produto vendido");
    cart.value++;
    productSoldEffect.value = false;
  }
});
// Functions
function buyProduct(product) {
  const index = products.value.findIndex(p => p.id === product.id);
  products.value[index].qtd--;
  productSoldEffect.value = true;
}

</script>

<template>
  <div>
    <header>
      <Navbar page="home" />
    </header>
    <main>
      <h1>{{ titulo }}</h1>
      <br>
      <div class="products">
        <Product v-for="product in products" :key="product.id" :product="product" @buy="buyProduct" />
      </div>
      <br>
      <p v-show="cart > 0">
        Há {{ cart }} ítens em estoque
      </p>
    </main>
  </div>
</template>

<style>
main {
  margin-top: 50px;
  text-align: center;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 800px;
  margin: auto;
  justify-items: center;
  align-items: center;
  gap: 20px;
}
</style>