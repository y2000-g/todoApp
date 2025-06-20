
var todoListArray = []
const ALL = "ALL"
const INCOMPLETED = "INCOMPLETED"
const COMPLETED = "COMPLETED"
var filter = INCOMPLETED
var count = 0

function addTodo()
{

    let todoInput = document.getElementById("todoInput")

    let todoText = todoInput.value.trim();

    if(todoText === "")
    {
        alert("Todo title cannot be blank!!")
        return;
    }
    else
    {  
        todoListArray.push({
            id: ++count,
            todo: todoText,
            completed: false
        });

        todoInput.value = " "
    }
    updateFrontend()
}

function delTodo()
{
    todoListArray.pop()
    updateFrontend()
}

const NOT_EDITING = -1

var editingTodoFlag = NOT_EDITING 

function updateFrontend()
{  
    let todolist = document.getElementById("todolist")
    let emptyMessageDiv = document.getElementById("emptyMessage");
    let moreTodoAdded = document.getElementById("moreTodoAdding");
    let filterDisplayDiv = document.getElementById("filterDisplay");
    let totalTodolabel = document.getElementById("totalTodo");

        if (todoListArray.length === 0) {

            emptyMessageDiv.style.display = "block";

            moreTodoAdded.style.display = "none";

            filterDisplayDiv.style.display = "none";

            totalTodolabel.style.display = "none";

        }
        else{

            emptyMessageDiv.style.display = "none";

            moreTodoAdded.style.display = "block";

            filterDisplayDiv.style.display = "block";

            totalTodolabel.style.display = "block";
        }
    
    todolist.innerHTML = ""
    
    let filteredTodosCount = 0;

    todoListArray.map((todoItem) =>
    {
        if(filter == ALL)
        {
            document.getElementById("All").style.fontWeight = "bold";
            document.getElementById("Incomplete").style.fontWeight = "normal";
            document.getElementById("Complete").style.fontWeight = "normal";
                if(todoItem.completed)
                {
                    filteredTodosCount = todoListArray.length;
                    todolist.innerHTML += "<li class='listStyle' id="+todoItem.id+" ><input type='checkbox' id='checkboxStyle' onclick='onTodoComplete(this, "+todoItem.id+")' checked/><label id='StrikeThrough'>"+todoItem.todo+"</label><div style='float:right;'><img src='edit.png' alt='Edit button'width='20' height='20'><img src='delete.png' id='dltImg' alt='delete button' width='20' height='20' data-bs-toggle='modal' data-bs-target='#DeleteTodoModal' onclick='onDeleted("+todoItem.id+")'></div></li>"
                }
                else 
                {
                    filteredTodosCount = todoListArray.length;
                    todolist.innerHTML += "<li class='listStyle' id="+todoItem.id+" ><input type='checkbox' id='checkboxStyle' onclick='onTodoComplete(this, "+todoItem.id+")'/><label>"+todoItem.todo+"</label><div style='float:right;'><img src='edit.png' alt='Edit button' id='editImg' width='20' height='20' data-bs-toggle='modal' data-bs-target='#updateTodoModal' onclick='onEditTodo("+todoItem.id+")'><img src='delete.png' id='dltImg' alt='delete button' width='20' height='20' data-bs-toggle='modal' data-bs-target='#DeleteTodoModal' onclick='onDeleted("+todoItem.id+")'></div></li>"
                }
        }   
        else if (filter == INCOMPLETED)
        {
            document.getElementById("Incomplete").style.fontWeight = "bold";
            document.getElementById("All").style.fontWeight = "normal";
            document.getElementById("Complete").style.fontWeight = "normal";
                if(!todoItem.completed)
                {
                    filteredTodosCount = todoListArray.filter(todo => !todo.completed).length;
                    todolist.innerHTML += "<li class='listStyle' id="+todoItem.id+" ><input type='checkbox' id='checkboxStyle' onclick='onTodoComplete(this, "+todoItem.id+")'/><label>"+todoItem.todo+"</label><div style='float:right;'><img src='edit.png' id='editImg' alt='Edit button' width='20' height='20' data-bs-toggle='modal' data-bs-target='#updateTodoModal' onclick='onEditTodo("+todoItem.id+")'><img src='delete.png' id='dltImg' alt='delete button'width='20' height='20' data-bs-toggle='modal' data-bs-target='#DeleteTodoModal' onclick='onDeleted("+todoItem.id+")'></div></li>"
                } 
        }   
        else
        {
            document.getElementById("Complete").style.fontWeight = "bold";
            document.getElementById("Incomplete").style.fontWeight = "normal";
            document.getElementById("All").style.fontWeight = "normal";
                if(todoItem.completed)
                {
                    filteredTodosCount = todoListArray.filter(todo => todo.completed).length;  
                    todolist.innerHTML += "<li class='listStyle' id="+todoItem.id+" ><input type='checkbox' id='checkboxStyle' onclick='onTodoComplete(this, "+todoItem.id+")' checked/><label id='StrikeThrough'>"+todoItem.todo+"</label><div style='float:right;'><img src='edit.png' alt='Edit button' width='20' height='20'><img src='delete.png' id='dltImg' alt='delete button'width='20' height='20' data-bs-toggle='modal' data-bs-target='#DeleteTodoModal' onclick='onDeleted("+todoItem.id+")'></div></li>"
                }
        }
      
            document.getElementById("totalTodo").innerHTML = "COUNT TO-DO : " + "<label id='countBold'>"+ filteredTodosCount +"</label>"
    })
}  


function onDeleted(todoID)
{
    const tododlt = todoListArray.find(todoObj => todoObj.id === todoID);
    let todoDltText = tododlt.todo 
    document.getElementById("dltConfirm").innerHTML = "Confirm Delete Todo : "+todoDltText;
    editingTodoFlag = todoID
    
}

function confirmDelete()
{
    todoListArray = todoListArray.filter(todoObj =>
    {
        return !(todoObj.id == editingTodoFlag)
    })
        editingTodoFlag = NOT_EDITING
        updateFrontend()
}

function onEditTodo(todoID)
{    
    const todoToEdit = todoListArray.find(todoObj => todoObj.id === todoID);
    let todoUpdateText = todoToEdit.todo 
        document.getElementById("todoUpdateInput").value = todoUpdateText;
        editingTodoFlag = todoID
}

function onsaveTodo()
{
    let UpdatedTodotext = document.getElementById("todoUpdateInput").value
    todoListArray = todoListArray.map(todoObj=>
    {
        if(editingTodoFlag == todoObj.id)
        {
            todoObj.todo = UpdatedTodotext 
        }
        return todoObj
    })
    editingTodoFlag = NOT_EDITING
    updateFrontend()
}

function onTodoComplete(checkbox, todoID)
{
    todoListArray = todoListArray.map((todoObj)=>
    {
        if(todoObj.id == todoID)
        {
            todoObj.completed = checkbox.checked
        }
        return todoObj
    })
    updateFrontend()
}

function filterTodo(action)
{
    filter = action
    
    updateFrontend()
}