var btnGo = document.querySelector('.new-task-container button');
var newTaskInput = document.querySelector('.new-task-container input');
var inputText;




function prepareTaskHTML(inputText) {
    return '<div class="input-group">'+
    '<span class="input-group-btn">' +
    '<button class="btn btn-dark btn-complete-task" type="button">+</button>'+
    '</span>'+
    '<input type="text" class="form-control" value=" '+ inputText + '" readonly>' +
    '<span class="input-group-btn">'+
    '<button class="btn btn-danger btn-delete" type="button">x</button>' +
    '</span>'+
    '</div>';
    }

function toggleCompleteTask(taskBtn) {
    taskBtn.classList.toggle('btn-success');
    taskBtn.classList.toggle('btn-dark');
}

function deleteTask(taskBtn) {
    var liToDelete = taskBtn.closest('li');
    taskBtn.closest('ul').removeChild(liToDelete);
}



function addNewTask() {
    var task_li = document.createElement("li");
    document.querySelector('.tasks-container ul').appendChild(task_li);
    task_li.innerHTML = prepareTaskHTML(newTaskInput.value);
    
    // Completed/Deleted Task Buttons
    task_li.querySelector('.btn-complete-task').addEventListener('click', function(){
        toggleCompleteTask(this);
    });
    
    task_li.querySelector('.btn-delete').addEventListener('click', function(){
        deleteTask(this);
    });
    
    // Clear Input
    newTaskInput.value = "";
    newTaskInput.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback').style.display = 'none';
}

function isValid () {
    if (!newTaskInput.value) {
        newTaskInput.classList.add('is-invalid');
        document.querySelector('.invalid-feedback').style.display = 'block';
        document.querySelector('.space').style.height = '21px';
    }
    else addNewTask();
}

btnGo.addEventListener("click", isValid);
newTaskInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) isValid();
});

// Completed/Deleted Tasks

//document.querySelector('.btn-completed-task').addEventListener('click', function () {
//    this.
//});

