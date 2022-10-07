const TodoList = artifacts.require("./TodoList.sol");

contract("TodoList", accounts => {
  before(async () => {
    this.todoList = await TodoList.deployed();
  });

  it("deploys successfully", async () => {
    const address = await this.todoList.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("lists tasks", async () => {
    const taskCount = await this.todoList.taskCount();
    const task = await this.todoList.tasks(taskCount);
    assert.equal(task.id.toNumber(), taskCount.toNumber());
    assert.equal(task.content, "Do Learnable interview project");
    assert.equal(task.done, false);
    assert.equal(taskCount.toNumber(), 1);
  });

  it("creates tasks", async () => {
    const result = await this.todoList.createTask(
      "Commit Learnable Web3 project and push to github"
    );
    const taskCount = await this.todoList.taskCount();
    assert.equal(taskCount, 2);
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 2);
    assert.equal(
      event.content,
      "Commit Learnable Web3 project and push to github"
    );
    assert.equal(event.done, false);
  });

  it("toggles task completion status", async () => {
    const result = await this.todoList.toggleDone(1);
    const task = await this.todoList.tasks(1);
    assert.equal(task.done, true);
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 1);
    assert.equal(event.done, true);
  });
});
