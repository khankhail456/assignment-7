function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}


let count = 0;

function increase() {
  count++;
  document.getElementById("count").textContent = count;
}

function decrease() {
  count--;
  document.getElementById("count").textContent = count;
}





let isFirstImage = true;

function changeImage() {
  const img = document.getElementById("myImage");

  if (isFirstImage) {
    img.src = "https://picsum.photos/200";
    isFirstImage = false;
  } else {
    img.src = "https://picsum.photos/300";
    isFirstImage = true;
  }
}