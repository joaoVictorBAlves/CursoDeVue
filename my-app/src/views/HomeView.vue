<script setup>
import { onMounted, ref, watch } from 'vue';

import Navbar from '@/components/Navbar.vue';
import Product from '@/components/Product.vue';
import ProductService from '@/services/ProductsService';
// States
const titulo = ref('Página Inicial');
const cart = ref(0);
const products = ref([]);

const productSoldEffect = ref(false);

onMounted(() => {
  ProductService.getProducts().then((response) => {
    products.value = response.data;
  });
})

watch(productSoldEffect, () => {
  if (productSoldEffect.value) {
    console.log("Produto vendido");
    cart.value++;
    productSoldEffect.value = false;
  }
});

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