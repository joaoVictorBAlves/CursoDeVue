<script setup>
import Navbar from '@/components/Navbar.vue';
import { defineProps, onMounted, ref } from 'vue';
import ProductsService from '@/services/ProductsService';

const props = defineProps(['id']);

console.log(props.id);
const product = ref({});

onMounted(() => {
    ProductsService.getProduct(props.id).then((response) => {
        product.value = response.data;
    });
});

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
