// define user interface (UI) element

// call form, catch by id name
let form = document.querySelector('#task-form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('#task-ul');
let clearBtn = document.querySelector('#clear_task-btn');

// define add Even tListener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);

// define function
function addTask(e) {
	if (taskInput === '') {
		alert('Add a task');
	} else {
		// create li
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(taskInput.value + ''));
		taskList.appendChild(li);
		// add close sign
		let crossLink = document.createElement('a');
		crossLink.setAttribute('href', '#');
		crossLink.innerHTML = 'x';
		li.appendChild(crossLink);
		// empty the NEw TASK box
		// storeTasksIntoLocalStorage(taskInput.value);
		taskInput.value = '';
	}
	e.preventDefault();
}

// removeTask function
function removeTask(e) {
	if (e.target.hasAttribute('href')) {
		// pop smg for confirmation
		if (confirm('Are ypu sure?')) {
			// remove single task list
			let ele = e.target.parentElement;
			ele.remove();
			// console.log(ele);
		}
	}
}

// create clearTask function

function clearTask(e) {
	// taskList.innerHTML = '';
	while (taskList.firstChild) {
		// faster way
		taskList.removeChild(taskList.firstChild);
	}
}
