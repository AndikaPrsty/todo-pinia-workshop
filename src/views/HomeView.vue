<script setup>
import TodoCard from '../components/TodoCard.vue'
import {useTodoStore} from '../stores/todo'
const todoStore = useTodoStore()

</script>

<template>
  <main>
   <section class="todo-container">
    <div class="uncompleted-todo">
      <h1>Uncompleted Todo</h1>
      <TodoCard
        v-for="(todo, i) of todoStore.uncompletedTodo"
        :key="i"
        :title="todo.title"
        :id="todo.id" 
        :completed="todo.completed"
        @toggle-todo="(id) => todoStore.toggleTodo(id)"
      />
    </div>
    <div class="divider"></div>
    <div class="completed-todo">
      <h1>Completed Todo</h1>
     <TodoCard
        v-for="(todo, i) of todoStore.completedTodo"
        :key="i"
        :title="todo.title"
        :id="todo.id" 
        :completed="todo.completed" 
        @toggle-todo="(id) => todoStore.toggleTodo(id)"
    />
    </div>
   </section>
  </main>
</template>

<style>
  .uncompleted-todo {
    display: flex;
    flex-direction: column;
    gap: 10px;

  }
  .completed-todo {
    display: flex;
    flex-direction: column;
    gap: 10px;

  }
  .todo-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    padding: 30px;
  }
  .divider {
    width: 2px;
    background-color: black;
  }
</style>
