let todo = [{
  name: 'Wake up',
  duedate: '12-01-22'},
  {name: 'Lock in',
  duedate: '06-05-2023'}];

 function putIn()
{
   const inP = document.querySelector('.js-To_do');
   const datInP = document.querySelector('.duedate');
   let dueInP = datInP.value;
    let Todo = inP.value;
  todo.push({
    name: Todo,
    duedate: dueInP});
   inP.value = '';
   datInP.value = '';
   renderTodo()
}
function renderTodo () {
   let todoHTML = '';
   todo.forEach((todoEl, index) => {
    const duedate = todoEl.duedate
    const name = todoEl.name
    Html =  `
    <div>${name}</div>
     <div>${duedate}</div>
    <div><button class="delete-btn">Delete</button></div>
  `;
    todoHTML += Html
   });

   document.querySelector('.Todo-lists').innerHTML = todoHTML;

 document.querySelectorAll('.delete-btn').forEach((El, index) => 
  {El.addEventListener('click', () => {todo.splice(index, 1);
    renderTodo()
  })});
  
/*for (let i = 0; i < todo.length; i++) {
    let todoEl = todo[i]
    const duedate = todoEl.duedate
    const name = todoEl.name
    Html =  `
    <div>${name}</div>
     <div>${duedate}</div>
    <div><button class="delete-btn">Delete</button></div>
  `;
    todoHTML += Html
   }
   console.log(todoHTML)
   document.querySelector('.Todo-lists').innerHTML = todoHTML;

   const deletb = document.querySelectorAll('.delete-btn');
  deletb.forEach((El) => {El.addEventListener('click', () => {todo.slice(i, 1);})})
  console.log(deletb)
  */
  }

 document.querySelector('.todo-butn').addEventListener('click' , () => {
  putIn();
 })
 renderTodo()