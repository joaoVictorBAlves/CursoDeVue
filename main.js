const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    methods: {
        addNumber() {
            this.number++;
        },
        subNumber() {
            this.number--;
        }
    }
});