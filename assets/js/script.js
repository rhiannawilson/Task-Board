
// let modalForm = document.getElementById("modalForm");

// let addTaskBtn = document.getElementById("addTaskBtn");
// let taskTitle = $("#task-title");
// let taskDescription = $("#task-description");
// let taskDueDate = $("#task-due-date");
// let renderTaskList =$('renderTaskList')


// function addTask(Title, Description, DueDate) {
//   let newTask = { 
//     id: generateTaskID,
//     title: Title, 
//     description: Description,
//     dueDate: DueDate 
//   };
//       // Add the new task to the taskList array
//   taskList.push(newTask);

// // Log the new task for verification
// console.log(newTask);
// };

// // Get the closeBtn element that closes the modal
// let closeBtn = document.querySelector('.close');
// let myModal = document.getElementById('myModal');

// // When the user clicks on the button, open the modal
// addTaskBtn.onclick = function() {
//     modal.style.display = "inline";
// }

// // Function to close the modal
// function closeModal() {
//     modal.style.display = 'none';
// }

// // Event listener for the close button
// closeBtn.addEventListener('click', closeModal);

// // Optional: Close the modal when clicking outside of it
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         closeModal();
//     }
// });



// function createTaskCard(taskTitle, taskDescription, dueDate) {
//   let taskCardElement = $('div').addClass('task-card');
//   // Create elements for title, description, and due date
//   let titleElement = $('h3').text(task.title);
//   let descriptionElement = $('p').text(task.description);
//   let dueDateElement = $('p').text('Due Date: ' + task.dueDate);

//   // Append title, description, and due date elements to the task card
//   taskCardElement.append(titleElement, descriptionElement, dueDateElement);

//   // Convert the jQuery object to a DOM element
//   let taskCardDOMElement = taskCardElement.get(0);

//   return $(taskCardDOMElement); // Return the jQuery object
// }

//     taskList.forEach((task, index) => {
//       let taskElement = document.createElement('div');
//         taskElement.innerHTML = `
//             <h3>${task.title}</h3>
//             <p>${task.description}</p>
//             <p>${task.dueDate}</p>
//         `;
//     });


// // Todo: create a function to handle adding a new task
// function handleAddTask(event){
//   event.preventDefault(); // Prevent the default form submission behavior

//   console.log()
//  // Create a new task object with the input values
// let newTask = {
//         title: taskTitle.val(),
//         description: taskDescription.val(),
//         dueDate: taskDueDate.val() 
//     };
//     taskList.push(newTask);
//     console.log(taskList);
//     renderTaskList();
//   };
  

// // Todo: create a function to handle deleting a task
// function handleDeleteTask(event){

//  // Access the task ID or any other identifier from the event
//  let taskId = event.target.dataset.taskId; // Assuming you have a data attribute 'data-task-id' on the task element
//  console.log('Deleting Task with ID:', taskId);

//  renderTaskList();
// }

// // Todo: create a function to handle dropping a task into a new status lane
// function handleDrop(event, ui) {
//   // Access the dropped task element
//   let droppedTask = ui.draggable;

//   // Access the ID or any other identifier of the dropped task
//   let taskId = droppedTask.attr('data-task-id');

//   // Access the ID or class of the new status lane where the task is dropped
//   let newStatusLaneId = $(this).attr('id');

//   // Implement the logic to update the status of the dropped task and move it to the new status lane
//   // You can update the task's status in the data model and reposition the task element in the DOM

//   console.log('Dropped Task ID:', taskId);
//   console.log('New Status Lane ID:', newStatusLaneId);

//   // Update the UI to reflect the task's new status and position
//   // For example, you can move the task element to the new status lane in the UI

//   // After dropping the task into a new status lane, you may want to save the updated task data
//   // and re-render the task list to reflect the changes
//   saveUpdatedTaskStatus(taskId, newStatusLaneId);
//   renderTaskList();
// }

// // Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
// $(document).ready(function () {
//     // Render the task list when the page loads
//     renderTaskList();

//     // Add event listeners for specific actions (e.g., adding a task, deleting a task)
//     $('#addTaskForm').submit(handleAddTask); // Assuming you have a form with id 'addTaskForm' for adding tasks
//     // $('.delete-task-btn').click(handleDeleteTask); // Assuming you have a delete button with class 'delete-task-btn' for each task

