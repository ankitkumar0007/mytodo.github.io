const todoForm=document.querySelector(".form-todo");
const todoinput=document.querySelector(".form-todo input[type='text']")
const todolist=document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext=todoinput.value;
    todoinput.value="";
    const newli=document.createElement("li");
    const newliinner=`<span class"text">${newtodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button></div>`
newli.innerHTML=newliinner;
todolist.append(newli);
todoinput.value="";
todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
      const targetedli=e.target.parentNode.parentNode;
      targetedli.remove();  
    }
    if(e.target.classList.contains("done")){
const lispan=e.target.parentNode.previousElementSibling;
lispan.style.textDecoration="line-through";
    }
})

})
