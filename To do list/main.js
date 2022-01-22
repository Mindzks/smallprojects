let task = document.getElementById("task");
let addToDoBtn = document.getElementById("addTask");
var taskList = document.getElementById("toDoList");

addToDoBtn.addEventListener("click", function () {
  if (task.value.length == 0) {
    alert("input text");
  } else {
    var li = document.createElement("li");
    var deleteTask = document.createElement("a");
    deleteTask.style.textDecoration = "none";
    deleteTask.style.cursor = "pointer";
    deleteTask.classList.add("btn-danger");
    li.innerText = task.value + " ";
    deleteTask.innerText = "  \u00D7  ";
    li.appendChild(deleteTask);
    taskList.appendChild(li);
    task.value = "";
    deleteTask.addEventListener("click", function () {
      li.remove();
    });
  }
});
