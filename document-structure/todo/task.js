const input = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let tasksRemove;
let tasks;

if (localStorage.length !== 0){
    tasks = localStorage.getItem('tasks').split(' ');
    for(let i=0;i<tasks.length;i++){
        pastHtml(tasks[i]);
    }
    tasksRemove = document.querySelectorAll('.task__remove');
}else{
    tasks = [];    
}
taskAdd.addEventListener('click', addTask);
taskAdd.addEventListener('keydown',addTask);

function pastHtml(text){
    tasksList.innerHTML+=
    `<div class="task">
        <div class="task__title">
            ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    
}

function addTask(event) {
    event.preventDefault();
    if(input.value.length !== 0 || (event.target.keyCode === 'Enter' && input.value.length !== 0)){
        const text = input.value;
        tasks.push(text);
        localStorage.setItem('tasks',tasks.join(' '));
        pastHtml(text);
       input.value = '';
       tasksRemove =  document.querySelectorAll('.task__remove');
       deleteTask();


    }

}

function deleteTask(){
    if(tasksRemove !== undefined){
        tasksRemove.forEach(element => {
            element.addEventListener('click',(event)=>{
                event.preventDefault();
                const text = element.previousSibling.previousSibling.textContent;
                const newText = text.replace(/[^a-zA-Z0-9]/g, "");
                newText.trim();
                console.log(newText);
                if(tasks.indexOf(newText) !== -1 && tasks.length>2){
                    tasks.splice(tasks.indexOf(newText),1);
                    console.log(tasks);
                    localStorage.setItem('tasks',tasks.join(' '));
                }else if(tasks.length === 2 && tasks.indexOf(newText) !==-1){
                    tasks.splice(tasks.indexOf(newText),1);
                    localStorage.setItem('tasks',tasks[0]);
                }else{
                    localStorage.clear();
                }
                tasksList.removeChild(element.parentElement);
            })        
        });
    }
}

deleteTask();