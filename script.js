let inputText = document.getElementById('inputTask');
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
                                    <h3>${inputText.value}</h3>
                                    <p>${inputDescription.value}</p>
                                </div>
                                <div>
                                    <button src="/assets/edit-regular.svg" onclick="editList('${listId}')">edit</button>
                                    <button src="" onclick="deleteList('${listId})">Delete</button>
                                </div>
                            </li>`;
    listId++;
}
// Edit tasks from todo list
function editList(id){
    let currentTask = document.getElementById(`listId${id}`);
    currentTask.innerHTML = `<div>
                                 <input placeholder="Edit your Task Name" value="$>
                                 <textarea cols="30" row="5"></textarea>
                                </div>   
                            <div>
                                <button>Done</button>
                                <button>Cancel</button>
                            </div>
                                `;
}

// Delete tasks from todo list