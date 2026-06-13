
let addbtn = document.querySelector("#add");
let todoList = document.querySelector(".todo-list");
let inp = document.querySelector('input');


addbtn.addEventListener("click",()=>{
    if(inp.value.trim()==="")return;
    let divele = document.createElement('div');
    divele.setAttribute("class","list");

    let h3 = document.createElement('h3');
    h3.textContent=inp.value.trim();
    divele.append(h3);

    let divInner = document.createElement('div');
    divInner.setAttribute("id","inner-div")
    let edit = document.createElement('button')
    edit.textContent="EDIT"
    edit.setAttribute("class","btn edit");

    edit.addEventListener("click",()=>{
        let newtodo = prompt("enter updated to-do");
        if(newtodo===null)return;
        if(newtodo.trim()==="")return;

        h3.textContent = newtodo;
    })

    let del = document.createElement('button')
    del.textContent="DELETE"
    del.setAttribute("class","btn del");
   

    del.addEventListener("click",()=>{
        divele.remove();
    })
    divInner.append(edit,del);
    divele.append(divInner);
    todoList.prepend(divele);
    console.log(todoList);
        inp.value=""; 
})
