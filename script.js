// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the function to add tasks
  function addTask() {
    // Get and trim the value from the input
    const taskText = taskInput.value.trim();

    // If the input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add a click event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Add button to the li, then add li to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add event listener to button click
  addButton.addEventListener('click', addTask);

  // Add event listener for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Call addTask on load if you want to prefill a task (demo purpose)
  // addTask();  // You can comment this out
});
