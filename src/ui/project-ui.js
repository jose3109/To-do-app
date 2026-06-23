const sideNav = document.querySelector(".side-nav");
const projectTitle = document.querySelector("#title");
export function projectNav(project) {
    const list = document.createElement("li");

    list.setAttribute("data-id", project.id);
    list.classList.add("project");

    const span = document.createElement("span");
    span.setAttribute("data-id", project.id);
    span.textContent = project.title;

    list.appendChild(span);
    list.appendChild(createSideBtns(project));

    sideNav.appendChild(list);
}

function createSideBtns(project) {
    const delBtn = document.createElement("button");
    delBtn.setAttribute("data-delete", project.id);
    console.log(delBtn.getAttribute("data-delete"));
    const renameBtn = document.createElement("button");
    renameBtn.setAttribute("data-dialog", "dialog3");
    const btnContainer = document.createElement("div");

    btnContainer.classList.add("edit-delete");

    delBtn.classList.add("material-symbols-outlined", "delete-button");
    delBtn.textContent = "delete";

    renameBtn.classList.add("material-symbols-outlined", "rename-button");
    renameBtn.textContent = "edit";

    btnContainer.append(renameBtn, delBtn);

    return btnContainer;
}
 
export function clearProjectInput() {
    projectTitle.value = "";
}