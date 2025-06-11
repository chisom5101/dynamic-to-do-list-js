// Run this code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 2: Define the function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // Trim the input text

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li) for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // When clicked, remove the task from the list
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Add the remove button to the task item
    li.appendChild(removeButton);

    // Add the task item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Step 3: Add event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Step 4: Add event listener for "Enter" key in input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // OPTIONAL: Add a default task on page load for testing
  // taskInput.value = 'Sample Task';
  // addTask();
});