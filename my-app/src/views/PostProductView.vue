<script setup>
import Navbar from '@/components/Navbar.vue';
import ProductsService from '@/services/ProductsService';

let name = '';
let description = '';
let price = '';
let qtd = '';

function submitForm(event) {
    event.preventDefault();

    ProductsService.postProduct({ name, description, price, qtd });
}

</script>

<template>
    <div>
        <header>
            <Navbar page="post" />
        </header>
        <div class="about">
            <h1>Post Product</h1>
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" v-model="name" required>
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" v-model="description" required></textarea>
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" v-model="price" required>
                </div>
                <div>
                    <label for="qtd">Quantity:</label>
                    <input type="number" id="qtd" name="qtd" v-model="qtd" required>
                </div>
                <input @click="submitForm" type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<style>
.about {
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    text-align: center;
    max-width: 800px;
}

.about h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

form {
    text-align: left;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Center the form horizontally */
    gap: 20px;
    margin: auto;
    margin-top: 20px;
}

form * {
    width: 100%;
}

label {
    font-size: 18px;
    text-align: left;
    /* Align labels to the left */
}

input,
textarea {
    width: 100%;
    /* Set inputs to full width */
    padding: 10px;
    font-size: 1em;
}
</style>