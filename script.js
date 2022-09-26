
const submitBtn = document.querySelector('.submitBtn')
const toDoList = document.querySelector('.toDoList')


// submitBtn.addEventListener('click', (e) => {
// })

submitBtn.addEventListener('click', (e) => {
   
    addToDo();
    e.preventDefault();

})




function addToDo(){
    let newItem = document.querySelector('.textInput')
    let node = document.createElement('li');
    let textNode = document.createTextNode(newItem.value);
    node.appendChild(textNode)
    toDoList.appendChild(node)
    newItem.value = ''
    node.addEventListener('click', (e)=> {
            node.style.textDecoration = "line-through"
    })
}

function deleteToDo(){

}