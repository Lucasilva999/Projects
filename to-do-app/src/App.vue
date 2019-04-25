<template>
  <div id="app" class="container">
    <h1 class="text-center mt-3 mb-3">To-do App</h1>
    <form @submit.prevent.stop="addTodo()">
      <div class="form-group">
        <label for="newTodo" aria-describedby="newTodoHelp">New To-do</label>
        <input
          v-model="newTodo"
          type="text"
          class="form-control"
          id="input"
          aria-describedby="todoHelp"
          placeholder="Type something here..."
        >
        <small id="newTodoHelp" class="form-text text-muted">Enter a new To-do.</small>
      </div>
      <button type="submit" class="btn btn-primary">Add To-do</button>
    </form>
    <hr>
    <ul class="list-group">
      <li v-for="(todo, i) in todos" class="list-group-item" :key="todo">
        <button
          @click="changeDone(todo)"
          v-if="todo.done == false"
          type="submit"
          class="btn btn-primary mr-3"
        >Done :)</button>
        <button
          @click="changeDone(todo)"
          v-else
          type="submit"
          class="btn btn-danger mr-3"
        >Not Done :/</button>
        <span :class="{isDone: todo.done}">{{todo.title}}</span>
        <span @click="removeTodo(i)" class="remove-todo">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo != "") {
        this.todos.push({
          title: this.newTodo,
          done: false
        })
        this.newTodo = "";   
      }
    },

    changeDone(todo) {
      todo.done = todo.done == true ? false : true;
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  },

  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos);
      },
      deep: true
    }
  },

  mounted() {
    if (localStorage.todos) this.todos = JSON.parse(localStorage.todos);
  }
};
</script>

<style>
.isDone {
  text-decoration: line-through;
}
.remove-todo {
  float: right;
  cursor: pointer;
  font-size: 1.2rem;
  color: #aaa;
}
</style>
