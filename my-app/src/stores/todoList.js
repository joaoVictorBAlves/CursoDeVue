import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        addTodo(todo) {
            this.todoList.push({ todo, id: this.id++, completed: false });
        },
        removeTodo(id) {
            this.todoList = this.todoList.filter((item) => item.id !== id);
        },
    }
})