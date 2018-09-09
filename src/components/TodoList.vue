<template>
  <div class="todolist">
<!-- <h1>{{ msg }}</h1>
    <div v-if="userExists">
      Welcome {{ pseudo }}. Destroy your account by clicking <a href="#" @click="destroyAccount">here</a>.
    </div> 
    <div v-else>Sign up <router-link to="/signup">here</router-link>.</div> -->
    <h2>{{msg}}</h2>

    <h3>Add Todo Items</h3>
    <div class="form">
        <div class="entry">
          <button @click="addtodo" name="addtodo">Sign up</button>
          <input name="todo" v-model="form.todo">
          <label for="pseudo">Pseudo</label>
        </div>
      </div>
  </div>
</template>

<script>
/**
   * The custom HTML `<textarea>` component.
   *
   * @author David Li
   * @license MIT
   */

import TodoListLogic from '@/js/todolist'

export default {
  name: 'addtodo',
  data () {
    return {
      msg: 'Here is your todo list',
      form: {
        todo: undefined
      }
    }
  },
  /* computed: {
    userExists: function () {
    }
  }, */
  beforeCreate: function () {
    TodoListLogic.init().then(() => {
      TodoListLogic.returnAllTodos(window.web3.eth.accounts[0]).then((todoList) => {
        // console.log(todoList.length)
        // const numOfTodos = todoList.length
        // console.log(numOfTodos)
        console.log('home run')
        console.log(todoList)
        // console.log(todoListStructs)
      })
    })
    .catch(err => {
      console.log(err)
      console.log('Test')
    })
  },
  methods: {
    addtodo: function () {
      // let self = this
      if (typeof this.form.todo !== 'undefined' && this.form.todo !== '') {
        console.log('The form is blank?' + this.form.todo)
        TodoListLogic.addTodo(this.form.todo).then(tx => {
          console.log(tx)
          // self.$router.push('/')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
