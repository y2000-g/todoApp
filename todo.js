
console.log("HEllo")

var todoListArray = []
const ALL = "ALL"
const INCOMPLETED = "INCOMPLETED"
const COMPLETED = "COMPLETED"
var filter = ALL
var count = 0
// var todoListArray = 
// [
    //  {
    //     id: ++count,
    //     todo: "Todo 1",
    //     completed: false
    // }, 
    //  {
    //     id: ++count,
    //     todo: "Todo 2",  
    //     completed: false
    // }, 
    //  {
    //     id: ++count,
    //     todo: "Todo 3",
    //     completed: false
    // }, 
    //  {
    //     id: ++count,
    //     todo: "Todo 4",
    //     completed: true
    // }, 
// ]
function addTodo()
{
    console.log("Add to do")
    let todoInput = document.getElementById("todoInput")

    let todoText = todoInput.value.trim();
    console.log("Todotext",todoText)

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
        
    }


    // todolist.innerHTML = ""
    // for(index =0; index<todoListArray.length; index++)
    // {
    //     console.log(index)
    //     // todolist.innerHTML += "<li>"+todoListArray[index]+"</li>"
    //     todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'/> <label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
    //     // console.log("Id", todoListArray[index].id)
    //    // todolist.innerHTML += "<li> <input type='checkbox'onclick='onTodoCompleted(this,"+todoListArray[index].id+")'/> <label>"+todoListArray[index].todo+"</label> <button>Edit</button> <button>Delete</button> </li>"
    //     console.log(todolist.innerHTML)
    // }
   updateFrontend()
   console.log(todoListArray)
}

function delTodo()
{
    console.log("Delete called")
    todoListArray.pop()
    console.log(todolist.innerHTML)
    // todolist.innerHTML = ""
    // for(index =0; index < todoListArray.length; index++)
    // {
    //     console.log(index)
    //     // todolist.innerHTML += "<li>"+todoListArray[index]+"</li>"
    //     todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'/> <label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
    //     //todolist.innerHTML += "<li id="+todoListArray[index].id+"> <input type='checkbox' onclick='onTodoCompleted(this,"+todoListArray[index].id+")'/> <label>"+todoListArray[index].todo+"</label> <button>Edit</button> <button>Delete</button> </li>"
    //     console.log(todolist.innerHTML)
    // }
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
     todolist.innerHTML = "";

    if (todoListArray.length === 0) {

        emptyMessageDiv.style.display = "block";

        moreTodoAdded.style.display = "none";

        filterDisplayDiv.style.display = "none";

        totalTodolabel.style.display = "none";

    }
    //  else if (todoListArray.length !== 0) {
    //     moreTodoAdded.style.display = "block";
    //     return;
    // }
     else{

        emptyMessageDiv.style.display = "none";

        moreTodoAdded.style.display = "block";

        filterDisplayDiv.style.display = "block";

        totalTodolabel.style.display = "block";
    }

    todolist.innerHTML = ""
    todoListArray.map((todoItem) =>
    {
        console.log("TODOItem:", todoItem.todo)
        // todolist.innerHTML += "<li>"+todoListArray[index]+"</li>"

        // todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'/> <label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
        if(filter == ALL)
        {
            if(todoItem.completed)
        {
            todolist.innerHTML += "<li id="+todoItem.id+" ><input type='checkbox'  onclick='onTodoComplete(this, "+todoItem.id+")' checked/><label id='StrikeThrough'>"+todoItem.todo+"</label><img src='edit.png' data-bs-toggle='modal' data-bs-target='#updateTodoModal' alt='Edit button'width='20' height='20' onclick='onEditTodo("+todoItem.id+")'><img src='delete.png' alt='delete button'width='20' height='20' onclick='onDeleted("+todoItem.id+")'></li>"
            return ;
        }
             
            // else if(editingTodoFlag == todoItem.id)
            // {
            //    todolist.innerHTML += "<li id="+todoItem.id+" id='listStyle'><input type='checkbox'  onclick='onTodoComplete(this, "+todoItem.id+")'/><input id='editingtodo' value ="+todoItem.todo+"></input><button onclick='onsaveTodo("+todoItem.id+")'>Save</button><img src='delete.png' alt='delete button'width='20' height='20' onclick='onDeleted("+todoItem.id+")'></li>" 
            // }  

            else 
        {
            todolist.innerHTML += "<li id="+todoItem.id+" ><input type='checkbox'  onclick='onTodoComplete(this, "+todoItem.id+")'/><label>"+todoItem.todo+"</label><img src='edit.png' alt='Edit button' width='20' height='20' data-bs-toggle='modal' data-bs-target='#updateTodoModal' onclick='onEditTodo("+todoItem.id+")'><img src='delete.png' alt='delete button'width='20' height='20' data-bs-toggle='modal' data-bs-target='#DeleteTodoModal' onclick='onDeleted("+todoItem.id+")'></li>"
            console.log( "In all",todoItem)  
        }
        }   

        else if (filter == INCOMPLETED)
        {
            if(!todoItem.completed)
            todolist.innerHTML += "<li id="+todoItem.id+" ><input type='checkbox'  onclick='onTodoComplete(this, "+todoItem.id+")'/><label>"+todoItem.todo+"</label><img src='edit.png' alt='Edit button' width='20' height='20' data-bs-toggle='modal' data-bs-target='#updateTodoModal' onclick='onEditTodo("+todoItem.id+")'><img src='delete.png' alt='delete button'width='20' height='20' data-bs-toggle='modal' data-bs-target='#DeleteTodoModal' onclick='onDeleted("+todoItem.id+")'></li>"
             console.log( "InCOMPLETED ",todoItem)  

        }   
        else
        {
            if(todoItem.completed)
            {    
            todolist.innerHTML += "<li id="+todoItem.id+" ><input type='checkbox'  onclick='onTodoComplete(this, "+todoItem.id+")' checked/><label id='StrikeThrough'>"+todoItem.todo+"</label><img src='edit.png' data-bs-toggle='modal' data-bs-target='#updateTodoModal' alt='Edit button'width='20' height='20' onclick='onEditTodo("+todoItem.id+")'><img src='delete.png' alt='delete button'width='20' height='20' onclick='onDeleted("+todoItem.id+")'></li>"
            console.log( "COMPLETED",todoItem) 
            }
            return; 
        } 
    })
        
}  


