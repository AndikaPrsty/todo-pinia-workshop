import {defineStore} from 'pinia'

export const useTodoStore = defineStore({
    id: 'todo-store',
    state: () => ({
        todoList: [],
        uncompletedTodoList: [],
    }),
    getters: {
        completedTodo() {
            return this.todoList.filter((todo) => {
                return todo.completed === true
            })
        },
        uncompletedTodo() {
          return this.todoList.filter((todo) => {
            return todo.completed === false
          })
        }
    },
    actions: {
        async fetchTodos () {
            try {
              let res = await fetch('https://jsonplaceholder.typicode.com/todos')
              res = await res.json()
              this.todoList = res
            } catch (error) {
              
            }
          },
          toggleTodo(id) {
           this.todoList.find((todo) => {
            return todo.id === id
           }).completed = !this.todoList.find((todo) => {
            return todo.id === id
           }).completed
          }
    }
})