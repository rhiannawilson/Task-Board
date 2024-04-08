// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
 }


// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});



// FORM CODES 

// const formEl = $('#pizza-form');
// const firstNameEl = $('input[name="first-name"]');
// const lastNameEl = $('input[name="last-name"]');
// const emailEl = $('input[name="email"]');
// const githubEl = $('input[name="github"]');

// function handleFormSubmit(event) {
//   // Prevent the default behavior
//   event.preventDefault();

//   console.log('First Name:', firstNameEl.val());
//   console.log('Last Name:', lastNameEl.val());
//   console.log('Email:', emailEl.val());
//   console.log('GitHub:', githubEl.val());

//   // Select all checked options
//   const checkedEl = $('input:checked');
//   const selected = [];

//   // Loop through checked options to store in array
//   $.each(checkedEl, function () {
//     selected.push($(this).val());
//   });
//   console.log('Toppings: ', selected.join(', '));

//   // Clear input fields
//   $('input[type="text"]').val('');
//   $('input[type="email"]').val('');
//   $('input[type="checkbox"]').prop('checked', false);
// }

// // Submit event on the form
// formEl.on('submit', handleFormSubmit);
