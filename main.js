const app = Vue.createApp({
    data() {
        return {
            number: 5,
        }
    },
    methods: {
        addNumber() {
            this.number++;
        },
        subNumber() {
            this.number--;
        }
    },
    computed: {
        outOfStock() {
            return this.number < 1;
        }
    }
});