var TodoList = artifacts.require("./TodoList.sol");
const utils = require('./helpers/utils')
contract('Todo', function(accounts) {
    let myUserInstance;
    let owner    = accounts[0];
    let nonOwner = accounts[1];
    const username = "grandfleet"
    let tryCatch = require("./helpers/exceptions.js").tryCatch;
    let errTypes = require("./helpers/exceptions.js").errTypes;
    beforeEach(async () => {
        // [accounts[0], accounts[1]], requiredConfirmations, dailyLimit

        myTodoListInstance = await TodoList.deployed()
        assert.ok(myTodoListInstance)
    })
    it("get the size of the TodoList contract", function() {
        return TodoList.deployed().then(function(instance) {
          var bytecode = instance.constructor._json.bytecode;
          var deployed = instance.constructor._json.deployedBytecode;
          var sizeOfB  = bytecode.length / 2;
          var sizeOfD  = deployed.length / 2;
          console.log("    size of bytecode in bytes = ", sizeOfB);
          console.log("    size of deployed in bytes = ", sizeOfD);
          console.log("    initialisation and constructor code in bytes = ", sizeOfB - sizeOfD);
        }); 
    });
    describe("Add Todo", async() => {
        //console.log('Cool')
        it("Adding a Todo Item", async() =>  {
        console.log("      adding Todo Items")
           const todoitem = "num1"
           await myTodoListInstance.addTodo(todoitem)
           const todoitem2 = "num2"
           await myTodoListInstance.addTodo(todoitem2)
           console.log("      getting all Todo Items")
           const allTodos = await myTodoListInstance.returnAllTodos()
           console.log("      printing Todo Items")
           console.log(allTodos)
        });
        /** 
        it("Authenticating a User", async() => {
            const usernameTst = await myUserInstance.authenticate()
            const usernameStr = web3.toUtf8(usernameTst)
            assert.strictEqual(username,usernameStr,"username is matchs up")
        });
        it("Getting a username", async() => {
            const usernameTst = await myUserInstance.get(owner)
            const usernameStr = web3.toUtf8(usernameTst)
            assert.strictEqual(username,usernameStr,"username is matchs up")
        });
        it("Destroying a User", async() => {
            const userDestroyedEvent = await myUserInstance.destroy()
            const userDestroyedAddress = utils.getParamFromTxEvent( userDestroyedEvent, '_address', null, 'UserDestroyed')
            assert.strictEqual(userDestroyedAddress,owner,"User is successful destroyed")
        });
        */
    });
});
