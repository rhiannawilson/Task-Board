// The purpose of this javascript file is to allow the user to create, add, drag and delete new tasks 
// as well as keeping up with their deadlines by including a date on each task.
// We also have included a colour coding system so the user can, at a first glance, visually see what is nearing it's deadline and what is overdue

// @author -- Rhianna Wilson
// @year -- 2024


// ** Start of JavaScript File ** //

//  a confirmation dialog box top left of page, a message welcoming the user to the task board, and providing a brief run through on how to use the page.
// then calling the confirm() function, OK and Cancel buttons. The function doesn't return any value. 
function welcomeDialog () {
    confirm(`Welcome to your task board! A place to manage all your tasks in one place. Happy Tasking! 

  1. Select the green ADD TASK button to create a new task
  2. Enter the details of your task
  3. All new tasks will be added in the TO DO column
  4. DRAG your tasks to the appropriate status column

  Additional:  
  - yellow tasks = near deadline
  - red tasks = task overdue`);
};

//  const modal = document.getElementById('myModal');
 const addTaskBtn = document.getElementById('addTaskBtn');
 const title = $("#task-title");
 const description = $("#task-description");
 const dueDate = $("#task-due-date");
 const toDoCards = $("#to-do-cards");
// const renderTaskList = ('renderTaskList');


// Retrieving data from localStorage, parsing it into JavaScript objects, and providing default values if the retrieved data is falsy or not present.
let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Setting default value if nextId is falsy or not present in localStorage
if (!nextId) {
  nextId = 100; // Set the initial value to 100
  localStorage.setItem('nextId', JSON.stringify(nextId)); // Store the initial value in localStorage
};

// A function to generate a unique task ID for each new task added to the task management system
function generateTaskId() {
  let currentNextId = nextId;
  nextId++;
  localStorage.setItem('nextId', JSON.stringify(nextId)); // Update the nextId in localStorage
  return currentNextId;
};

const taskId1 = generateTaskId();
const taskId2 = generateTaskId();

console.log("Generated Task ID 1:", taskId1);
console.log("Generated Task ID 2:", taskId2);



// generating a HTML markup for a task card, based on the information provided in the task object and make the task cards draggable
function createTaskCard(task) {
  let taskCard = `
     <div class="taskCard" draggable="true">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p>Due Date: ${task.dueDate}</p>
          <p>Status: ${task.status}</p>
     </div>
   `;

   return taskCard; // Return the generated HTML markup
};


// Function to create and append task cards
// function createTaskCard(task) {
//   const taskListContainer = document.getElementById("toDoCards");

//   const card = document.createElement("div");
//   card.classList.add("card", "mb-3");

//  const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

// const title = document.createElement("h5");
//  title.classList.add("card-title");
//  title.textContent = task.title;

//  const description = document.createElement("p");
//   description.classList.add("card-text");
//   description.textContent = task.description;

//   const dueDate = document.createElement("p");
//  dueDate.classList.add("card-text");
//  dueDate.textContent = "" + task.dueDate;

//  cardBody.appendChild(title);
//   cardBody.appendChild(description);
//  cardBody.appendChild(dueDate);

//   card.appendChild(cardBody);
// taskContainer.appendChild(card);

// return taskCard;
// };


//////////////////////////// TEST CODE  ////////////////////////////
// The following sample task object, helped me to test the above createTaskCard(task) function to see if it was working. 

// // Define a sample task object
// const sampleTask = {
//   title: "Sample Task",
//   description: "This is a sample task description.",
//   dueDate: "2024-05-10",
//   status: "Incomplete"
// };

// // Call the createTaskCard function with the sample task object
// const taskCardMarkup = createTaskCard(sampleTask);

// // Log the generated HTML markup to the console
// console.log(taskCardMarkup);
//////////////////////////// TEST CODE  ////////////////////////////






// displays the list of tasks visually on the web page by generating HTML elements dynamically based on the data provided in the taskList array.
function renderTaskList(taskList) {
   const taskListContainer = $(".task-list-container");
  taskListContainer.innerHTML = ""; // Clear previous content

   taskList.forEach(task => {
      const taskCardHtml = createTaskCard(task);
      $(`#${task.status}-cards`).append(createTaskCard(task));
      applyStyle(task.id);
  });
 };


//   // Make the task card droppable
//   $(taskCard).droppable({
//       accept: '.draggable-task',
//       drop: function(event, ui) {
//           // Handle the drop event here
//           const droppedTask = ui.draggable.data('task');
//           // For example, you could move the dropped task to a new category
//           droppedTask.status = 'In Progress';

//                // Update the UI to reflect the change
//             // For example, move the task card to the 'In Progress' section
//             console.log(ui.draggable);

//             $(ui.draggable).appendTo($(this));

//       }
//   });

//   return taskCard;
// };


const tasks = []; // Define the task list globally

function addTask(title, description, dueDate) {
  let newTask = {
    id: generateTaskId(),
    title: title,
    description: description,
  };


  // Add the new task to the tasks array
 tasks.push(newTask);
   // Log the new task for verification
    console.log(tasks);
 };



 

// // TO DO
// function handleDeleteTask(event) {
//   // Function logic goes here
// }


// Todo: create a function to handle dropping a task into a new status lane
 function handleDrop(event, ui) {

 };


// // Event listeners
document.addEventListener('DOMContentLoaded', function() {
//   // Add event listeners after the DOM has loaded
//   // Example: document.getElementById('deleteButton').addEventListener('click', handleDeleteTask);
 });



const modal = document.getElementById('myModal');

// Get the closeBtn element that closes the modal
let closeBtn = document.querySelector('.close');
let myModal = document.getElementById('myModal');

// When the user clicks on the button, open the modal

addTaskBtn.onclick = function() {
  modal.style.display = 'block';
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

  

  // // Make the due date field a date picker
  // $(function () {
  //     $('.datepicker').datepicker({
  //         changeMonth: true,
  //         changeYear: true,
  //     });
  // });

// // Call the function to initialize the task board
 $(document).ready(function () {
 });


// ** End of JavaScript File ** //



















































































































































