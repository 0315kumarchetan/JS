
let navLeft = document.querySelector(".nav-left");
let navRight = document.querySelector(".nav-right")
let main = document.querySelector("main");
let form = document.querySelector(".form");
let mode = document.querySelector(".mode");
let mainSectionPartsList = document.querySelector(".main-section-parts-list");
let mainSectionPartsForm = document.querySelector(".main-section-parts-form");
let isDark = false;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function loadTasks() {
  let data = localStorage.getItem("tasks");
  if (data) {
    tasks = JSON.parse(data);
  }
}
function saveTasks(obj) {
    tasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function analytics(tasks){

    let result = tasks.reduce((acc,task)=>{
        if(task.status==="Pending"){
            acc.pending++;
        }else if(task.status==="Completed"){
            acc.completed++;
        }
        return acc;
    },{pending:0,completed:0})


    let analytics = document.createElement("div");
    analytics.setAttribute("class","analytics")

    let totalTask = document.createElement("div");
    totalTask.setAttribute("class","total-task")
    let tth3 = document.createElement("h3");
    tth3.textContent="TOTAL TASK : "+tasks.length;
    totalTask.append(tth3)


    let pendingTask = document.createElement("div");
    pendingTask.setAttribute("class","pending-task")
    let pth3 = document.createElement("h3");
     pth3.textContent="PENDING TASK : "+ result.pending;
     pendingTask.append(pth3);

    let completedTask = document.createElement("div");
    completedTask.setAttribute("class","completed-task")
    let cth3 = document.createElement("h3");
     cth3.textContent="COMPLETED TASK :"+result.completed;
     completedTask.append(cth3);

     analytics.append(totalTask,pendingTask,completedTask);
     

    let oldAnalytics = document.querySelector(".analytics");

    if (oldAnalytics) {
        mainSectionPartsForm.replaceChild(analytics, oldAnalytics);
    } else {
        mainSectionPartsForm.appendChild(analytics);
    }
}
function makeCard(obj){
    let card = document.createElement("div");
    card.setAttribute("class","card")
    card.setAttribute("data-id", obj.id);
    card.classList.add("card");
    let cardInner = document.createElement("div");
    cardInner.setAttribute("class","card-inner")
    cardInner.classList.add("card-inner")



    let top = document.createElement("div");
    top.setAttribute("class","top")
    top.classList.add("top");
    let status = document.createElement("h4");
    let category = document.createElement("h4");
    status.textContent=obj.status;
    category.textContent=obj.category;
    top.append(status,category);
    cardInner.append(top);
    

    let center = document.createElement("div");
    center.setAttribute("class","center")
    center.classList.add("center");
    let desc = document.createElement("p");
    desc.classList.add("desc");
    desc.textContent=obj.taskName;
    center.append(desc);
    cardInner.append(center);

    let btm = document.createElement("div");
    btm.setAttribute("class","bottom")
    btm.classList.add("bottom");
    let edit = document.createElement("button");
    edit.setAttribute("class","edit");
    let del = document.createElement("button");
    del.setAttribute("class","del");
    let complete = document.createElement("button");
    complete.setAttribute("class","complete");
    edit.textContent="Edit";
    del.textContent="Delete";
    complete.textContent="Complete";
    btm.append(edit,complete,del);
    cardInner.append(btm);

    card.append(cardInner);
    

    mainSectionPartsList.prepend(card);

}
function themes(){
    let cards = document.querySelectorAll(".card");
    if(!isDark){
        if(cards){
            cards.forEach(card => {
                card.style.background = "rgb(243, 226, 226)";
            });
        }
        mainSectionPartsForm.style.background="rgb(243, 226, 226)";
        mainSectionPartsList.style.background="rgb(229, 193, 193)";
        navLeft.style.background="rgb(229, 193, 193)";
        navRight.style.background="rgb(243, 226, 226)";
        mode.style.background="rgb(229, 193, 193)";
    }else{
        if(cards){
            cards.forEach(card => {
                card.style.background="rgb(150, 151, 145)"
            }); 
        }
        mainSectionPartsForm.style.background="rgb(150, 151, 145)";
        mainSectionPartsList.style.background="rgb(88, 88, 93)";
        navLeft.style.background="rgb(88, 88, 93)";
        navRight.style.background="rgb(150, 151, 145)";
        mode.style.background="rgb(88, 88, 93)";
    }
    isDark = !isDark;
    
}
function render(tasks){
    for(t of tasks){
        makeCard(t);
       
} 
}

loadTasks();
render(tasks);
analytics(tasks);
form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    const id = Math.random().toString(36).substring(2, 9);
    console.log(id);
    let obj  = {
        "id": id,
        "taskName":form.taskName.value,
        "category":form.category.value,
        "status":"Pending"
    }
    saveTasks(obj);
    makeCard(obj);
    analytics(tasks);
    form.reset();
})

main.addEventListener('click',(event)=>{

    
    if(event.target.classList.contains("edit")){
         let card = event.target.closest(".card");
         let id = card.dataset.id;
          for(element of tasks){
            if(element.id===id){
                let newTask = prompt("Edit task : ", element.taskName);
                element.taskName = newTask;
                break;
            }
         }
         mainSectionPartsList.innerHTML="";
         render(tasks); 
    }
    if(event.target.classList.contains("del")){
        let card = event.target.closest(".card");
         let id = card.dataset.id;
         console.log(id);
         let tempIdx;
         tasks.forEach((element,idx) => {
            if(element.id===id){
                tempIdx=idx;
            }
         });
         tasks.splice(tempIdx,1);
         localStorage.setItem("tasks",JSON.stringify(tasks));
         loadTasks();
         mainSectionPartsList.innerHTML="";
         render(tasks); 
         analytics(tasks);
    }
    if(event.target.classList.contains("complete")){
         let card = event.target.closest(".card");
         let id = card.dataset.id;
         console.log(id);
         for(t of tasks){
            if(t.id===id){
                t.status="Completed";
                 break;
            } 
         }
        localStorage.setItem("tasks",JSON.stringify(tasks));
        loadTasks();
        mainSectionPartsList.innerHTML="";
        render(tasks); 
        analytics(tasks);
         
    } 
})


mode.addEventListener('click',(event)=>{
    let cards = document.querySelectorAll(".card");
    if(!isDark){
        // if(cards){
        //     cards.forEach(card => {
        //         card.style.background = "rgb(243, 226, 226)";
        //     });
        // }
        mainSectionPartsForm.style.background="rgb(243, 226, 226)";
        mainSectionPartsList.style.background="rgb(229, 193, 193)";
        navLeft.style.background="rgb(229, 193, 193)";
        navRight.style.background="rgb(243, 226, 226)";
        mode.style.background="rgb(229, 193, 193)";
    }else{
        // if(cards){
        //     cards.forEach(card => {
        //         card.style.background="rgb(150, 151, 145)"
        //     }); 
        // }
        mainSectionPartsForm.style.background="rgb(150, 151, 145)";
        mainSectionPartsList.style.background="rgb(88, 88, 93)";
        navLeft.style.background="rgb(88, 88, 93)";
        navRight.style.background="rgb(150, 151, 145)";
        mode.style.background="rgb(88, 88, 93)";
    }
    isDark = !isDark;
})
