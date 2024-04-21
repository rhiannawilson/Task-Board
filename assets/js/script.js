// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));
// let taskId = JSON.parse(localStorage.getItem("taskId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}


// MY CODE - Modal ----------------------------------------------------------
// // Get the modal
const modal = document.getElementById("myModal");

// // Get submit button that opens the modal
// const submitBtn = document.getElementById("submitBtn");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTitle = $("#task-title");
const taskDueDate = $("#task-due-date");
const taskDescription = $("#task-description");
const taskList = [];

function addTask(taskTitle, taskDescription, taskDueDate) {
  const newTask = { 
    title: taskTitle, 
    description: taskDescription,
    dueDate: taskDueDate 
  };
  taskList.push(newTask);
 console.log ('newTask')
};

// // Get the closeBtn element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
addTaskBtn.onclick = function() {
  modal.style.display = "block";
}

// submitBtn.onclick = function(event) {
//   event.preventDefault();
//   alert ('submitted form');
// }

// // When the user clicks on <span> (x), close the modal
 closeBtn.onclick = function() {
   modal.style.display = "none";

 }

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');


  // Create elements for the task details
  const title = document.createElement('h3');
  title.textContent = task.title;


  const description = document.createElement('p');
  description.textContent = task.description;
 
  const dueDate = document.createElement('p');
  dueDate.textContent = 'Date: ' + task.dueDate;

  
  // Append task details to the task card
  taskCard.appendChild(title);
  taskCard.appendChild(description);
  taskCard.appendChild(dueDate);

  // Return the task card element
  return taskCard;
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  const taskContainer = $('#task-container');
  taskContainer.empty(); // Clears previous content

// Create task cards and make them draggable
taskList.forEach(task => {
    const taskCardElement = createTaskCard(task); // Assuming you have a createTaskCard function

    // Make the task card draggable using jQuery UI Draggable
    // taskCardElement.draggable();

  taskContainer.append(taskCardElement);

  let toDoCards = $('#todo-cards');
  toDoCards.innerhtml = ''; // clears existing content

  taskList.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <p>${task.dueDate}</p>
    `;
});


// Todo: create a function to handle adding a new task
function handleAddTask(event){
  event.preventDefault(); // Prevent the default form submission behavior

//     // Access the input values for the new task
//     const title = document.getElementById('taskTitle').value;
//     const description = document.getElementById('taskDescription').value;
//     const dueDate = document.getElementById('taskDueDate').value;

//     // Create a new task object with the input values
    const newTask = {
        title: taskTitle.val(),
        description: taskDescription.val(),
        dueDate: taskDueDate.val() 
    };

    taskList.push(newTask);
    console.log(taskList);


    renderTaskList();
  };
  
//     // Add the new task to the task board or task list
//     // Implement the logic to add the task as per your application requirements
//     // For example, you can update the UI to display the new task in the appropriate column

//     console.log('New Task:', newTask); // For testing purposes, log the new task object

//     // Clear the input fields after adding the task
//     document.getElementById('taskTitle').value = '';
//     document.getElementById('taskDescription').value = '';
//     document.getElementById('taskDeadline').value = '';

//     // Call the renderTaskList function to render the task list


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
 // Access the task ID or any other identifier from the event
 const taskId = event.target.dataset.taskId; // Assuming you have a data attribute 'data-task-id' on the task element

 // Implement the logic to delete the task with the specified ID
 // You can remove the task from the task list or task board based on the task ID

 console.log('Deleting Task with ID:', taskId); // For testing purposes, log the task ID to be deleted

 // Update the UI to reflect the removal of the task
 // For example, you can remove the task element from the task list display

 // After deleting the task, you may want to re-render the task list to reflect the updated state
 renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  // Access the dropped task element
  const droppedTask = ui.draggable;

  // Access the ID or any other identifier of the dropped task
  const taskId = droppedTask.attr('data-task-id');

  // Access the ID or class of the new status lane where the task is dropped
  const newStatusLaneId = $(this).attr('id');

  // Implement the logic to update the status of the dropped task and move it to the new status lane
  // You can update the task's status in the data model and reposition the task element in the DOM

  console.log('Dropped Task ID:', taskId);
  console.log('New Status Lane ID:', newStatusLaneId);

  // Update the UI to reflect the task's new status and position
  // For example, you can move the task element to the new status lane in the UI

  // After dropping the task into a new status lane, you may want to save the updated task data
  // and re-render the task list to reflect the changes
  saveUpdatedTaskStatus(taskId, newStatusLaneId);
  renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Render the task list when the page loads
    renderTaskList();

    // Add event listeners for specific actions (e.g., adding a task, deleting a task)
    $('#addTaskForm').submit(handleAddTask); // Assuming you have a form with id 'addTaskForm' for adding tasks
    // $('.delete-task-btn').click(handleDeleteTask); // Assuming you have a delete button with class 'delete-task-btn' for each task

    // // Make lanes droppable using jQuery UI's droppable feature
    // $('.status-lane').droppable({
    //     drop: handleDrop // Assuming you have status lanes with class 'status-lane' where tasks can be dropped
    // });

    // // Make the due date field a date picker using jQuery UI's datepicker widget
    // $('#taskDueDate').datepicker(); // Assuming you have an input field with id 'taskDueDate' for the due date of tasks
});
