// console.log("Hello, World!");
// console.warn("This is a warning message.");
// console.error("this is an error message.");
// console.info("This is an informational message.");
// console.debug("This is a debug message.");
// console.table({ name: "Chetan", age: 30, city: "New York" });







// Symbol("id") === Symbol("id"); // false, each symbol is unique

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// id1="123"; // TypeError: Assignment to constant variable.
// id2="456"; // TypeError: Assignment to constant variable.

// console.log(id1 , id2); // false, each symbol is unique

// console.log(typeof id1); // "symbol"
// console.log(id1.description); // "id"   


// let  val = "hello"
// let b  = Boolean(val)

// console.log(b)
// console.log(typeof(b));


// let fruits = ["apple", "banana", "mango"];

// for(let x  of fruits){
//     console.log(x)
// }


// let person = { name: "Aman", age: 25 };

// for(let k in person){
//     console.log("value :" , person[k]);
// }


// let name = prompt(`enter you name`);
// console.log(name);

// var al = alert("now calc start")
// console.log(al)
// var cn = confirm("are u sure to use calc")
// console.log(cn)
// let num1 = Number(prompt("enter fisrt number"));
// let op = prompt("enter operation")
// let num2 = Number(prompt("enter second number"))
// let result;
// if(op==="+"){
//     result=num1+num2
// }else if (op=="-"){
//     result = num1-num2
// }else if(op=="*"){
//     result = num1*num2;
// }else if(op=="/"){
//     result = num2!=0?num1/num2:"Can't devide the number";
// }else{
//     result = "invalid operation";
// }

// console.log("result: ",result);



//type of funtion 

//function declaration
function a1(a){
    console.log("hello guys",a);
}

//funciton expression
var b1 = function(a){
    console.log("hello",a);
}

// a1("chetan");
// b1("kumar");


//arrow function
var c1 = (a) => {
    console.log("function c1",a)
}
//can be writtern as 
 var c1 = (a) => console.log("function c1",a)
//can be written as 
 var c2 = a =>console.log(a)


// c2("AAASSS");





function x(){//fucntion declaration
    console.log("function x");
}

var y = function(){ //function expression
    console.log("funciton y");
}

var z = () => {
    console.log("funciton z");//this is arrow function
}

var w = ()=>console.log("function w");

var v = a=>console.log("funciton v" , a);

// x();
// y();
// z();
// w();
// v("hehehehe");


// what is IIFE
// immediately invoked funciton expression

// (function(){
//     console.log("this is iife funciton")
// })();

//var is function scoped 
// and let and const is block scoped

//(()=>console.log("hello222"))();//this is also a iife function


// function aaa(){
//     console.log("aaa");
// }

// console.log(aaa());

//return type of funtion 

var a = function(){
    return "this is return value";
}

//console.log(a());

function sum(a,b){
    return a+b;
}

//console.log(sum(12,34))


//return works in every type of function but not in single line funtion 


var d = ()=> {return "hello";}//this is valid

// var d1 = ()=> return "hello" // this is not valid funtion

//console.log(d());



//pure funtion and impure funtion

//this is pure funtion give input and get outpur
// they are not doign any extra thing like console and doing something with extra var
//does not change anything outside the function 
function add(a,b){
    return a+b;
}

console.log(add(5,6));


//impure function
//why this is impure it is doing something with var a which is outside to the function 
//change thing outside the funtion here a i outside of the funciton which is a global variable
var a =10
function impureFunction(){
    a++;
    return a;
}

//console.log(impureFunction());
//console.log(impureFunction());


function greet(user = "sir",age=30){//if we dont pass any argument then "sir" assign to user 
                                    //same thing does with age
    console.log("welcome ",user,"your age is ",age);
}


// greet(undefined,40);
// greet("sahil");
// greet("ramesh",23);


//call back funtion

function callBack(val){
    console.log("in callback function" , val);
}

function main1(val , a){
    console.log("this is main function",val);
   // a(val*2);//this is call back function
}

//main(80,callBack)
//this is arrow funtion as call back 
// main(80,(z)=>{console.log("this is in arrow funtion",z)}
// )


//function as first class citizen in javascript

//function are the values like number , string etc
//then can be store in var
//they can be pass as an argument
//they can be return as value

function m(cb){
    console.log("this is main funtion=>>>>");
     return cb;
}

function side(){
    console.log("this is side funtion");
}

//m(side)();


function dada(){
    console.log("this is dada");

    function papa(){
        console.log("this is papa");

        function child(){
            console.log("this is child");
        }
        return child;
    }
    return papa;
}

dada()()()

//higher order function 
//function are those function which is return some other function read it agin from pdf 