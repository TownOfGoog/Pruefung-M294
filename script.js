function GetTask() {
    
    fetch ("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((data) => renderTasks(data))}
    console.log("date")



document.addEventListener("DOMContentLoaded", () =>{
    let goog = {
        "id": 1,
        "task": "adsfsdf"
    }

    
    const showTasks =document.querySelector("#a")
    showTasks.addEventListener("click", () => {
        GetTask(); 
    });



    const addTask = document.querySelector('#edit')
    addTask.addEventListener("click", () => {
        TaskMaker
    })
    get
    console.log(goog.tasks)
    TaskMaker({
        title: 'gtg)',
    completed: false});
})


function createCell(text) {
    const cell = document.createElement('td')
    cell.innerText = text;
    return cell;
}


function renderTasks(tasks) {
    console.log(tasks)
    const tableBody = document.querySelector('#todolist');
    tasks.forEach((tasks) => {
        const tableRow = document.createElement('tr');
        tableRow.innerText = tasks.title +" "+ tasks.completed

        const tablerow = document.createElement('button')
        tablerow.innerText = 'delete'

        const tablebuton = document.createElement('button')
        tablebuton.innerText = 'edit'

        tablerow.classList.add(tasks.id);
        tableBody.appendChild(tableRow);
        tableRow.appendChild(tablerow);
        
    });
}

function unrenderTasks(tasks){
    console.log(tasks)
    const tableBody = document.querySelector('#todolist');
    tasks.forEach((tasks) => {
        const tableRow = document.createElement('tr');
        tableRow.innerText = tasks.title +" "+ tasks.completed
    });
}




    
  

function TaskMaker(task) {
    fetch("http://localhost:3000/tasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(task)
    })
}




