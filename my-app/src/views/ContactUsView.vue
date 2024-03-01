<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div>
        <header>
            <Navbar page="contact" />
        </header>
        <div class="about">
            <h1>Contact Us</h1>
            <p>
                We are a company that sells products for the home. We have been in the market for 10 years and we have the
                best
                products for you.
            </p>
        </div>
    </div>
</template>

<style>
.contact {
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    text-align: center;
    max-width: 800px;
}

.contact h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.contact p {
    font-size: 1.2em;
}
</style>