function onDeleted(todoID)
{
    console.log("Deleted Id", todoID)
    editingTodoFlag = todoID
    // todoListArray = todoListArray.filter(todoObj =>
    // {
    //     return !(todoObj.id == todoID)
    // })
    // updateFrontend()
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
    console.log("Editing id ", todoID)
    // editingTodoFlag = todoID 
    
    const todoToEdit = todoListArray.find(todoObj => todoObj.id === todoID);
    let todoUpdateText = todoToEdit.todo 
    document.getElementById("todoUpdateInput").value = todoUpdateText;
    editingTodoFlag = todoID

}

// function onsaveTodo(todoID)
// {
//     console.log("Save Todo", todoID) 
//     let UpdatedTodotext = document.getElementById("editingtodo").value
//     console.log(UpdatedTodotext)
//     todoListArray = todoListArray.map(todoObj=>
//     {
//         if(todoID == todoObj.id)
//         {
//             todoObj.todo = UpdatedTodotext 
//         }
//         return todoObj
//     })
//     editingTodoFlag = NOT_EDITING
//     updateFrontend()
// }

function onsaveTodo()
{
    let UpdatedTodotext = document.getElementById("todoUpdateInput").value
    console.log(UpdatedTodotext)
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
    console.log("checked change!", checkbox.checked)
    console.log("Todo ID", todoID)

    todoListArray = todoListArray.map((todoObj)=>
    {
        if(todoObj.id == todoID)
        {
            // console.log("FOUND", todoObj.todo)
            // if(checkbox.checked)
            //     todoObj.checked = true
            // else
            //     todoObj.checked = false

            todoObj.completed = checkbox.checked
        }
        return todoObj
    })
    console.log(todoListArray)
    updateFrontend()
}

function filterTodo(action)
{
    filter = action

    updateFrontend()
    // switch(action)
    // {
    //     case "Incomplete":
    //         break;

    //     case "Complete":
    //         break;
        
    //    case "All":
    //        break;     
    // }
}