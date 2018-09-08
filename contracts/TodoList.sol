pragma solidity ^0.4.24;
/// @author David Li
/// @notice Stores a todolist on solidity, since an array of structs cannot easily be returned
/// the structs must be decomposed on the front-end
/// @dev simple todolist contains id, content, owner, isCompleted and unix timestamp
/// @dev one way to create a "trello" like application would require creating more modifiers and perhaps
/// role based access control.
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

   /// @dev Add a todo to the list
   /// @param _content bytes32 todo item, this must be short
   /// @notice updates mappings todos and lastIds
   function addTodo(bytes32 _content) public {
      Todo memory myNote = Todo(lastIds[msg.sender], _content, msg.sender, false, now);
      todos[msg.sender][lastIds[msg.sender]] = myNote;
      if(lastIds[msg.sender] >= maxAmountOfTodos) lastIds[msg.sender] = 0;
      else lastIds[msg.sender]++;
   }
   /// @dev Add a todo to the list
   /// @param _todoId todo item owned by only to mark as complete
   /// @notice Mark a todo as completed
   /// @dev only the todo item owner can mark the todo as complete
   function markTodoAsCompleted(uint256 _todoId) public onlyOwner(todos[msg.sender][_todoId].owner) {
      require(_todoId < maxAmountOfTodos);
      require(!todos[msg.sender][_todoId].isCompleted);
      todos[msg.sender][_todoId].isCompleted = true;
   }
   
   /// @dev get number of specified todos
   /// @dev consider renamng this function to returnTodos
   /// @param indexes array of uints corresponding to the number of todos
   /// @return decomposed arrays that mirror the struct.
   function returnAllTodos(uint[] indexes) external view
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
        Todo storage todoitem = todos[msg.sender][i];
        ids[i] = todoitem.id;
        contents[i] = todoitem.content;
        owners[i] = todoitem.owner;
        isCompleteds[i] = todoitem.isCompleted;
        timestamps[i] = todoitem.timestamp;
      }
      return (ids, contents, owners, isCompleteds, timestamps);
   }
}