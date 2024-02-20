app.component('product', {
    template:
        /*html*/
        `<div class="product" :class="!inStock ? 'outStock' : ''" >
            <h1>{{ product.name }}</h1>
            <p>{{ product.brand }}</p>
            <p>Price: {{ product.price }}</p>
            <p>Quantity: {{ product.qtd }}</p>
            <button @click="updateQtd" :disabled="!inStock">Buy</button>
        </div>
        `,
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        inStock() {
            return this.product.qtd > 0
        }
    },
    methods: {
        updateQtd() {
            this.product.qtd -= 1
            this.$emit('update-cart')
        }
    }
})