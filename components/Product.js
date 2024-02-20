app.component('product', {
    template:
        /*html*/
        `<div class="product" :class="qtd <= 0 ? 'outStock' : ''" >
            <h1>{{ product }}</h1>
            <p>{{ brand }}</p>
            <p>Quantity: {{ qtd }}</p>
            <p v-if="inStock">In Stock</p>
        </div>
        `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            qtd: 0,
        }
    },
    computed: {
        inStock() {
            return this.qtd > 0
        }
    }
})