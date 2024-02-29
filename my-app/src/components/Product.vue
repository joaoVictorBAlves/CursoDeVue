<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    product: Object
});

const isOutOfStock = computed(() => {
    return props.product.qtd === 0;
});

function handleClick() {
    if (props.product.qtd > 0) {
        // props.product.qtd--;
        // Não é possível alterar um props diretamente no componente filho
        // Para alterar o valor de um props, é necessário emitir um evento para o componente pai
    }
}
</script>

<template>
    <div class="product" :class="isOutOfStock ? 'outStock' : ''">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
        <p>Quantity: {{ product.qtd }}</p>
        <button v-if="product.qtd > 0" @click="handleClick">Buy</button>
    </div>
</template>

<style>
.product {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
}

.product h2 {
    margin: 0;
}

.product p {
    margin: 0;
}

.outStock {
    border: solid 1px rgb(239, 87, 87);
}
</style>
