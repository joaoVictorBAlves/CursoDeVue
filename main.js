const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Shoes', brand: 'Nike', price: 100, qtd: 10 },
                { name: 'Socks', brand: 'Vue Mastery', price: 10, qtd: 0 },
                { name: 'Pants', brand: 'Adidas', price: 50, qtd: 5 },
            ],
        }
    },
});