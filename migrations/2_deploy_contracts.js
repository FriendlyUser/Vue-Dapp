var Users = artifacts.require("./Users.sol");
var TodoList = artifacts.require("./TodoList.sol")
module.exports = function(deployer) {
  deployer.deploy(Users);
  deployer.deploy(TodoList);
};
