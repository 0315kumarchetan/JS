
//let bodychild = document.querySelector('main');
//console.log(bodychild.childNodes);//show all spaces and next line as well
//console.log(bodychild.children);//only show html tags


/* let header1 = document.querySelector("#id1");

header1.setAttribute("amitabh","bachchan");

let res  = header1.getAttribute('amitabh');
header1.removeAttribute("amitabh");
let hasAttr = header1.hasAttribute("amitabh");

let para1 = document.querySelector('p');

let res2 = para1.getAttribute('class');



console.log(hasAttr); */


/* let userCard = document.querySelector("#user_card");
console.log(userCard);


console.log(userCard.getAttribute("data-user-id"));

let userId = userCard.getAttribute("data-user-id")

userCard.dataset.userId="1234";

console.log(userCard.getAttribute("data-user-id")); */


/* let inp = document.querySelector('input');
let btn = document.querySelector('button')


btn.addEventListener('click',()=>{
    if(inp.value.trim()==="")return;
    console.log("this is from value "+inp.value);
    console.log("thi si from attribute "+inp.getAttribute('value'))
})
 */


/* let h1 = document.createElement('h1');
h1.textContent = "hello chetan";


let maindiv = document.querySelector("#mainDiv"); */

//maindiv.appendChild(h1);
//maindiv.append("hti sis is my workd space ");//used to add text

//maindiv.prepend(h1);

//main.before(h1);
//main.after(h1);

//maindiv.remove();

/* let footer = document.createElement('footer')
console.log(footer.outerHTML);
footer.textContent = "this is footer";
document.body.append(footer); */


// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector("#box2");
// let box3 = document.querySelector("#box3");

//main.insertBefore(box2,box1);
let main = document.querySelector("#main");
let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');

box1.classList.add("box","box1");
box2.classList.add("box","box2");
box3.classList.add("box","box3");


main.append(box1,box2);
main.replaceChild(box3,box1);//change with in main div or chages in child
//box1.replaceWith(box3);
//main.prepend(box3);
