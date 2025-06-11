// Wait for the entire HTML page to load before running any JS
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and clean the input text
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add the button to the list item, then add the item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Listen for click on "Add Task" button
    addButton.addEventListener('click', addTask);

    // Listen for "Enter" key press in input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally, you can call addTask() on load to set up some default task
    // addTask(); // ← Only if you want to auto-add a task on page load
});