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

const todoList = document.getElementById('todoList')

function tempalating (arr) { // LI WE CREATED BY USING TMEPALATING ELEMENT
    let result = ''
    arr.forEach(obj => {
        result += `  <li class="list-group-item d-flex justify-content-between" id=${obj.todoId}>
                        <strong>${obj.todoItem}</strong>
    
                        <div>
                            <i class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
                            <i class="fa-solid fa-trash-can fa-2x text-danger"></i>
                        </div>
                    </li> `
    })
    todoList.innerHTML = result ;
}
tempalating(todosArr) 