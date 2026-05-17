interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

class TodoList {
    private tasks: TodoItem[] = [];

    public addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = {
            id: Date.now(),  //task created would be measured or identified by the exact time they were created making each task to have a unique id
            task,
            completed: false,
            dueDate
        };
        this.tasks.push(newTodo);
    }

    public completeTodo(id: number): void {
        const todo = this.tasks.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
        }
    }

    public removeTodo(id: number): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    public listtasks(): TodoItem[] {
        return this.tasks;
    }

    public filterByCompleted(status: boolean): TodoItem[] {
        return this.tasks.filter(t => t.completed === status);
    }

    public updateTask(id: number, newTask: string): void {
        const todo = this.tasks.find(t => t.id === id);
        if (todo) {
            todo.task = newTask;
        }
    }

    public clearCompleted(): void {
        this.tasks = this.tasks.filter(t => !t.completed);
    }
}


// // commenting out the working examples because it weren't part of the requirements stated. 
// const todoList = new TodoList();

// // Add tasks
// todoList.addTodo("Buy groceries", new Date("2026-05-20"));
// todoList.addTodo("Finish assignment", new Date("2026-05-18"));
// todoList.addTodo("Wash clothes", new Date("2026-05-19"));

// console.log("All tasks after adding:");
// console.log(todoList.listtasks());

// // Complete a task
// const idToComplete = todoList.listtasks()[1]?.id;
// if (idToComplete) {
//     todoList.completeTodo(idToComplete);
// }

// console.log("\nAfter completing one task:");
// console.log(todoList.listtasks());

// // Filter completed tasks
// console.log("\nCompleted tasks:");
// console.log(todoList.filterByCompleted(true));

// // Update a task
// const idToUpdate = todoList.listtasks()[0]?.id;
// if (idToUpdate) {
//     todoList.updateTask(idToUpdate, "Buy groceries and fruits");
// }

// console.log("\nAfter updating first task:");
// console.log(todoList.listtasks());

// // Remove a task
// const idToRemove = todoList.listtasks()[2]?.id;
// if (idToRemove) {
//     todoList.removeTodo(idToRemove);
// }

// console.log("\nAfter removing one task:");
// console.log(todoList.listtasks());

// // Clear completed tasks
// todoList.clearCompleted();

// console.log("\nAfter clearing completed tasks:");
// console.log(todoList.listtasks());
