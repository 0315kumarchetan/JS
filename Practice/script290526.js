var obj = {
    "add":(a=0,b=0)=>a+b,
    "sub":(a=0,b=0)=>a-b,
    "mul":(a=0,b=0)=>a*b,
    "div":(a=0,b=0)=>b===0?"can't divide":a/b
};

/* var sayHi = function(){
    console.log("hi")
}

function callTwice(fn){
    fn();
    fn();
}

//callTwice(sayHi);


function greet(){
    console.log("greet function")
    return function(){
        console.log("this is return function")
    }
}

greet()(); */


// var a = function welcome(name){
//     console.log("welcome dev : "+name);
// }

// function sayhi(name,a){//here a is call back function
//     a(name);
// }

// sayhi("chetan",a);



/* (function() {
    console.log("I run immediately!");
})(); */

/* let fruits = ["apple", "banana", "mango"];
console.log(fruits.at(-3));  */

// map give changed array of same length
/* let arr = ["this","is","banana","here"];
let arr2 = arr.map(a=>a.toUpperCase());
console.log(arr2); */

var nums = [1,2,4,5,6,7,8,9,10];

//this is the use of filter method
//console.log(nums.filter(a=>a%2===0));

var ans = nums.reduce((a,n)=>a+n,0);
console.log(ans);
