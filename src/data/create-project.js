class Project {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

export const myProjects = [];

const general = new Project("General", "0");
myProjects.push(general);

export const addProjects = (title) => {
    const id = crypto.randomUUID();
    const project = new Project(title, id);
    myProjects.push(project);
    return project;
};