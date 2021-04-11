let inputTask = document.getElementById('inputTask');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
let inputDescription = document.getElementById('inputDescription');
let listId = 1;



addButton.addEventListener("click", ()=>{
    inputTextToList();    
});

// Adding tasks to todo list
function inputTextToList(){
    todoList.innerHTML += `<li id="listId${listId}">
                                <div>
                                    <h3 id="taskId${listId}">${inputTask.value}</h3>
                                    <p id="descriptionId${listId}">${inputDescription.value}</p>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="editList('${listId}')">edit</button>
                                    <button src="" onclick="deleteList(${listId})">Delete</button>
                                </div>
                            </li>`;
    listId++;
}
// Edit tasks from todo list
function editList(id){
    const currentList = document.getElementById(`listId${id}`);
    const currentTask = document.getElementById(`taskId${id}`);
    const currentDescription = document.getElementById(`descriptionId${id}`);
    currentList.innerHTML = `<div>
                                 <input placeholder="Edit your Task Name" value="${currentTask.innerText}" id="taskId${id}">
                                 <textarea cols="30" rows="5" id="descriptionId${id}">${currentDescription.innerText}</textarea>
                                </div>   
                            <div>
                                <button onclick="editList(${id}).done(${id})">Done</button>
                                <button>Cancel</button>
                            </div>
                                `;
    function done(id) {
        console.log("fick you");
    }
}

// Delete tasks from todo list
function deleteList(id){
    let listItemToDelete = document.getElementById(`listId${id}`);
    todoList.removeChild(listItemToDelete);
}