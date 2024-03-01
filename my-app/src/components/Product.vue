<script setup>
import { defineProps, computed } from 'vue';
import { defineEmits } from 'vue';
import { RouterLink } from 'vue-router';
// Props
const props = defineProps({
    product: Object
});
// Emits
const emits = defineEmits(['buy']);

// Computed
const isOutOfStock = computed(() => {
    return props.product.qtd === 0;
});

// functions
function handleClick() {
    if (props.product.qtd > 0) {
        emits('buy', props.product);
    }
}
</script>

<template>
    <div class="product" :class="isOutOfStock ? 'outStock' : ''">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
        <p>Quantity: {{ product.qtd }}</p>
        <br>
        <RouterLink v-if="product.qtd > 0" :to="{ name: 'productDetails', params: { id: product.id } }">
            Veja mais
        </RouterLink>
        <br>
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

button {
    padding-inline: 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}

a {
    text-decoration: none;
    color: #1d5f1f;
}
</style>
