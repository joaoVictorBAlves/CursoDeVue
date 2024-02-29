<script setup>
defineProps({
    product: Object
});
</script>

<template>
    <div class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
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
</style>