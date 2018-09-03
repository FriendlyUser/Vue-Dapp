import contract from 'truffle-contract'
import TodoListContract from '@contracts/TodoList.json'

const TodoListTest = {

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
        console.log('Gay sex')
      }).catch(err => {
        console.log('Not gay sex')
        reject(err)
      })
    })
  },

  addTodo: function (content) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.exists.call(
        content,
        {from: window.web3.eth.accounts[0]}
      ).then(exists => {
        resolve(exists)
      }).catch(err => {
        reject(err)
      })
    })
  },

  markTodoAsCompleted: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.markTodoAsCompleted.call(
        {from: window.web3.eth.accounts[0]}
      ).then(() => {
        // resolve(window.web3.toUtf8(pseudo))
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  returnAllTodos: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.todos.call(
        window.web3.eth.accounts[0]
      ).then(() => {
        // resolve(window.web3.toUtf8(pseudo))
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default TodoListTest
