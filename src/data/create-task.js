class Task {
    constructor(title, description, date, priority, id) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.id = id;
    }
}

export function addTasks(title, description, date, priority) {
    const taskId = crypto.randomUUID();
    const task = new Task(title, description, date, priority, taskId);
    return task
}