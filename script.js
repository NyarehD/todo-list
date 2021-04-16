let inputTask = document.getElementById('inputTask');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
let inputDescription = document.getElementById('inputDescription');
let listId = 1;


addButton.addEventListener("click", ()=>{
    inputTextToList(listId);
});

document.addEventListener("keydown", (e)=>{
    if(e.code==="Enter"){
        inputTextToList(listId);
    }
})

// Adding tasks to todo list
function inputTextToList(id){
    let date = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let amOrPm = "AM";
    if(date.getHours()>12){
        amOrPm = "PM";
    }
    // check if the inputTask length is longer than 3
    // if true, set the edited task
    // else,  show alert.
    if(inputTask.value.length > 3){
        // check if the inputDescription is written
        // if true, display it within p element
        // if false, display nothing
        if(inputDescription.value){
            todoList.innerHTML += `<li id="listId${id}" class="list">
                                <div>
                                    <h3 id="taskId${id}" class="task">${inputTask.value}</h3>
                                    <p id="descriptionId${id}" class="description>${inputDescription.value}</p>
                                    <span>${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}${amOrPm}</span>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="editList(${id})">edit</button>
                                    <button src="" onclick="deleteList(${id})">Delete</button>
                                </div>
                            </li>`;
        listId++;
        }else{
            todoList.innerHTML += `<li id="listId${id}">
                                <div>
                                    <h3 id="taskId${id}">${inputTask.value}</h3>
                                    <span>${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}${amOrPm}</span>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="editList(${id})">edit</button>
                                    <button src="" onclick="deleteList(${id})">Delete</button>
                                </div>
                            </li>`;
        listId++;
        }
    }else{
        alert("Task should be longer than 3 words");
    }
}

// Edit tasks from todo list
function editList(id) {
    let currentTask = document.getElementById(`taskId${id}`);
    let currentDescription = document.getElementById(`descriptionId${id}`);
    let editedTask = window.prompt("Edit your Task.", currentTask.innerText);
    let editedDescription = window.prompt("Edit your Task Description.", currentDescription.innerText);
    currentTask.innerText = editedTask;
    currentDescription.innerText = editedDescription;
}

// Delete tasks from todo list
function deleteList(id){
    let currentTask = document.getElementById(`taskId${id}`);
    if(confirm(`Are you sure you want to delete this task: ${currentTask.innerHTML}?`)){
        todoList.removeChild(document.getElementById(`listId${id}`));
    }
}