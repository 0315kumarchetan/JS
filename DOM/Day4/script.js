/* 
let btn = document.querySelector("button");
let div = document.querySelector("div");
let main = document.querySelector("main");
let body = document.body;


btn.addEventListener('click',()=>{
    console.log("button triggered");
},true)
body.addEventListener('click',()=>{
    console.log("body triggered");
},true)
main.addEventListener('click',()=>{
    console.log("main triggered");
},true)
div.addEventListener('click',()=>{
    console.log("div triggered");
},true) */


/* btn.addEventListener("click",(events)=>{
    events.preventDefault();
    console.log(events);
}) */

/* window.addEventListener("keypress",(events)=>{
    events.preventDefault();
    console.log(events);
}) */


const form  = document.querySelector('form');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
let user = document.querySelector('.user')

let arr = [
    {
        name: "Chetan Kumar",
        email: "chetan@example.com",
        url: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        name: "Rahul Sharma",
        email: "rahul@example.com",
        url: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Aman Verma",
        email: "aman@example.com",
        url: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
        name: "Priya Singh",
        email: "priya@example.com",
        url: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Neha Gupta",
        email: "neha@example.com",
        url: "https://randomuser.me/api/portraits/women/55.jpg"
    }
];

const ui = ()=>{
        user.innerHTML="";
        arr.forEach((element ,index)=> {
            user.innerHTML+=`<div class="user_card">
                    <div class="img_box">
                        <img src=${element.url}
                        alt="image here"/>
                    </div>
                    <div class = "text">
                        <h4>Name : ${element.name} </h4>
                        <p>Email : ${element.email} </p> 
                    </div>
                    <div class="action">
                        <button class = "edit" onclick=editCard(${index})>Edit</button>
                        <button class = "del" onclick=delCard(${index})>Delete</button>
                    </div>
                </div>`
        })
    };
ui();

form.addEventListener('submit',(events)=>{
    events.preventDefault();
    let name = inp1.value;
    let email = inp2.value;
    let url = inp3.value;
    if (name.trim() === "" && email.trim() === "" && url.trim() === "") return;

    let userData = {
        "name":name,
        "email":email,
        "url":url
    }
    arr.push(userData);
    ui();
    console.log(user)
    form.reset();
})

const delCard = (idx)=>{
    arr.splice(idx,1); 
    ui();
}
const editCard = (idx)=>{
    let name = prompt("if you want to update name write updated name");
    let email = prompt("if you want to update email write updated email");
    let url = prompt("if you want to update image write updated image url");
    let obj = arr[idx];
    console.log(obj.name);
    if(!(name===null||name.trim()==="" )){
        obj.name=name;
    }
    if(!(email===null||email.trim()==="" )){
        obj.email=email;
    }
    if(!(url===null||url.trim()==="")){
        obj.url=url;
    }
    ui();
}




