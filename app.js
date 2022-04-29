const form = document.querySelector('.addTask');
const allTask = document.querySelector('.actionList');
const areaForAdd = document.querySelector(`input[id="add"]`);

areaForAdd.addEventListener('input', function(e){
    if (e.target.value !== ""){
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === ""){
        e.target.parentNode.classList.remove('active-input');
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((areaForAdd.value) != "" ){

        createTask(areaForAdd.value.trim())
        areaForAdd.value = "";
        areaForAdd.parentNode.classList.remove('active-input');
    }

})

function createTask (text){
    const task = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type","checkbox");
    checkbox.addEventListener('click', taskDone);

    const taskContent = document.createElement('p');
    taskContent.innerText = text;

    const button = document.createElement('button');
    const img = document.createElement('img')
    img.setAttribute('src','ressources/fermer.svg');
    button.appendChild(img);
    button.addEventListener('click', deleteTask);
    
    
    task.appendChild(checkbox);
    task.appendChild(taskContent);
    task.appendChild(button);
    task.classList.add("task");

    allTask.appendChild(task);
}

function taskDone(e){
    e.target.parentNode.classList.toggle('endTask')
}

function deleteTask(e){
    e.target.parentNode.remove();
}

// A rajouter Button pour tout supprimer
// filtre de recherche
// Date d'échéance
// Importance
// Refaire Design