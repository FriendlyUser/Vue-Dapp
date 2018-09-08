pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/TodoList.sol";

contract TestTodoList {
    function testAddTodo() public {
        string memory todoItem1 = "Complete Tests";
        string memory todoItem2 = "Update Front End";
        TodoList myTodoList = TodoList(DeployedAddresses.TodoList());
        myTodoList.addTodo(stringToBytes32(todoItem1));
        myTodoList.markTodoAsCompleted(0);
        myTodoList.addTodo(stringToBytes32(todoItem2));
    }

    function stringToBytes32(string memory source) returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

}

