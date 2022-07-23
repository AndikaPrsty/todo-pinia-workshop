<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import {useTodoStore} from './stores/todo'

const todoStore = useTodoStore()

onMounted(async () => {
  await todoStore.fetchTodos()
})
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
    <div class="todo-head">
      <h1>TODO APP</h1>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.todo-head {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid black;
}
</style>
