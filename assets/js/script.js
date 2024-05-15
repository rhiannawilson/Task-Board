// The purpose of this javascript file is to allow the user to create, add, drag and delete new tasks 
// as well as keeping up with their deadlines by including a date on each task.
// We also have included a colour coding system so the user can, at a first glance, visually see what is nearing it's deadline and what is overdue

// @author -- Rhianna Wilson
// @year -- 2024


// ** Start of JavaScript File ** //

//  a confirmation dialog box top left of page, a message welcoming the user to the task board, and providing a brief run through on how to use the page.
// then calling the confirm() function, OK and Cancel buttons. The function doesn't return any value. 
function welcomeDialog() {
  confirm(`Welcome to your task board! A place to manage all your tasks in one place. Happy Tasking! 

  1. Select the green ADD TASK button to create a new task
  2. Enter the details of your task
  3. All new tasks will be added in the TO DO column
  4. DRAG your tasks to the appropriate status column

  Additional:  
  - yellow tasks = near deadline
  - red tasks = task overdue`)
};


// Retrieving data from localStorage, parsing it into JavaScript objects, and providing default values if the retrieved data is falsy or not present.
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// A function to generate a unique task ID for each new task added to the task management system
function generateTaskId() {
 // if nextId does not exist in localStorage, set it to 1
 if (nextId === null) {
  nextId = 1;
  // otherwise, increment it by 1
} else {
  nextId++;
}
// save nextId to localStorage
localStorage.setItem('nextId', JSON.stringify(nextId));
return nextId;
};


// generating a HTML markup for a task card, based on the information provided in the task object and make the task cards draggable
function createTaskCard(task) {
  // create card elements
  const taskCard = $('<div>')
    .addClass('card w-75 task-card draggable my-3')
    .attr('data-task-id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.description);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);

  // set card background color based on due date
  if (task.dueDate && task.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
    if (now.isSame(taskDueDate, 'day')) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate)) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }
  }

  // append card elements
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  return taskCard;

};


// displays the list of tasks visually on the web page by generating HTML elements dynamically based on the data provided in the taskList array.
function renderTaskList() {
  if (!tasks) {
    tasks = []
  }
  //empty existing task cards
  const toDoList = $('#todo-cards')
  toDoList.empty();
  const inProgressList = $('#in-progress-cards')
  inProgressList.empty();
  const doneList = $('#done-cards')
  doneList.empty();
  // looping through the tasks and creating task cards for each of the statuses - targets the status
  for (let task of tasks) {
    if (task.status === 'to-do') {
      toDoList.append(createTaskCard(task))
    } else if (task.status === 'in-progress') {
      inProgressList.append(createTaskCard(task))
    } else if (task.status === 'done') {
      doneList.append(createTaskCard(task))
    }

  }
    // make task cards draggable
  $('.draggable').draggable({
    opacity: 0.7,
    zIndex: 100,
    // function to clone the card being dragged so that the original card remains in place
    helper: function (e) {
      // check of the target of the drag event is the card itself or a child element if it is the card itself, clone it, otherwise find the parent card and clone that
      const original = $(e.target).hasClass('ui-draggable')
        ? $(e.target)
        : $(e.target).closest('.ui-draggable');
      return original.clone().css({
        maxWidth: original.outerWidth(),
      });
    },
  });
};

// this function handles a new task comes from jquery ready below - this function was originally called addTask!! 
function submitTask(event) {
  event.preventDefault()
  //create new task
  let newTask = {
    id: generateTaskId(),
    title: $('#taskTitle').val(),
    description: $('#taskDescription').val(),
    dueDate: $('#taskDueDate').val(),
    status: 'to-do',
  };

  // Add the new task to the tasks array - this is a method()
  tasks.push(newTask);
  // send it to localstorage 
  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderTaskList()
  $('#taskTitle').val('');
  $('#taskDescription').val('');
  $('#taskDueDate').val('');
};

// function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  // get the task id and new status from the event
  const taskId = ui.draggable[0].dataset.taskId;
  const newStatus = event.target.id;

  for (let task of tasks) {
    // update the task status of the dragged card
    if (task.id === parseInt(taskId)) {
      task.status = newStatus;
    }
  }
  // save and render
  localStorage.setItem('tasks', JSON.stringify(task));
  renderTaskList();
};



// re-write this 
function handleDeleteTask(event) {

};

// 135 - 155 complete !!
// Event listeners - jquery syntax
$(document).ready(function () {
  // render the task list
  renderTaskList();

  // Event Listener 
  $('#taskForm').on('submit', submitTask)

  //make lanes droppable 
  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });

  //make due date field a date picker 
  $('#taskDueDate').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});


// ** End of JavaScript File ** //