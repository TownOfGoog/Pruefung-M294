function GetTask() {
    
    fetch ("http://127.0.0.1:3000/auth/cookie/tasks", {
        credentials: "include"
    })
    .then((response) => response.json())
    .then((data) => renderTasks(data))}
    console.log("date")


    

document.addEventListener("DOMContentLoaded", () =>{
    //let goog = {
    //    "id": 1,
    //    "task": "adsfsdf"
    //}

    

    
        GetTask(); 
    


    const addTask = document.querySelector('#add')
    addTask.addEventListener("click", () => {
        var x = document.querySelector("#taskinput").value;
        TaskMaker({
        title: x,
    completed: false});
    })
    
    

    
    
})

function taskText(){
    const taskText = document.createElement('textarea')
}

function erledigtButton(completed, id, title){
    const erledigtButton = document.createElement("button");
    erledigtButton.innerText = "Erledigt!✅"
    erledigtButton.className= id;
    erledigtButton.onclick = function () {
        fertig(completed, id, title)
    }
    return erledigtButton
}

function editButton(completed, id, title){
    const erledigtButton = document.createElement("button");
    erledigtButton.innerText = "edit✍️"
    erledigtButton.className= id;
    erledigtButton.onclick = function () {
        
        
        edit(completed, id, title)
        
    }
    
    return erledigtButton
}

function edit(completed, id, title) {
    {
       goog = prompt('New Name')

        const data = {
    "id": parseInt(id),
    "title": goog,
    "completed": completed
    }
        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                title: goog
            })
        })
        .then((response) => response.json())
        .then((data) => {
            
        })
        location.reload();
    }

    
}

function fertig(completed, id, title) {
    if (completed) {
        console.log("making it true")
        const data = {
    "id": parseInt(id),
    "title": title,
    "completed": false
    }
        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
        })
        location.reload();
    } else {
       

        const data = {
    "id": parseInt(id),
    "title": title,
    "completed": true
    }
        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            
        })
        location.reload();
    }

    
}

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
        tableRow.append(createCell(tasks.id), createCell(tasks.title), createCell(tasks.completed))
        
        tableRow.innerText = tasks.title + ' done:' + tasks.completed
        
        tableRow.className = tasks.id


        const tablerow = document.createElement('button')
        tablerow.innerText = 'delete❌'
        tablerow.classList = tasks.id
        tablerow.onclick = function() {
            del(tasks.id)
        }

        
        const editText = document.createElement('textarea')
        editText.id = 'task-' + tasks.id + 'a'


        

        tablerow.classList.add(tasks.id);
        tableBody.appendChild(tableRow);
        tableRow.appendChild(erledigtButton(tasks.completed, tasks.id, tasks.title))
        if(tasks.completed=true){
            erledigtButton.innerHTML = 'fertig'
        }
        tableRow.innerHTML + tasks.completed
        tableRow.appendChild(tablerow);
        tableRow.appendChild(editButton(tasks.completed, tasks.id, tasks.title));
      
        
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
    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        credentials: "include",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(task)
        
    })
    location.reload();
}

function del(id) {
    
    fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`, {
        credentials: "include",
        method: 'DELETE',
        'Content-Type': 'application/json'
        
})
const loschen = document.getElementsByClassName(id)
loschen[0].remove();
}

