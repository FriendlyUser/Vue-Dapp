pragma solidity ^0.4.24;
contract TodoList {
   struct Todo {
      uint256 id;
      bytes32 content;
      address owner;
      bool isCompleted;
      uint256 timestamp;
   }
   uint256 public constant maxAmountOfTodos = 1000;
   // Owner => todos
   mapping(address => Todo[maxAmountOfTodos]) public todos;
   // Owner => last todo id
   mapping(address => uint256) public lastIds;
   modifier onlyOwner(address _owner) {
      require(msg.sender == _owner);
      _;
   }
   // Add a todo to the list
   function addTodo(bytes32 _content) public {
      Todo memory myNote = Todo(lastIds[msg.sender], _content, msg.sender, false, now);
      todos[msg.sender][lastIds[msg.sender]] = myNote;
      if(lastIds[msg.sender] >= maxAmountOfTodos) lastIds[msg.sender] = 0;
      else lastIds[msg.sender]++;
   }
   // Mark a todo as completed
   function markTodoAsCompleted(uint256 _todoId) public onlyOwner(todos[msg.sender][_todoId].owner) {
      require(_todoId < maxAmountOfTodos);
      require(!todos[msg.sender][_todoId].isCompleted);
      todos[msg.sender][_todoId].isCompleted = true;
   }

   function returnAllTodos(uint[] indexes) external 
   returns (
       uint256[],
       bytes32[],
       address[],
       bool[],
       uint256[]
   )
   {
        uint256[] memory ids          = new uint256[](indexes.length);
        bytes32[] memory contents     = new bytes32[](indexes.length);
        address[] memory owners       = new address[](indexes.length);
        bool[]    memory isCompleteds = new bool[](indexes.length);
        uint256[] memory timestamps   = new uint256[](indexes.length);
        
        for (uint256 i = 0; i < indexes.length; i++) {
            Todo storage todo = todos[msg.sender];
            ids[i] = todos.id;
            contents[i] = todos.content;
            owners[i] = todos.owner;
            isCompleteds[i] = todos.isCompleted;
            timestamps[i] = todos.timestamp;
        }
       return (ids, contents, owners, isCompleteds, timestamps);
   }
}