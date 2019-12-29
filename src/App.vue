<template>
  <div id="app">
    <div class="bg-primary text-white text-center p-2 mt-2">
      Lista zadań użytkownika {{name}}
    </div>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Zadanie</div>
        <div class="col-2 font-weight-bold">Zakończono?</div>
      </div>
      <div class="row" v-for="task in filteredTasks" :key="task.action">
        <div class="col">{{task.action}}</div>
        <div class="col-2 text-center">
          <input v-model="task.done" type="checkbox" class="form-check-input"/>
      </div>
    </div>
      <div class="row py-2">
        <div class="col">
          <input v-on:keyup.enter="addNewTodo" v-model="newItemText" class="form-control"/>
        </div>
        <div class="col-2">
          <button v-on:click="addNewTodo" class="btn btn-primary">
            Dodaj
          </button>
        </div>
      </div>
      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <input v-model="hideCompleted" type="checkbox" class="form-check-input" />
          <label class="form-check-label font-weight-bold">
            Ukryj zakończone zadania
          </label>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
      return {
          name: "Olcia Duczek",
          tasks: [],
          hideCompleted: true,
          newItemText: '',
      }
  },
  computed: {
    filteredTasks() {
        return this.hideCompleted ?
            this.tasks.filter(task => !task.done) : this.tasks
    }
  },
  methods: {
    addNewTodo() {
        this.tasks.push({
            action: this.newItemText,
            done: false
        });
        localStorage.setItem("todos", JSON.stringify(this.tasks));
        this.newItemText = '';
    },
  },
  created() {
      let data = localStorage.getItem("todos");
      if (data != null) {
          this.tasks = JSON.parse(data);
      }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
