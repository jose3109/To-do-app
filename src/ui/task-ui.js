import { myProjects } from "../data/create-project.js";

export const taskDate = document.querySelector("#date");
export const taskDescription = document.querySelector("#description");
export const taskForm = document.querySelector("#task");
export const taskPriority = document.querySelector("#priority");

const taskContainer = document.querySelector(".task-container");

export function clearTasks() {
    taskContainer.innerHTML = "";
}

export function loadProjectTask(newTask) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-accordion");

    const header = document.createElement("div");
    header.classList.add("task-header");
    header.textContent = newTask.title;

    const ul = document.createElement("ul");
    ul.classList.add("ul-tasks");

    const description = document.createElement("li");
    description.textContent = newTask.description;

    const priority = document.createElement("li");
    priority.textContent = newTask.priority;

    const date = document.createElement("li");
    date.textContent = newTask.date;

    ul.append(description, priority, date);
    taskDiv.append(header, ul);
    taskContainer.appendChild(taskDiv);
}

export function loadProjectTitle(project) {
    const titleEl = document.querySelector(".project-title");
    titleEl.textContent = project.title;
}

export function activeProjectTasks(project) {
    if (!project.tasks) return;
    project.tasks.forEach(loadProjectTask);
}

// accordion
taskContainer.addEventListener("click", (e) => {
    const header = e.target.closest(".task-header");
    if (!header) return;

    const content = header.nextElementSibling;
    const height = content.scrollHeight;

    const allHeaders = taskContainer.querySelectorAll(".task-header");

    if (header.classList.contains("active-task")) {
        header.classList.remove("active-task");
        content.style.maxHeight = "0px";
    } else {
        allHeaders.forEach(h => {
            h.classList.remove("active-task");
            h.nextElementSibling.style.maxHeight = "0px";
        });

        header.classList.add("active-task");
        content.style.maxHeight = `${height}px`;
    }
});

export function clearTaskInput() {
    taskForm.value = "";
     taskDate.value = "";
   taskDescription.value = "";
     taskPriority.value = "";
};
// default load
loadProjectTitle(myProjects[0]);