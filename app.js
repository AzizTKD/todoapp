var todoInput = document.getElementById("input")
var ulParent = document.getElementById("ulParent")

   ////FOR CALLING ADD FUNCTION \\\


function addTodo(){
   if (!todoInput.value) {
      alert("ENTER TODO VALUEs")
      return
  }
   // create list \\
var liElement =document.createElement("li")
  //target list \\
  var liTxt = document.createTextNode(todoInput.value)
  // appending the child \\
  liElement.appendChild(liTxt)
  console.log(liElement)

  var div =document.createElement("div")
  var editButton =document.createElement("button")
  var deleteButton =document.createElement("button")
  editButton.innerHTML = "EDIT" 
 /// Set Atributes \\\
 editButton.setAttribute("onclick" ,"editTodo(this)")


 deleteButton.setAttribute("onclick" ,"deleteTodo()")
 deleteButton.innerHTML="Delete"

 div.appendChild(editButton)
 div.appendChild(deleteButton)

 liElement.appendChild(div)

ulParent.appendChild(liElement)
input.value =""


}

// const input = document.getElementById("input")

// function addTodo(){
//    console.log(input.value)

//    const div = document.createElement("div")
//    // console.log(div);
 
//    const ul = document.createElement("ul")
//    const li = document.createElement("li")
   
// const list = ul.appendChild(li)
// const uldiv = div.appendChild(list)
// console.log(uldiv)
// }
