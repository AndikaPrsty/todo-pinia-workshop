<template>
    <div
       class="todo-card complete"
       :class="completed ? 'completed' : 'uncompleted'"
       >
        <h1>{{title}}</h1>
        <button
        @click="$emit('toggle-todo', id)"
        >
        toggle todo
        </button>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['toggle-todo'])
</script>
<style>
.todo-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    box-shadow: 1px 2px 2px 1px black;
}
.todo-card.completed {
    background-color: greenyellow;
}
.todo-card.uncompleted {
    background-color: brown;
}
</style>