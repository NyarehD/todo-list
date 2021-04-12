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
    todoList.innerHTML += `<li id="listId${id}">
                                <div>
                                    <h3 id="taskId${id}">${inputTask.value}</h3>
                                    <p id="descriptionId${id}">${inputDescription.value}</p>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="edit(${id})">edit</button>
                                    <button src="" onclick="deleteList(${id})">Delete</button>
                                </div>
                            </li>`;
    listId++;
}
// // Edit tasks from todo list
// function editList(id){
//     const currentList = document.getElementById(`listId${id}`);
//     const currentTask = document.getElementById(`taskId${id}`);
//     const currentDescription = document.getElementById(`descriptionId${id}`);
//
//     function editTask(id) {
//         currentList.innerHTML = `<div>
//                                  <input placeholder="Edit your Task Name" value="${currentTask.innerText}" id="taskId${id}">
//                                  <textarea cols="30" rows="5" id="descriptionId${id}">${currentDescription.innerText}</textarea>
//                                 </div>
//                             <div>
//                                 <button onclick="done(${id})">Done</button>
//                                 <button onclick="editList(${id})(${id})">Cancel</button>
//                             </div>
//                                 `;
//     }
//
//     function cancel(id) {
//         currentList.innerHTML = `<li id="listId${id}">
//                                 <div>
//                                     <h3 id="taskId${id}">${currentTask.value}</h3>
//                                     <p id="descriptionId${id}">${currentDescription.value}</p>
//                                 </div>
//                                 <div>
//                                     <button src="/assets/edit-regular.svg" onclick="editList(${id})">edit</button>
//                                     <button src="" onclick="deleteList(${id})">Delete</button>
//                                 </div>
//                             </li>`;
//     }
// }
// function done(id) {
//
// }

class editThing{
    constructor(id) {
        this.currentList = document.getElementById(`listId${id}`);
        this.currentTask = document.getElementById(`taskId${id}`);
        this.currentDescription = document.getElementById(`descriptionId${id}`);
        this.id = id;
    }
    editTask() {
        this.currentList.innerHTML = `<div>
                                 <input placeholder="Edit your Task Name" value="${this.currentTask.innerText}" id="taskId${this.id}">
                                 <textarea cols="30" rows="5" id="descriptionId${this.id}">${this.currentDescription.innerText}</textarea>
                                </div>   
                            <div>
                                <button onclick="">Done</button>
                                <button id="cancelId${this.id}">Cancel</button>
                            </div>
                                `;
    }
    cancel() {
        this.currentList.innerHTML = `<li id="listId${this.id}">
                                <div>
                                    <h3 id="taskId${this.id}">${this.currentTask.value}</h3>
                                    <p id="descriptionId${this.id}">${this.currentDescription.value}</p>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="edit(${this.id})">edit</button>
                                    <button src="" onclick="deleteList(${this.id})">Delete</button>
                                </div>
                            </li>`;
    }

}
function edit(id) {
    let aha = new editThing(id);
    aha.editTask();
    document.getElementById(`cancelId${id}`).addEventListener("click", aha.cancel);
}











// Delete tasks from todo list
function deleteList(id){
    let currentTask = document.getElementById(`taskId${id}`);
    if(confirm(`Are you sure you want to delete this task: ${currentTask.innerHTML}?`)){
        todoList.removeChild(document.getElementById(`listId${id}`));
    }
}