//     // // Make lanes droppable using jQuery UI's droppable feature
//     // $('.status-lane').droppable({
//     //     drop: handleDrop // Assuming you have status lanes with class 'status-lane' where tasks can be dropped
//     // });

//     // // Make the due date field a date picker using jQuery UI's datepicker widget
//     // $('#taskDueDate').datepicker(); // Assuming you have an input field with id 'taskDueDate' for the due date of tasks
// });




























//  STEP 1 & 2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Retrieve tasks and nextId from localStorage
// const taskList = JSON.parse(localStorage.getItem("tasks"));
// const nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
// function generateTaskId() {}


// // Retrieve taskList and nextId from localStorage or initialize them if not present
// const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
// const nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// // Function to generate a unique task ID
// function generateTaskId() {
//     // Retrieve the current nextId from localStorage
//     let currentNextId = JSON.parse(localStorage.getItem('nextId')) || 1;

//     // Increment the nextId for the next task
//     currentNextId++;

//     // Update the nextId in localStorage for future use
//     localStorage.setItem('nextId', JSON.stringify(currentNextId));

//     return currentNextId;
// }

// // Set initial nextId value in localStorage
// localStorage.setItem('nextId', JSON.stringify(100)); // Set an initial value, such as 100

// // Test the generateTaskId function
// const taskId1 = generateTaskId();
// const taskId2 = generateTaskId();

// console.log("Generated Task ID 1:", taskId1);
// console.log("Generated Task ID 2:", taskId2);


// // Function to create a task card based on a task object
// function createTaskCard(task) {
//   // Construct the HTML structure for the task card
//   const taskCard = `
//       <div class="task-card">
//           <h3>${task.title}</h3>
//           <p>${task.description}</p>
//           <p>Due Date: ${task.dueDate}</p>
//           <p>Status: ${task.status}</p>
//       </div>
//   `;

//   return taskCard;
// }

// // Example task object
// const task = {
//   title: "Task 1",
//   description: "Description for Task 1",
//   dueDate: "2022-12-31",
//   status: "In Progress"
// };

// // Create a task card using the createTaskCard function
// const taskCardHtml = createTaskCard(task);
// console.log(taskCardHtml); // Output the generated task card HTML
















// //  STEP 3  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// // Function to create a task card based on a task object
// function createTaskCard(task) {
//   // Construct the HTML structure for the task card
//   const taskCard = `
//       <div class="task-card">
//           <h3>${task.title}</h3>
//           <p>${task.description}</p>
//           <p>Due Date: ${task.dueDate}</p>
//           <p>Status: ${task.status}</p>
//       </div>
//   `;

//   return taskCard;
// }

// // Example task object
// const task = {
//   title: "Task 1",
//   description: "Description for Task 1",
//   dueDate: "2022-12-31",
//   status: "In Progress"
// };

// // Create a task card using the createTaskCard function
// const taskCardHtml = createTaskCard(task);
// console.log(taskCardHtml); // Output the generated task card HTML
















// The purpose of this javascript file is to allow the user to create, add, drag and delete new tasks 
// as well as keeping up with their deadlines by including a date on each task.
// We also have included a colour coding system so the user can, at a first glance, visually see what is nearing it's deadline and what is overdue

// @author -- Rhianna Wilson
// @year -- 2024



// ** Start of JavaScript File ** //

//  a confirmation dialog box top left of page, a message welcoming the user to the task board, and providing a brief run through on how to use the page.
// then calling the confirm() function, OK and Cancel buttons. The function doesn't return any value. 
function welcomeDialog () {
  confirm(`Welcome to your task board! A place to manage all your tasks at a glance. 

Select the green ADD TASK button to create a new task, input the task details and press SUBMIT,

All new tasks will be added in the TO DO column, from there, you can DRAG your tasks around the board, depending on the status of your task.
        
              Happy Tasking! 

Additional:  
- yellow tasks = near deadline
- red tasks = task overdue`);
};


// retrieving data from localStorage, parsing it into JavaScript objects, and providing default values if the retrieved data is 'falsy' or not present.
const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// a function to generate a unique task ID for each new task added to the task management system
function generateTaskId() {
    let currentNextId = nextId;
    nextId++;
    localStorage.setItem('nextId', JSON.stringify(nextId));
    return currentNextId;
};

