type isDone = 'done' | 'not done';

interface task  {
    id : number ;
    name : string ;
    isDone : isDone ;
}

interface TodoList{
    getTask() : task[];
    addTask(name : string): void;
    filterTasks(status : isDone) : task[];
    removeTask(id : number): void;
    toggleTaskStatus(id : number): void ;
    searchTask(name : string) : boolean;
}

class MyTodoList implements TodoList{
    private tasks : task[] = [];
    private nextId : number  = 1;
    getTask(): task[] {
        return this.tasks;
    }
    addTask(name: string): void {
        this.tasks.push({id : this.nextId++, name : name, isDone : 'not done'});
    }
    filterTasks(status: isDone): task[] {
        return this.tasks.filter(task => task.isDone === status);
    }
    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    toggleTaskStatus(id: number): void {
        this.tasks = this.tasks.map(task => task.id === id ? 
            {...task, isDone : task.isDone === 'done' ? 'not done' : 'done'} : task);
    }
    searchTask(name: string): boolean {
        return this.tasks.some(task => task.name === name);
    }
}


const todolist =  new MyTodoList();

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