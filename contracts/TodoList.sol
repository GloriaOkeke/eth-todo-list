// declare the version of solidity
pragma solidity >=0.5.0;

// declare smart contract
contract TodoList {
    // state variable to hold the todolist count
  uint public taskCount = 0;

  struct Task {
    uint id;
    string content;
    bool done;
  }

  mapping(uint => Task) public tasks;

  event TaskCreated(
    uint id,
    string content,
    bool done
  );

  event TaskDone(
    uint id,
    bool done
  );

  constructor() public {
    createTask("Do Learnable interview project");
  }

  function createTask(string memory _content) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _content, false);
    emit TaskCreated(taskCount, _content, false);
  }

  function toggleDone(uint _id) public {
    Task memory _task = tasks[_id];
    _task.done = !_task.done;
    tasks[_id] = _task;
    emit TaskDone(_id, _task.done);
  }

}
