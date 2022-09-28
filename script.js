const textInput = document.querySelector('.textInput');
const submitBtn = document.querySelector('.submitBtn');
const toDoList = document.querySelector('.toDoList');
let checked = false;

submitBtn.addEventListener('click', (e) =>{  
    e.preventDefault();
    addToDoItem();
})

function addToDoItem(){
    const node = document.createElement('li');
    node.setAttribute('class', 'toDoEntry');
    createCheckBox(node);
    getTextInput(node);
    createDeleteButton(node);      
}

function getTextInput(node){  
    const nodeText = document.createTextNode(textInput.value);
    const toDoEntry = document.querySelector('.toDoEntry')
    node.appendChild(nodeText);
    toDoList.appendChild(node);    
    textInput.value = '';
}

function createCheckBox(node){
    const  checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'checkBox');
    node.appendChild(checkBox);
    checkBox.addEventListener('change', (e) =>{
        if(e.target.checked){
            e.target.parentElement.style.textDecoration = "line-through";
            checked = true;
        } else {
            e.target.parentElement.style.textDecoration = "none";
            checked = false;
        }       
    })
}

function createDeleteButton(node){
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'delBtn');
    delBtn.innerHTML = '<i class="fa fa-trash-o" style="font-size:24px"></i>';
    node.appendChild(delBtn);
    delBtn.addEventListener('click', (e) =>{
        e.preventDefault();    
        checked ? delBtn.parentElement.remove() : alert('You must check off your to do before removing!') 
    })
}