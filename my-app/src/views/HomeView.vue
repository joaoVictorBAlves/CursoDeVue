<script setup>

import Navbar from '@/components/Navbar.vue';
import Product from '@/components/Product.vue';

import { ref } from 'vue';
const titulo = ref('Página Inicial');

const products = ref([
  { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, qtd: 10 },
  { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, qtd: 20 },
  { id: 3, name: 'Produto 3', description: 'Descrição do produto 3', price: 300, qtd: 0 },
  { id: 4, name: 'Produto 4', description: 'Descrição do produto 4', price: 400, qtd: 25 },
  { id: 5, name: 'Produto 5', description: 'Descrição do produto 5', price: 500, qtd: 30 },
  { id: 6, name: 'Produto 6', description: 'Descrição do produto 6', price: 600, qtd: 0 },
  { id: 7, name: 'Produto 7', description: 'Descrição do produto 7', price: 700, qtd: 2 },
  { id: 8, name: 'Produto 8', description: 'Descrição do produto 8', price: 800, qtd: 15 },
  { id: 9, name: 'Produto 9', description: 'Descrição do produto 9', price: 900, qtd: 20 },
  { id: 10, name: 'Produto 10', description: 'Descrição do produto 10', price: 1000, qtd: 10 },
]);

function buyProduct(product) {
  const index = products.value.findIndex(p => p.id === product.id);
  products.value[index].qtd--;
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
      <p>
        Possuímos 4 tipos de products
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