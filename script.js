const textInput = document.querySelector('.textInput');
const submitBtn = document.querySelector('.submitBtn');
const toDoList = document.querySelector('.toDoList');

submitBtn.addEventListener('click', (e) =>{   
    e.preventDefault();
    addToDoItem();
})

function addToDoItem(){
    //create useable node;
    let node = document.createElement('li');
    node.setAttribute('class', 'toDoEntry');

    //create checkbox

    let checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'checkBox');
    node.appendChild(checkBox);
    
    
    //create text entry

    let nodeText = document.createTextNode(textInput.value);
    let toDoEntry = document.querySelector('.toDoEntry')
    node.appendChild(nodeText);
    toDoList.appendChild(node);
    
    //clear input back to placeholder value

    textInput.value = '';

    //create delete Button

    let delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'delBtn');
    let delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    node.appendChild(delBtn);

    //create delete function
    
    delBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        e.target.parentElement.remove();
    })

    //create checkbox

    checkBox.addEventListener('change', (e) =>{
        if(e.target.checked){
            node.style.textDecoration = "line-through";
        } else node.style.textDecoration = "none";
        
    })
    
}