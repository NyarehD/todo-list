let inputText = document.getElementById('inputText');
const addButton = document.getElementById('addButton');
let todoList = document.getElementById('todoList');

inputText.addEventListener("input", text => {
    document.getElementById("pp").innerHTML = text.target.value;
    console.log(text);
})