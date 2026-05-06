var cl = console.log;

let todosArr = [  //TODO ARRAY IS SHOW IN DATABASE
  {
    todoItem: "HTML",
    todoId: "2qwe12-231-231wd-ew112e",
  },
  {
    todoItem: "CSS",
    todoId: "2qwe12-231-231wd-ew112e123",
  },
  {
    todoItem: "JS ES6",
    todoId: "2qwe12-231-231wd-ew112e098",
  },
  {
    todoItem: "FLEX",
    todoId: "2qwe12-231-231wd-ew112e567",
  }
]

const todoForm = document.getElementById('todoForm')
const todoItemControl = document.getElementById('todoItem')
const todoList = document.getElementById('todoList')
const addTodoBtn = document.getElementById('addTodoBtn')
const updateTodoBtn = document.getElementById('updateTodoBtn')

function onRemove(ele) {
    // cl(ele.closest('li').id)// SHOW DELETE ELEMENGT ID
    let REMOVE_ID = ele.closest('li').id //RETURN ID OF REMOVE ELEMENTS

    let getIndex = todosArr.findIndex(todo => {
        return todo.todoId === REMOVE_ID ; // RETURN INDEX NUMBER OF REMOVE ELEMENTS
        }   
    )
    cl(getIndex)

    // splice() is a method used with arrays to add, remove, or replace elements in the original array (it modifies the array directl
    let removedTodo = todosArr.splice(getIndex,1) //REMOVE ELEMENT BY USING INDEX NUMBER
    ele.closest('li').remove()

    swal.fire ({
        title : `The todo Item ${newTodo.todoItem} ${removedTodo[0].todoItem} removed Successfully...!` ,
        timer : 3000,
        icon : 'success'
    })
    // ${removedTodo[0].todoItem} : BY USING THIS TWO FUNCTION WE WILL SHOW REMOVE ELEMENTS IN MASSEGE
}

// DEFINATION OF EDIT
let EDIT_ID 
function onEdit(ele) {
    // cl('Editted...')

    // EDIT_ID
    EDIT_ID = ele.closest('li').id
    // cl(EDIT_ID)

    // EDIT_OBJ
    let EDIT_OBJ = todosArr.find(todo =>{
       return todo.todoId === EDIT_ID
    })
    cl(EDIT_OBJ);

    // PATCH DATA IN CONTROL
    todoItemControl.value = EDIT_OBJ.todoItem

    // HIDE ADD BTN AND SHOW UPDATE BTN
    addTodoBtn.classList.add('d-none')
    updateTodoBtn.classList.remove('d-none')
}

function tempalating (arr) { // LI WE CREATED BY USING TMEPALATING ELEMENT
    let result = ''
    arr.forEach(obj => {
        result += `  <li class="list-group-item d-flex justify-content-between" id=${obj.todoId}>
                        <strong>${obj.todoItem}</strong>
    
                        <div>
                            <i class="fa-solid fa-pen-to-square fa-2x text-primary" role="button"  onClick="onEdit(this)"></i>
                            <i class="fa-solid fa-trash-can fa-2x text-danger" role="button" onClick="onRemove(this)" ></i>
                        </div>
                    </li> `
    })
    todoList.innerHTML = result ;
}
tempalating(todosArr) 

function onTodoSubmit(eve) {
  eve.preventDefault() //it pervents default value of  event
    // cl('submitted!!!');
    let newTodo = {
      todoItem : todoItemControl.value , //TODOITEMS WILL BE ADD
      todoId : "t" + Date.now().toString() // WE WILL SHOW TIME IN MELISECOND
   }    
    // cl(newTodo)

  todosArr.push(newTodo);
  // tempalating(todosArr); //IT WILL RECREATE ALL LIST ITEMS
        // WE HAVE TO CREATE A SINGLE LIST AND APPEND IT IN UL

        let li = document.createElement('li');
        li.className = `list-group-item d-flex justify-content-between`;
        li.id = newTodo.todoId
        li.innerHTML = `
                        <strong>${newTodo.todoItem}</strong>    
                        
                          <div>
                            <i class="fa-solid fa-pen-to-square fa-2x text-primary" role="button" onClick="onEdit(this)"></i>
                            <i class="fa-solid fa-trash-can fa-2x text-danger" role="button" onClick="onRemove(this)"></i>
                        </div>
                        ` 
                      
  // todoList.innerHTML = li;
  todoList.append(li)
  // todoForm.reset() //FORM WILL BE RESET

   swal.fire({
        // title : `The new Todo item <!--${newTodo.todoItem}--> ${removedTodo[0].todoItem} item added successfully...` ,
        // title : `The new Todo item ${removedTodo[0].todoItem} item added successfully...` ,
        title : `The new Todo item ${newTodo.todoItem} item added successfull...!`,
        timer : 3000,
        icon : 'success'

   })
} 

function onTodoUpdate(eve){
  cl('Updated...!')
  
  let UPDATED_ID = EDIT_ID
  // cl(UPDATED_ID)
  cl(eve)
  let UPDATED_OBJ = {
    todoItem : todoItemControl.value,
    todoId : UPDATED_ID
  }
// cl(UPDATED_OBJ)
  // UPDATED_OBJ

  // UPDATE IN DATABAStE(TODO ARRAY)
  let getIndex = todosArr.findIndex(t => {
    return t.todoId === UPDATED_ID
  })

  todosArr[getIndex] = UPDATED_OBJ 

  let li = document.getElementById(UPDATED_ID).firstElementChild 
  // let li = document.querySelector('#' + UPDATED_ID + 'strong')
  // cl(li);
  li.innerText = UPDATED_OBJ.todoItem
  todoForm.reset()

  addTodoBtn.classList.remove('d-none')
  updateTodoBtn.classList.add('d-none')

  swal.fire({
    title : `The todo Item ${UPDATED_OBJ.todoItem} is updated Successfully...!`,
    icon : `success`,
    timer : 3000
  })

}



todoForm.addEventListener('submit',onTodoSubmit)
updateTodoBtn.addEventListener('click', onTodoUpdate)