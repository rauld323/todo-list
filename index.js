const clear = document.querySelector(".refresh");
const dateEle = document.getElementById("date");
const list = document.getElementById("list");
const add = document.getElementById("input");

function addToDoList(toDo) {
  const text = `<li class="item">
        <i class="fa fa-circle-thin" job="complete"></i>
        <p class="message">${toDo}</p>
        <i class="fa fa-trash" job="delete"></i>
    </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
}

console.log(addToDoList("Read the Paper"));

console.log(addToDoList("Eat Break"));

console.log(addToDoList("Shower"));
console.log(addToDoList("Get Dressed"));
