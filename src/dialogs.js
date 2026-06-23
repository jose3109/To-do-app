import { setupDelete } from "./handlers";
import { clearProjectInput } from "./ui/project-ui";
import { clearTaskInput } from "./ui/task-ui";
const openDialog = document.querySelectorAll(".open-dialog")
const containers = document.querySelectorAll(".container")
const closeDialog = document.querySelectorAll(".close");
const dialog = document.querySelectorAll("dialog");
export function setupDialogs() {

    //open form by adding a event listener to each open button than matches the dataset with the dialog id
    containers.forEach((container) => {
        container.addEventListener("click", (e) => {
         const dialogId = e.target.dataset.dialog;
         if(!dialogId ) {
            const deleteId = e.target.dataset.delete;
            if(!deleteId) return;
            setupDelete(deleteId);
            return;
         }
            dialog.forEach((openForm) => {
                const openFormId = openForm.getAttribute("id");

                if(openFormId === dialogId) {
                    openForm.showModal();
                }
            });
        });
});
    closeDialog.forEach((closeButton) => {
        closeButton.addEventListener("click", (e) => { 
            const buttonId = e.target.dataset.dialog;  
            e.preventDefault();
            if(!buttonId) return; 

            dialog.forEach((closeForm) => { 
                const closeFormId = closeForm.getAttribute("id");
                if(closeFormId === buttonId) {
                    closeForm.close(); 
                    clearTaskInput();
                    clearProjectInput();
                }
            }); 
        });
    });

}