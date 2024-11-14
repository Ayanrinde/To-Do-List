document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const newTask = document.createElement('li');

        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Add a click event to mark the task as completed
        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        // Create the Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent marking the task as completed

            // Prompt user to edit the task
            const newTaskText = prompt('Edit your task:', taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskSpan.textContent = newTaskText.trim();
            }
        });

        // Create the Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent marking the task as completed

            // Confirm before deleting
            const confirmDelete = confirm('Are you sure you want to delete this task?');
            if (confirmDelete) {
                taskList.removeChild(newTask);
            }
        });

        // Append elements to the new task
        newTask.appendChild(taskSpan);
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
});
