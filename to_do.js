
//window.addEv... ("load") means we have to wait for the page to load before the script is executed.

window.addEventListener('load', () => {
    alert("Hello! I hope you're hungry!")

    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const listElement = document.querySelector('#tasks')

   form.addEventListener('submit', (e) => {
    e.preventDefault();          //this stops it from refreshing the page when the form is submitted. by default, when a form is submitted in html, the page refreshes.
    
        const task = input.value //referring to whatever was entered in new task i.e menu

        if (!task) {
            alert("Your tray is empty");
            return;
        }
        
        const taskElement = document.createElement('div') ;
        taskElement.classList.add('task');

        const taskElContent = document.createElement('div');
        taskElContent.classList.add('content');
        

        taskElement.appendChild(taskElContent);

        const taskInput = document.createElement('input');
        taskInput.classList.add('text');
        taskInput.type = 'text';
        taskInput.value = task;
        taskInput.setAttribute('readonly', 'readonly');  //because this inout type is text, without the readonly attribute, it can be edited without restriction. check edit event listener below below

        taskElContent.appendChild(taskInput);

        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('edit');
        taskEdit.innerHTML = "Edit";

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('delete');
        taskDelete.innerHTML = "Delete";

        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        taskElement.appendChild(taskActions)

        listElement.appendChild(taskElement)

        input.value = ""; //before not, the "what's on the menu" space retains the last task added and makes you have to manually delete but this kinda refreshes the space to nothing

        taskEdit.addEventListener('click', () =>{
           if (taskEdit.innerText.toLowerCase() == "edit") {
            taskInput.removeAttribute('readonly'); //unlocks the text to be edited.
            taskInput.focus(); //automatically puts the cursor there to start typing
            taskEdit.innerText = "Save" //this changes the "edit" button to "save" when you click to edit your task
           } else {
            taskInput.setAttribute('readonly', 'readonly');
            taskEdit.innerText = "Edit";
           }

        })
        taskDelete.addEventListener('click', () => {
            listElement.removeChild(taskElement);
           })
    })
})

//add save button so you don't lose everything when you refresh.
// tip: use window.localStorage