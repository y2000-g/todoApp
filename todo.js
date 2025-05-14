console.log("HEllo")

var todoListArray = []

function addTodo()
{
    console.log("Add to do")
    let todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    console.log(todoInput.value)
    // console.log(todoListArray)
    // todoListArray.push(todoInput.value)
    // console.log(todoListArray)

    let todolist = document.getElementById("todolist")
    console.log(todolist)
    console.log(todolist.innerHTML)
    if(todoInput.value.trim() == "") // trim is not working for removing string spaces
    {
        alert("Todo title cannot be blank!!")
    }
    else
    {
        console.log(todoListArray)
        todoListArray.push(todoInput.value)
        console.log(todoListArray)
    }
    todolist.innerHTML = ""
    for(index =0; index<todoListArray.length; index++)
    {
        console.log(index)
        todolist.innerHTML += "<li>"+todoListArray[index]+"</li>"
        console.log(todolist.innerHTML)
    }
   
}