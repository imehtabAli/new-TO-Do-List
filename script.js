const taskInput = document.getElementById('taskInput');
const button = document.getElementById('addButton');
const listContainer = document.getElementById('listContainer');
const list = document.querySelectorAll('listContainer li');

button.addEventListener('click', ()=>{
    if(taskInput.value.trim() === ''){
        return;
    }
    const listInputData = document.createElement('li');
    listInputData.textContent = taskInput.value;
    listContainer.appendChild(listInputData);
    
    let removeIcon = document.createElement('span');
    removeIcon.className = "removeIcon";
    removeIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    listInputData.appendChild(removeIcon);
    taskInput.value = '';
    // saveData();
    removeIcon.addEventListener('click', ()=>{
        listContainer.removeChild(listInputData);
        // saveData();
    })
});

// Line through
listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
});

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem('data');
// }

// showTask();