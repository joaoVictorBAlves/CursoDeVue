<script setup>
import Navbar from '@/components/Navbar.vue';
import { computed, defineProps, ref } from 'vue';


const props = defineProps(['id']);

const products = ref([
    { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, qtd: 10 },
    { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, qtd: 20 },
    { id: 3, name: 'Produto 3', description: 'Descrição do produto 3', price: 300, qtd: 0 },
    { id: 4, name: 'Produto 4', description: 'Descrição do produto 4', price: 400, qtd: 25 },
    { id: 6, name: 'Produto 6', description: 'Descrição do produto 6', price: 600, qtd: 0 },
    { id: 8, name: 'Produto 8', description: 'Descrição do produto 8', price: 800, qtd: 15 },
]);

console.log(props.id);
const product = computed(() => {
    return products.value.find(p => p.id == props.id);

});

// console.log(product);
</script>

<template>
    <div>
        <header>
            <Navbar page="" />
        </header>
        <div v-if="product" class="product">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>${{ product.price }}</p>
            <p>Quantidade: {{ product.qtd }}</p>
        </div>
        <div v-else>
            <p>Produto não encontrado</p>
        </div>
    </div>
</template>

<style scoped>
.product {
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    text-align: center;
    max-width: 800px;
}

.product h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.product p {
    font-size: 1.2em;
}
</style>
