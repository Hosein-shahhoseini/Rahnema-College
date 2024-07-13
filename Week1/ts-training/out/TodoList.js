"use strict";
class MyTodoList {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    getTask() {
        return this.tasks;
    }
    addTask(name) {
        this.tasks.push({ id: this.nextId++, name: name, isDone: 'not done' });
    }
    filterTasks(status) {
        return this.tasks.filter(task => task.isDone === status);
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    toggleTaskStatus(id) {
        this.tasks = this.tasks.map(task => task.id === id ? Object.assign(Object.assign({}, task), { isDone: task.isDone === 'done' ? 'not done' : 'done' }) : task);
    }
    searchTask(name) {
        return this.tasks.some(task => task.name === name);
    }
}
const todolist = new MyTodoList();
todolist.addTask("Rahnema College");
todolist.addTask("exercise");
todolist.addTask("english");
console.log(todolist.getTask());
console.log(todolist.filterTasks('not done'));
todolist.toggleTaskStatus(1);
console.log(todolist.getTask());
todolist.removeTask(2);
console.log(todolist.getTask());
console.log(todolist.searchTask("english"));
//# sourceMappingURL=TodoList.js.map