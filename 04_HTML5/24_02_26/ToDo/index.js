
    // Load saved tasks
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const saveTasks = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const addTask = () => {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (!taskText) {
        alert("Task cannot be empty");
        return;
      }

      tasks.push(taskText);
      saveTasks();
      input.value = "";
      displayTasks();
    };

    const deleteTask = (index) => {
      tasks.splice(index, 1);
      saveTasks();
      displayTasks();
    };

    const displayTasks = () => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    };

    // Show tasks on load
    displayTasks();
  