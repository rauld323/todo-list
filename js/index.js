const clear = document.querySelector(".refresh");
const dateEle = document.getElementById("date");
const list = document.getElementById("list");
const add = document.getElementById("add");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDoList(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : " ";
  const text = `<li class="item">
        <i class="fa ${DONE} complete" id=${id}></i>
        <p class="message ${LINE}">${toDo}</p>
        <i class="fa fa-trash" job="delete" id=${id}></i>
    </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
}

//adding an item
document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    const toDo = add.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
      add.value = " ";
      id++;
    }
  }
});

//Checking and Unchecking
function completeToDo(element) {
  element.classList.toggle(CHECk);
  element.classList.toggle(UNCHECk);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done ? false : true;
}

//deleting a to-do item
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

//Click function
list.addEventListener("click", function(element) {
  let element = event.target;
  const elementJOB = even.target.attributes.job.value;
  if (elementJOB == "compelte") {
    completeToDo();
  } else if (elementJOB == "delete") {
    removeToDo(element);
  }
});
