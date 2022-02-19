 window.addEventListener('load',()=>{
    const form =document.querySelector('#new-task-form');
    const input =document.querySelector('#new-task-input');
    const date =document.querySelector('#new-task-date');
    var list_el =document.querySelector('#tasks');
    gettodo();
    const mood =document.querySelector('#mood');
    const style =document.querySelector('#style');
    const icons =document.querySelector('#icons');
    
    var task ;
    var task_edit_el=document.createElement("button");
    var task_delete_el=document.createElement("button");


// 




// Create a new list item when clicking on the "Add" button

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        task = input.value
        
        if(!task){
            alert("please enter your task");
            return false;
        }
        else{

            var task_el = document.createElement("div");
            task_el.classList.add("task");

            var task_content_el=document.createElement("div");
            task_content_el.classList.add('content');
            task_el.appendChild(task_content_el);

            var task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type="text";
            task_input_el.value=task;
            task_input_el.setAttribute('readonly','readonly');

            task_content_el.appendChild(task_input_el);






           




            //local 
            

            var task_actions_el=document.createElement("div");
            task_actions_el.classList.add('actions');

           
            task_edit_el.classList.add("edit");
            var task_edit_icon_el = document.createElement("i");
            task_edit_icon_el.classList.add("fa");
            task_edit_icon_el.classList.add("fa-edit");
            task_edit_el.appendChild(task_edit_icon_el);

          
            task_delete_el.classList.add("delete");
            var task_delete_icon_el = document.createElement("i");
            task_delete_icon_el.classList.add("fa");
            task_delete_icon_el.classList.add("fa-remove");
            task_delete_el.appendChild(task_delete_icon_el);
            //console.log(task_delete_el);
            
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
           // console.log(task_actions_el)
            task_el.appendChild(task_actions_el)
            list_el.appendChild(task_el);

            input.value="";

        
        }  
        addLocal(task);
        location.reload();
    })
    
    

    // edit task event
     // edit items ;
     list_el.addEventListener("click",editcheck);
     let old_val=task;
     function editcheck (e) {    
        const item= e.target;
        const todo_item=item.parentElement.parentElement.parentElement;
        const item_input=todo_item.firstChild.firstChild;
         
        var new_val;
         if(item.classList[1]==="fa-edit"){
                 item_input.removeAttribute("readonly");
                 old_val=todo_item.firstChild.firstChild.value;
                 item.classList.remove('fa-edit')
                 item.classList.add('fa-check');
                 
                
                 
         }
         else if(item.classList[1]=="fa-check"){
            item_input.setAttribute("readonly","readonly");
            const new_val=todo_item.firstChild.firstChild.value;
            //console.log(old_val);
            item.classList.add('fa-edit')
            item.classList.remove('fa-check');
            editlocal(old_val,new_val); 
         }
     }

  

    // delete todo ;
    list_el.addEventListener("click",deletecheck);
    function deletecheck (e) {  
        const item= e.target;
        if(item.classList[1]==="fa-remove"){
            if(confirm("آیا میخواید حذف کنید؟")){
                const todo_item=item.parentElement.parentElement.parentElement;
                const val=todo_item.firstChild.firstChild.value;
                removelocal(val);
                todo_item.remove();
            }
        }
    }
    

    //add todo to localStorage
    function addLocal(todo) { 
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }
        else{
           todos=JSON.parse(localStorage.getItem("todos"));
        }
        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos));
     }

  
    //remove todo in localStorage
    function removelocal(todo) { 
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }
        else{
           todos=JSON.parse(localStorage.getItem("todos"));
        }
        console.log(todo);
        const todoIndex= task;
        todos.splice(todos.indexOf(todoIndex),1);
        localStorage.setItem("todos",JSON.stringify(todos));

    }
    //edit todo in localStorage
    function editlocal(todo,todo_new) { 
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }
        else{
           todos=JSON.parse(localStorage.getItem("todos"));
        }
        console.log(todo);
        console.log(todo_new);
        const todoIndex= todo;
       const index=todos.indexOf(todoIndex);
       console.log(index)
       todos[index]=todo_new;
        localStorage.setItem("todos",JSON.stringify(todos));

    }

    // Get todo as localStorage
    function gettodo(){
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }
        else{
           todos=JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach(todo => {
            
            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el=document.createElement("div");
            task_content_el.classList.add('content');
            task_el.appendChild(task_content_el);

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type="text";
            task_input_el.value=todo;
            task_input_el.setAttribute('readonly','readonly');

            task_content_el.appendChild(task_input_el);

          

            const task_actions_el=document.createElement("div");
            task_actions_el.classList.add('actions');

            const task_edit_el=document.createElement("button");
            task_edit_el.classList.add("edit");
            const task_edit_icon_el = document.createElement("i");
            task_edit_icon_el.classList.add("fa");
            task_edit_icon_el.classList.add("fa-edit");
            task_edit_el.appendChild(task_edit_icon_el);

            const task_delete_el=document.createElement("button");
            task_delete_el.classList.add("delete");
            const task_delete_icon_el = document.createElement("i");
            task_delete_icon_el.classList.add("fa");
            task_delete_icon_el.classList.add("fa-remove");
            task_delete_el.appendChild(task_delete_icon_el);

            
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
           
            task_el.appendChild(task_actions_el)
            list_el.appendChild(task_el);

        });
     }

  
   

})