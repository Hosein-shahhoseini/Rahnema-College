var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MyTodoList = /** @class */ (function () {
    function MyTodoList() {
        this.tasks = [];
        this.nextId = 1;
    }
    MyTodoList.prototype.getTask = function () {
        return this.tasks;
    };
    MyTodoList.prototype.addTask = function (name) {
        this.tasks.push({ id: this.nextId++, name: name, isDone: 'not done' });
    };
    MyTodoList.prototype.filterTasks = function (status) {
        return this.tasks.filter(function (task) { return task.isDone === status; });
    };
    MyTodoList.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
    };
    MyTodoList.prototype.toggleTaskStatus = function (id) {
        this.tasks = this.tasks.map(function (task) { return task.id === id ? __assign(__assign({}, task), { isDone: task.isDone === 'done' ? 'not done' : 'done' }) : task; });
    };
    MyTodoList.prototype.searchTask = function (name) {
        return this.tasks.some(function (task) { return task.name === name; });
    };
    return MyTodoList;
}());
var todolist = new MyTodoList();
todolist.addTask("Rahnema College");
todolist.addTask("exercise");
todolist.addTask("english");
console.log(todolist.getTask());
console.log(todolist.filterTasks('not done'));
todolist.toggleTaskStatus(1);
console.log(todolist.getTask());
todolist.removeTask(2);
console.log(todolist.getTask());
console.log(todolist.filterTasks('not done'));
console.log(todolist.searchTask("english"));
