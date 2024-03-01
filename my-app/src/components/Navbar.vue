<script setup>
defineProps({
    page: String
});
</script>

<template>
    <nav>
        <div class="logo">
            <h1>My App</h1>
        </div>
        <ul class="nav-links">
            <li>
                <router-link :class="{ active: page === 'home' }" to="/">Home</router-link>
            </li>
            <li>
                <router-link :class="{ active: page === 'about' }" to="/about">About</router-link>
            </li>
            <li>
                <router-link :class="{ active: page === 'contact' }" to="/contact">Contact</router-link>
            </li>
            <li>
                <router-link :class="{ active: page === 'post' }" to="/postProducts">Post Product</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    padding-inline: 50px;
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: larger;
    font-weight: bold;
}

ul.nav-links {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
}

li {
    padding: 1rem;
}

a {
    color: #fff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.active {
    font-weight: bold;
}
</style>