<template>
  <div class="todolist">
<!-- <h1>{{ msg }}</h1>
    <div v-if="userExists">
      Welcome {{ pseudo }}. Destroy your account by clicking <a href="#" @click="destroyAccount">here</a>.
    </div> 
    <div v-else>Sign up <router-link to="/signup">here</router-link>.</div> -->
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import TodoListTest from '@/js/todolist'

export default {
  name: 'todolist',
  data () {
    return {
      msg: 'Here is your todo list'
    }
  },
  /* computed: {
    userExists: function () {
    }
  }, */
  beforeCreate: function () {
    TodoListTest.init().then(() => {
      TodoListTest.todos(window.web3.eth.accounts[0]).then((todolistStruct) => {
        if (todolistStruct) {
          // Users.authenticate().then(pseudo => {
          //  this.pseudo = pseudo
          console.log(todolistStruct)
        }
      })
    }).catch(err => {
      console.log(err)
      console.log('Test')
    })
  },
  methods: {
    destroyAccount: function (e) {
     /* e.preventDefault()
      Users.destroy().then(() => {
        this.pseudo = undefined
      }).catch(err => {
        console.log(err)
      }) */
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
