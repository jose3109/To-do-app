import { addProjects, myProjects } from "./data/create-project.js";
import { addTasks } from "./data/create-task.js";
import {
    clearTaskInput,
    clearTasks,
    loadProjectTask,
    loadProjectTitle,
    activeProjectTasks,
    taskForm,
    taskDate,
    taskDescription,
    taskPriority
} from "./ui/task-ui.js";

import { projectNav, clearProjectInput } from "./ui/project-ui.js";


const addDialog = document.querySelectorAll(".add-dialog");
const dialogs = document.querySelectorAll("dialog");
const sideNav = document.querySelector(".side-nav");
const projectTitle = document.querySelector("#title");
const editForm = document.querySelector("#dialog3")
const editTitle = document.querySelector(".edit-dialog")


       function storeTasks(newTask) {
        const activeProjectNav = document.querySelector(".active");
    if (!activeProjectNav) return;
    for (let i = 0; i < myProjects.length; i++) {
        if (activeProjectNav.dataset.id === myProjects[i].id) {
            myProjects[i].addTask(newTask);
            return loadProjectTask(myProjects[i].tasks.at(-1))
        };
                    };
                }

// CREATE PROJECT + TASKS
export function setupHandler() {
    addDialog.forEach(btn => {
        btn.addEventListener("click", (event) => {

            const addId = event.currentTarget.dataset.dialog;
            if (!addId) return;

            event.preventDefault();

            dialogs.forEach(form => {

                const formId = form.getAttribute("id");

                if (formId === "dialog1" && formId === addId) {

                    if (!projectTitle.value) return;

                    const newProject = addProjects(projectTitle.value);
                    projectNav(newProject);
                   clearProjectInput();
                    form.close();
                }

                if (formId === "dialog2" && formId === addId) {

                    if (!taskForm.value && !taskDate.value && !taskDescription.value) return;

                    const newTask = addTasks(
                        taskForm.value,
                        taskDescription.value,
                        taskDate.value,
                        taskPriority.value
                    );

                   
                    storeTasks(newTask);
                    clearTaskInput();
                    form.close();
                    
                };
            });
        });
    });

}


// PROJECT SELECT
export function setupProjectSelection() {
    sideNav.addEventListener("click", (e) => {
        const projectEl = e.target.closest("li");
        if (!projectEl) return;

        setActive(projectEl);
        clearTasks();
        projectDetector(projectEl);
    });
};

function setActive(project) {
     if(!project) {
        const general = document.querySelector(`[data-id="0"]`);
        general.classList.add("active");
        return;
    } 
    const siblings = project.parentElement.children;
      
    for (const sib of siblings) {
        if(sib.classList.contains("active")) {
        sib.classList.remove("active");
    };
};

    project.classList.add("active");
};

function projectDetector(projectEl) {
    const id = projectEl.dataset.id;

    for (let i = 0; i < myProjects.length; i++) {
        if (myProjects[i].id === id) {
            loadProjectTitle(myProjects[i]);
            activeProjectTasks(myProjects[i]);
        };
    };
};

export function setupEdit() {
    editTitle.addEventListener("click", (e) => {
        const oldTitle = document.querySelector(".active");
        const newTitle = document.querySelector("#edit-title");
        if (!newTitle.value) return;
        for(let i = 0; i < myProjects.length; i++) {
            if (myProjects[i].id === oldTitle.dataset.id) {
                myProjects[i].title = newTitle.value;
                loadProjectTitle(myProjects[i]);
                document.querySelector(`span[data-id="${myProjects[i].id}"]`).textContent = myProjects[i].title;
                editForm.close();
                newTitle.value = "";
                
            };
         }
    });
}


export function setupDelete(deleteId) {
for(let i = 0; i < myProjects.length; i++) {
    if(myProjects[i].id === deleteId) {
        const listProject = document.querySelector(`li[data-id="${myProjects[i].id}"]`);
        listProject.innerHTML = "";
        clearTasks();
        loadProjectTitle(myProjects[0]);
        setActive();
        activeProjectTasks(myProjects[0]);
        listProject.remove();
        myProjects.splice(i, 1);
    }
}
}