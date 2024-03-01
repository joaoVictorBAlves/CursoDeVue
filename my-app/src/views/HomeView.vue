<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../stores/todoList.js';
import { storeToRefs } from 'pinia';

const todo = ref('');
const store = useTodoListStore();

const { todoList } = storeToRefs(store);
console.log(store);

const addTodoItem = () => {
  if (todo.value !== '') {
    store.addTodo(todo.value);
    todo.value = '';
    console.log(todoList.value);
  }
};

const deleteTodo = (id) => {
  store.removeTodo(id);
};

</script>

<template>
  <main>
    <div class="todoInput">
      <input v-model="todo" type="text" name="">
      <button @click="addTodoItem">Add</button>
    </div>
    <div class="todoList">
      <ul>
        <li v-for="item in todoList" :key="item.id">
          {{ item.todo }}
          <button @click="() => deleteTodo(item.id)">X</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
}

.todoInput {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todoInput input {
  padding: 10px;
  width: 70%;
}

.todoInput button {
  padding: 10px;
  width: 20%;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

li {
  width: 500px;
  list-style: none;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
}

li button {
  padding: 5px;
  color: #f44336;
  border: none;
}
</style>../stores/todoList.js