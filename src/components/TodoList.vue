<template>
  <div class="todolist">

     <form class="form">
       <v-layout row wrap>
        <v-flex xs6 offset-xs2>
          <v-text-field
              v-model="form.todo"
              :rules="nameRules"
              label="Todo Item"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs2 offset-xs1>
            <v-btn depressed color="primary" @click="addtodo" name="addtodo">Add Todo</v-btn>
          </v-flex>
        </v-layout>
    </form>
    <h3> TodoList </h3>
    <div class="table-responsive-vertical shadow-z-1">
      <table id="table" class="table table-hover table-mc-blue">
        <thead id='list-wrapper' v-if="todolist.length > 0">
        <tr>
          <th>Ids</th>
          <th>Todo Contents</th>
          <th>Owner</th>
          <th>isCompleted</th>
          <th>Unix timestamp</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="todo in todolist" :key="todo.ids">
          <td>{{todo.ids}}</td>
          <td>{{todo.contents}}</td>
          <td>{{todo.owners}}</td>
          <td>
            <v-btn depressed small color="warning" v-if="todo.isCompleteds === false" 
              @click="markAsCompleted(todo.ids)"  type="button" name="markAsCompleted">
              <v-icon>check</v-icon> Mark as Done
            </v-btn>
            <v-btn depressed small color="success" v-if="todo.isCompleteds === true" 
               type="button" name="markAsCompleted">
              <v-icon>thumb_up</v-icon>  Completed
            </v-btn>
          </td>
          <td>{{todo.timestamps}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
/**
   * The custom HTML `TodoList` component.
   *
   * @author David Li
   * @license MIT
   */

import TodoListLogic from '@/js/todolist'

export default {
  name: 'addtodo',
  data () {
    return {
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 25 || 'Name must be less than 15 characters'
      ],
      form: {
        todo: undefined
      },
      todolist: []
    }
  },
  /* computed: {
    userExists: function () {
    }
  }, */
  beforeCreate: function () {
    TodoListLogic.init().then(() => {
      this.returnAllTodos()
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
        })
        .then(() => {
          // due to issues with truffle-contract being unable to await for transactions, I'll assume we will wait for 30 seconds and then reload all todos
          setTimeout(function () {
            this.returnAllTodos()
          }, 5000);
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    markAsCompleted: function (todoId) {
      TodoListLogic.markTodoAsCompleted(todoId, window.web3.eth.accounts[0]).then(() => {
        this.returnAllTodos()
      })
    },
    returnAllTodos: function () {
      TodoListLogic.returnAllTodos(window.web3.eth.accounts[0]).then((todoList) => {
        // console.log(todoList.length)
        // const numOfTodos = todoList.length
        // console.log(numOfTodos)
        console.log('home run')
        console.log(todoList)
        this.todolist = todoList
        // console.log(todoListStructs)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.v-input__slot > div {
   height: 0px;
}
.v-text-field__slot {
    height: 0% !important;
}

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
/* -- Material Design Table style -------------- */
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  background-color: #fff;
}
.table > thead > tr,
.table > tbody > tr,
.table > tfoot > tr {
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  text-align: left;
  padding: 1.6rem;
  vertical-align: top;
  border-top: 0;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.table > thead > tr > th {
  font-weight: 400;
  color: #757575;
  vertical-align: bottom;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.table .table {
  background-color: #fff;
}
.table .no-border {
  border: 0;
}
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 0.8rem;
}
.table-bordered {
  border: 0;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 0;
  border-bottom: 1px solid #e0e0e0;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f5f5f5;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: rgba(0, 0, 0, 0.12);
}
@media screen and (max-width: 768px) {
  .table-responsive-vertical > .table {
    margin-bottom: 0;
    background-color: transparent;
  }
  .table-responsive-vertical > .table > thead,
  .table-responsive-vertical > .table > tfoot {
    display: none;
  }
  .table-responsive-vertical > .table > tbody {
    display: block;
  }
  .table-responsive-vertical > .table > tbody > tr {
    display: block;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    margin-bottom: 1.6rem;
  }
  .table-responsive-vertical > .table > tbody > tr > td {
    background-color: #fff;
    display: block;
    vertical-align: middle;
    text-align: right;
  }
  .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {
    content: attr(data-title);
    float: left;
    font-size: inherit;
    font-weight: 400;
    color: #757575;
  }
  .table-responsive-vertical.shadow-z-1 {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  .table-responsive-vertical.shadow-z-1 > .table > tbody > tr {
    border: none;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
  }
  .table-responsive-vertical > .table-bordered {
    border: 0;
  }
  .table-responsive-vertical > .table-bordered > tbody > tr > td {
    border: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {
    border-bottom: 0;
  }
  .table-responsive-vertical > .table-striped > tbody > tr > td,
  .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {
    background-color: #fff;
  }
  .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
    background-color: #f5f5f5;
  }
  .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
  .table-responsive-vertical > .table-hover > tbody > tr:hover {
    background-color: #fff;
  }
  .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
}

.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {
  background-color: #e7e9fd;
}
.table-hover.table-mc-blue > tbody > tr:hover > td,
.table-hover.table-mc-blue > tbody > tr:hover > th {
  background-color: #5c6bc0!important;
}
@media screen and (max-width: 767px) {
  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
    background-color: #fff;
  }
  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
    background-color: #e7e9fd;
  }
  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
    background-color: #fff;
  }
  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {
    background-color: #5c6bc0!important;
  }
}


</style>
