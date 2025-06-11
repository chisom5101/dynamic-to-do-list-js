document.addEventListener('DOMContentLoaded', function () {
  // Select the necessary DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // 👈 Corrected here

    // Attach event to remove the task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to list item and list item to the list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Allow Enter key to also add the task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});