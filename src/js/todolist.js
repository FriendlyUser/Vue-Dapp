import contract from 'truffle-contract'
import TodoListContract from '@contracts/TodoList.json'

const TodoListLogic = {

  contract: null,

  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(TodoListContract)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  addTodo: function (content) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.addTodo(
        content,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  markTodoAsCompleted: function (todoId) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.markTodoAsCompleted(
        todoId,
        {from: window.web3.eth.accounts[0]}
      ).then((tx) => {
        // resolve(window.web3.toUtf8(pseudo))
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },
  timeConverter: function (unixTimeStamp) {
    var a = new Date(unixTimeStamp * 1000)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
    return time
  },
  returnAllTodos: function () {
    let self = this
    let numOfTodos = 0
    let todoListStruct = []
    const FIELD_IDS = 0
    const FIELD_CONTENTS = 1
    const FIELD_OWNERS = 2
    const FIELD_ISCOMPLETEDS = 3
    const FIELD_TIMESTAMPS = 4
    // Promise chain, get the lastId,
    // and then get all the todos
    return new Promise((resolve, reject) => {
      self.instance.lastIds.call(
        window.web3.eth.accounts[0]
      ).then((numTodos) => {

        numOfTodos = numTodos.toNumber()
        console.log(numOfTodos)
        // @see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
        const todoItems = Array.from(Array(numOfTodos).keys())
        self.instance.returnAllTodos.call(
          todoItems, {from: window.web3.eth.accounts[0]}
        ).then((todoList) => {
          console.log(todoList)
          for (let i = 0; i < numOfTodos; i++) {
            let todo = {
              ids: todoList[FIELD_IDS][i].toNumber(),
              contents: window.web3.toUtf8(todoList[FIELD_CONTENTS][i]),
              owners: todoList[FIELD_OWNERS][i],
              isCompleteds: todoList[FIELD_ISCOMPLETEDS][i],
              timestamps: this.timeConverter(todoList[FIELD_TIMESTAMPS][i].toNumber())
            }
            todoListStruct.push(todo)
            console.log(todoListStruct)
          }
          resolve(todoListStruct)
        })
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}

export default TodoListLogic
