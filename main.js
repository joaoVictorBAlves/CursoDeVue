const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            task: '',
            tasks: [],
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
            this.task = '';
        },
    },
});

