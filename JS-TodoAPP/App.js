"use strict";

const task = document.querySelector("#task");
const taskList = document.querySelector("#task-list");
const filters = document.querySelectorAll("#filters span");

let isEditMode = false;
let editedTaskId;
let filterMode = "all";
let taskListArray = [];

const addTask = (e) => {
    e.preventDefault();
    let addedTaskValue = task.value.trim();
    if (addedTaskValue) {
        let id = taskListArray.length == 0 ? 1 : taskListArray[taskListArray.length - 1].id + 1;
        taskListArray.push(
            {
                "id": id,
                "task": addedTaskValue,
                "status": "pending"
            });
        // Buradan tüm görevleri yeniden çağıracak fonksiyonu çağıracağız
        setToLocalStorage();
    } else {
        alert("Please do not leave blank!")
    }
    task.value = "";
    task.focus();
}

const displayTasks = (filterMode) => {
    taskList.innerHTML = "";
    if(taskListArray.length == 0){
        taskList.innerHTML = "<div class='alert alert-warning m-0'>Task cannot be found</div>"
    }else{
        for (const taskItem of taskListArray) {
            if(filterMode == "all"){
                let completed = taskItem.status =="completed" ? "text-decoration-line-through" : "";
                let taskLiElement = `
                <li class="list-group-item" id="${taskItem.id}">
                    <div class="form-check form-switch d-flex justify-content-between align-items-center gap-1">
                        <input onclick="updateTaskStatus(this)" style="cursor: pointer;" class="form-check-input" type="checkbox" role="switch" id="switch-completed">
                        <div class="input-group">
                            <input type="text" class="form-control" value="${taskItem.task}" id="${taskItem.id}" disabled>
                            <button onclick class="btn btn-warning" id="${taskItem.id}"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onclick="" class="btn btn-danger" id="${taskItem.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </li>
                `;
                taskList.insertAdjacentHTML("beforeend",taskLiElement);
            }
        }
    }
}

const updateTaskStatus =(element) => {
    console.log(element)
};

const getFromLocalStorage = () => {
    taskListArray = localStorage.getItem("task-list-FS-2310-13") == null ? [] : JSON.parse(localStorage.getItem("task-list-FS-2310-13"));
}

const setToLocalStorage = () => {
    localStorage.setItem("task-list-FS-2310-13", JSON.stringify(taskListArray));
}

getFromLocalStorage();
displayTasks(filterMode);

