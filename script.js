// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button



const todoInput = document.querySelector(".task");
const todoButton = document.querySelector(".addBtn");
const todoList = document.querySelector(".ul");

function addTodo(/* event */) {
  // event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const datumInput = document.getElementById("date");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.innerText += "   ";
  newTodo.innerText += datumInput.value;
  // add icon
  newTodo.innerHTML +='<i class="fa fa-remove float-right"></i>';
  newTodo.classList.add("todo-item");

  // handle edit
  newTodo.addEventListener('dblclick', edititem)
  //add event
  newTodo.addEventListener('click', deltodo)

  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
//deleted functions
function deltodo(e) {  
   
    const item=e.target;
    if(item.classList[1]=="fa-remove"){
      const parent = item.parentElement.parentElement;
        parent.remove();
      
    }
}
// newTodo.addEventListener('dblclick', edititem);

// if (todoDiv === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
 

//  //create edititem function
function edititem(event)
{
  let item= event.target;
  const value = item.innerHTML;1
  let iteminput=document.createElement('input');
  iteminput.type='text';
  iteminput.value=value;
  iteminput.classList.add('edit');
  item.parentElement.appendChild(iteminput)
  
  iteminput.addEventListener('keydown', function () {
    item.textContent = iteminput.value;
  });

  iteminput.addEventListener('blur', function () {
    iteminput.remove();
  });
  
  /* event.target.remove();
  iteminput.select(); */
}


// function saveitem(event){
//   let inputvalue=event.target.value;
//   if(event.target.value.length>0&&(event.keycode===13 ~~ event.type==='click')){
//     let li=document.createElement('li');
//     li.addEventListener('click', toggledone);
//     li.addEventListener('dblclick', edititem);
//     li.textcontent= event.target.value;
//     event.target.parentNode.prepend(li);
//     event.target.remove();

//   }
// }