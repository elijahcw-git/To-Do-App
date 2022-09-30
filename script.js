const textInput = document.querySelector(".textInput");
const submitBtn = document.querySelector(".submitBtn");
const toDoList = document.querySelector(".toDoList");
let checked = false;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textInput.value.trim().length === 0) return;
  addToDoItem();
});

function addToDoItem() {
  const toDoItem = document.createElement("li");
  toDoItem.setAttribute("class", "toDoEntry");
  createCheckBox(toDoItem);
  getTextInput(toDoItem);
  createDeleteButton(toDoItem);
}

function getTextInput(toDoItem) {
  const nodeText = document.createTextNode(textInput.value);
  toDoItem.appendChild(nodeText);
  toDoList.appendChild(toDoItem);
  textInput.value = "";
}

function createCheckBox(toDoItem) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  toDoItem.appendChild(checkBox);
  checkBox.addEventListener("change", (e) => {
    e.target.checked
      ? (e.target.parentElement.style.textDecoration = "line-through")
      : (e.target.parentElement.style.textDecoration = "none");
  });
}

function createDeleteButton(toDoItem) {
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delBtn");
  delBtn.innerHTML = '<i class="fa fa-trash-o" style="font-size:24px"></i>';
  toDoItem.appendChild(delBtn);
  delBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.previousSibling.previousSibling.checked
      ? delBtn.parentElement.remove()
      : alert("You must check off your to do before removing!");
  });
}
