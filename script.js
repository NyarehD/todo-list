const inputTask = document.getElementById('inputTask');
const inputDescription = document.getElementById('inputDescription');
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
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Checking AM or PM
    const amOrPm = date.getHours() < 12 ? "AM" : "PM";
    const hour24Format = date.getHours();
    // For using 12 hour format
    const hour = (hour24Format >= 12) ? hour24Format - 12 : hour24Format;
    const minute = (date.getMinutes() < 10) ? date.getMinutes() : `0${date.getMinutes()}`;
    if (check(inputTask.value)){
        if(inputDescription.value){
            todoList.innerHTML += `<li id="listId${id}" class="list">
                                        <div>
                                            <p id="taskId${id}" class="task" contenteditable="true">${inputTask.value}</p>
                                        </div>
                                        <div>
                                        <p id="descriptionId${id}" class="description" contenteditable="true">${inputDescription.value}</p>
                                        </div>
                                        <div>
                                        <span class="date">${months[date.getMonth()]} ${date.getDate()} ${hour}:${minute}${amOrPm}</span>
                                            <img src="assets/edit-regular.svg" onclick="new ChangeToDo(${id}).editList()" alt="edit">
                                            <img src="assets/trash-alt-regular.svg" onclick="new ChangeToDo(${id}).deleteList()" alt="delete">
                                        </div>
                                    </li>`;
            clear();
        }else{
            todoList.innerHTML += `<li id="listId${id}" class="list">
            <div>
                <p id="taskId${id}" class="task" contenteditable="true">${inputTask.value}</p>
            </div>
            <div>
                <span class="date">${months[date.getMonth()]} ${date.getDate()} ${hour}:${minute}${amOrPm}</span>
                <img src="assets/edit-regular.svg" onclick="new ChangeToDo(${id}).editList()" alt="edit">
                <img src="assets/trash-alt-regular.svg" onclick="new ChangeToDo(${id}).deleteList()" alt="delete">
            </div>
            </li>`;
            clear();
        }
        listId++;
    }
}
// Checking the task input
function check(input) {
    if(input.length === 0){
        alert("Please insert task!");
        return false;
    }
    if (input.length > 3){
        return true;
    }
    if(input.length <= 3){
        alert("Task should be longer than 3 words!")
        return false;
    }
}

// Edit or delete tasks from todo list
class ChangeToDo{
    constructor(id) {
        this.id = id;
        this.currentTask = document.getElementById(`taskId${this.id}`);
    }
    editList() {
        const editedTask = window.prompt("Edit your Task.", this.currentTask.innerText);

        // If edited task meet the requirements it will set the value from prompt.
        // Else, recall the editList function to repeat.
        check(editedTask) ? this.currentTask.innerText = editedTask : this.editList(this.id);
        const currentDescription = document.getElementById(`descriptionId${this.id}`) || false;
        const editedDescription = currentDescription ? window.prompt("Edit your Task Description.", currentDescription.innerText) : false;
        if(editedDescription) {
            currentDescription.innerText = editedDescription;
        }
    }
    deleteList(){
        if(confirm(`Are you sure you want to delete this task: ${this.currentTask.innerHTML}?`)){
            todoList.removeChild(document.getElementById(`listId${this.id}`));
        }
    }
}

// For clearing input after adding task
function clear(){
    inputTask.value = "";
    inputDescription.value = "";
}