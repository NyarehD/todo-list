let inputTask = document.getElementById('inputTask');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
let inputDescription = document.getElementById('inputDescription');
let listId = 1;



addButton.addEventListener("click", ()=>{
    inputTextToList(listId);
});

// Adding tasks to todo list
function inputTextToList(id){
    let date = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let amOrPm = "AM";
    if(date.getHours()>12){
        amOrPm = "PM";
    }
    if(inputTask.innerText.length > 3){
        todoList.innerHTML += `<li id="listId${id}">
                                <div>
                                    <h3 id="taskId${id}">${inputTask.value}</h3>
                                    <p id="descriptionId${id}">${inputDescription.value}</p>
                                    <br>
                                    <span>${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}${amOrPm}</span>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="editList(${id})">edit</button>
                                    <button src="" onclick="deleteList(${id})">Delete</button>
                                </div>
                            </li>`;
    listId++;
    }else{
        alert("Text should be longer than ")
    }
}

// // Edit tasks from todo list
function editList(id) {
    let currentList = document.getElementById(`listId${id}`);
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