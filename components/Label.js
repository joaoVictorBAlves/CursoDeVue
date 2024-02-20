app.component('label', {
    template:
        /*html*/
        `<span>{{ text }}</span>
        `,
    props: {
        text: {
            type: String,
            required: true
        }
    }
});