localStorage.setItem('nextId', JSON.stringify(100));
const taskId1 = generateTaskId();
const taskId2 = generateTaskId();

console.log("Generated Task ID 1:", taskId1);
console.log("Generated Task ID 2:", taskId2);

// generating a HTML markup for a task card, based on the information provided in the task object and make the task cards draggable
function createTaskCard(task) {
  const taskCard = `
      <div class="task-card" draggable="true">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p>Due Date: ${task.dueDate}</p>
          <p>Status: ${task.status}</p>
      </div>
  `;

  // Make the task card droppable
  $(taskCard).droppable({
      accept: '.draggable-task',
      drop: function(event, ui) {
          // Handle the drop event here
          const droppedTask = ui.draggable.data('task');
          // For example, you could move the dropped task to a new category
          droppedTask.status = 'In Progress';

               // Update the UI to reflect the change
            // For example, move the task card to the 'In Progress' section
            console.log(ui.draggable);

          $(this).append(ui.draggable);
      }
  });

  return taskCard;
};


// displays the list of tasks visually on the web page by generating HTML elements dynamically based on the data provided in the taskList array.
function renderTaskList(taskList) {
    const taskListContainer = document.getElementById("task-list-container");
    taskListContainer.innerHTML = ""; // Clear previous content

    taskList.forEach(task => {
        const taskCardHtml = createTaskCard(task);
        taskListContainer.innerHTML += taskCardHtml;
        console.log(taskCardHtml); 
    });
}


function addTask(title, description, dueDate) {
  // Generate a unique ID for the new task (example: using a function like generateTaskId())

  // Create a new task object
  let newTask = {
      id: generateTaskId(),
      title: title,
      description: description,
      dueDate: dueDate
  };

  // Add the new task to the taskList array
  taskList.push(newTask);
  console.log(newTask)
};




// TO DO
function handleDeleteTask(event) {
  // Function logic goes here
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners after the DOM has loaded
  // Example: document.getElementById('deleteButton').addEventListener('click', handleDeleteTask);
});


// // Sample task data
const tasks = [];
//   { title: "", description: "", dueDate: "" },
//   { title: "", description: "", dueDate: "" },
//   { title: "", description: "", dueDate: "" }
// ];

// Function to create and append task cards
function createTaskCard() {
  const taskContainer = document.getElementById("toDoCards");

  tasks.forEach(task => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = task.title;

      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = task.description;

      const dueDate = document.createElement("p");
      dueDate.classList.add("card-text");
      dueDate.textContent = "" + task.dueDate;

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(dueDate);

      card.appendChild(cardBody);
      taskContainer.appendChild(card);
  });
}

// Function to add event listeners and make lanes droppable
function initializeTaskBoard() {
  // Render the task list
  createTaskCard();
  // add event listener

const modal = document.getElementById('myModal');
const addTaskBtn = document.getElementById('addTaskBtn');
const title = $("#task-title");
const description = $("#task-description");
const dueDate = $("#task-due-date");
const renderTaskList =$('#renderTaskList')


function addTask(Title, Description, DueDate) {
  let newTask = { 
    id: generateTaskID (),
    title: Title, 
    description: Description,
    dueDate: DueDate 
  };
      // Add the new task to the taskList array
  taskList.push(newTask);

// Log the new task for verification
console.log(newTask);
};

// Get the closeBtn element that closes the modal
let closeBtn = document.querySelector('.close');
let myModal = document.getElementById('myModal');

// When the user clicks on the button, open the modal



addTaskBtn.onclick = function() {
  modal.style.display = 'block';
}

addTaskBtn.onclick = function() {
    modal.style.display = "inline";
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for the close button
closeBtn.addEventListener('click', closeModal);

// Optional: Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === myModal) {
        closeModal();
    }
});

  // Make lanes droppable

  // Make the due date field a date picker
  $(function () {
      $('.datepicker').datepicker({
          changeMonth: true,
          changeYear: true,
      });
  });
}

// Call the function to initialize the task board
$(document).ready(function () {
  initializeTaskBoard();
});


// ** End of JavaScript File ** //
