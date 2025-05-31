console.log("HEllo")

var todoListArray = []
$(document).ready(function() 
{
    updateFrontend()
});

var count = 0
var todoListArray = 
[
     {
        id: ++count,
        todo: "Todo 1",
        completed: false
    }, 
     {
        id: ++count,
        todo: "Todo 2",
        completed: false
    }, 
     {
        id: ++count,
        todo: "Todo 3",
        completed: false
    }, 
     {
        id: ++count,
        todo: "Todo 4",
        completed: true
    }, 
]
function addTodo()
{
    console.log("Add to do")
    let todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    console.log(todoInput.value)
    // console.log(todoListArray)
    // todoListArray.push(todoInput.value)
    // console.log(todoListArray)

    if(todoInput.value.trim() == "")
    {
        alert("Todo title cannot be blank!!")
    }
    else
    {
        console.log(todoListArray)
        // todoListArray.push(todoInput.value)    
        todoListArray.push({
            id: ++count,
            todo: todoInput.value.trim(),
            completed: false
        })
        console.log(todoListArray)
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
      todolist.innerHTML = ""
    for(index =0; index<todoListArray.length; index++)
    {
        // todolist.innerHTML += "<li>"+todoListArray[index]+"</li>"

        // todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'/> <label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
        
        if(todoListArray[index].completed)

            todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")' checked/><s><label>"+todoListArray[index].todo+"</label></s><button onclick='onEditTodo("+todoListArray[index].id+")'>Edit</button><button onclick='onDeleted("+todoListArray[index].id+")'>Delete</button></li>"
        else if(editingTodoFlag == todoListArray[index].id)
        {
           todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><input id='editingtodo' value ="+todoListArray[index].todo+"></input><button onclick='onsaveTodo("+todoListArray[index].id+")'>Save</button><button onclick='onDeleted("+todoListArray[index].id+")'>Delete</button></li>" 
        }   
        else

            todolist.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><label>"+todoListArray[index].todo+"</label><button onclick='onEditTodo("+todoListArray[index].id+")'>Edit</button><button onclick='onDeleted("+todoListArray[index].id+")'>Delete</button></li>"
    }
   
}  

function onDeleted(todoID)
{
    console.log("Deleted Id", todoID)
    todoListArray = todoListArray.filter(todoObj =>
    {
        return !(todoObj.id == todoID)
    })
    updateFrontend()
}

function onEditTodo(todoID)
{
    console.log("Editing id ", todoID)
    editingTodoFlag = todoID
    updateFrontend()
}

function onsaveTodo(todoID)
{
    console.log("Save Todo", todoID) 
    let UpdatedTodotext = document.getElementById("editingtodo").value
    console.log(UpdatedTodotext)
    todoListArray = todoListArray.map(todoObj=>
    {
        if(todoID == todoObj.id)
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