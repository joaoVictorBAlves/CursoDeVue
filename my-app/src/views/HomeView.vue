<script setup>
import Navbar from '@/components/Navbar.vue';
import Product from '@/components/Product.vue';

let msg = 'Vamos aprender Vue 3'

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    price: 9.99
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do produto 2',
    price: 19.99
  },
  {
    id: 3,
    name: 'Produto 3',
    description: 'Descrição do produto 3',
    price: 29.99
  },
  {
    id: 4,
    name: 'Produto 4',
    description: 'Descrição do produto 4',
    price: 39.99
  }
]

</script>

<template>
  <div>
    <header>
      <Navbar page="home" />
    </header>
    <main>
      <Product v-for="(product, index) in products" :key="index" :product="product" />
    </main>
  </div>
</template>

<style>
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 800px;
  margin: auto;
  justify-items: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
}
</style>