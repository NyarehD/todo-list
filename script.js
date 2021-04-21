let inputTask = document.getElementById('inputTask');
let inputDescription = document.getElementById('inputDescription');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
let listId = 1;

// For user input events.
addButton.addEventListener("click", ()=>{
    inputTextToList(listId);
});

document.addEventListener("keydown", (e)=>{
    if(e.code==="Enter"){
        inputTextToList(listId);
        clear();
    }
})

// Adding tasks to todo list
function inputTextToList(id){
    let date = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Checking AM or PM
    let amOrPm = date.getHours() < 12 ? "AM" : "PM";
    // For using 12 hour format
    let hour = date.getHours() > 12 ? date.getHours()-12 : date.getHours();
    if (check(inputTask.value)){
        if(inputDescription.value){
            todoList.innerHTML += `<li id="listId${id}" class="list">
                                        <div>
                                            <p id="taskId${id}" class="task">${inputTask.value}</p>
                                            <div>
                                                <img src="assets/edit-regular.svg" onclick="editList(${id})" alt="edit">
                                                <img src="assets/trash-alt-regular.svg" onclick="deleteList(${id})" alt="delete">
                                            </div>
                                        </div>
                                        <p id="descriptionId${id}" class="description">${inputDescription.value}</p>
                                        <span class="date">${months[date.getMonth()]} ${date.getDate()} ${hour}:${date.getMinutes()}${amOrPm}</span>
                                </li>`;
            clear();
        }else{
            todoList.innerHTML += `<li id="listId${id}" class="list">
            <div>
                <p id="taskId${id}" class="task">${inputTask.value}</p>
                <div>
                    <img src="assets/edit-regular.svg" onclick="editList(${id})" alt="edit">
                    <img src="assets/trash-alt-regular.svg" onclick="deleteList(${id})" alt="delete">
                </div>
            </div>
            <span class="date">${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}${amOrPm}</span>
            </li>`;
            clear();
        }
        listId++;
    }
}
// Checking the task input
function check(input) {
    if (input.length > 3){
        return true;
    }
    if(input.length <= 3){
        return alert("Task should be longer than 3 words!");
    }
}

// Edit tasks from todo list
function editList(id) {
    let currentTask = document.getElementById(`taskId${id}`);
    let editedTask = window.prompt("Edit your Task.", currentTask.innerText);
    let checked = check(editedTask);

    // If edited task meet the requirements it will set the value from prompt.
    // Else, recall the editList function to repeat.
    (checked) ? currentTask.innerText = editedTask : editList(id);

    let currentDescription = document.getElementById(`descriptionId${id}`) || false;
    let editedDescription = currentDescription ? window.prompt("Edit your Task Description.", currentDescription.innerText) : false;
    if(editedDescription){
        currentDescription.innerText = editedDescription;
    }
}

// Delete tasks from todo list
function deleteList(id){
    let currentTask = document.getElementById(`taskId${id}`);
    if(confirm(`Are you sure you want to delete this task: ${currentTask.innerHTML}?`)){
        todoList.removeChild(document.getElementById(`listId${id}`));
    }
}

// For clearing input after adding task
function clear(){
    inputTask.value = "";
    inputDescription.value = "";
}