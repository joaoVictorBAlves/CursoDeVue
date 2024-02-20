app.component('product', {
    template:
        /*html*/
        `<div class="product" :class="!inStock ? 'outStock' : ''" >
            <h1>{{ product.name }}</h1>
            <p>{{ product.brand }}</p>
            <p>Quantity: {{ product.qtd }}</p>
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
    }
})