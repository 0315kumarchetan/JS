/* 
abc();

function abc(){
    console.log("this is hoisted")
}

console.log(typeof(b));
var b = function(){
    console.log("this is not hoisted")
}
 */


/* function outer(){
    var user = "raja";

    function inner(){
        console.log("welcome user ",user)
        return 20;
    }

    return inner;
}


var outsider = outer();

console.log(outsider()); */

/* 
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const inc = counter();
console.log(inc());
console.log(inc());
console.log(inc());
 */


var obj = {
    "name":"chetan",
    "age":"23",
    "course":"js"
}

/* console.log(obj["age"]);

obj["age"]=25;
obj["isAdmin"]=true;

delete obj.name
console.log(obj) */
/* function countProperties(obj){
    return Object.keys(obj).length;
}


console.log(countProperties(obj)); */

/* for(var a in  obj){
    console.log(a ,":",obj[a]);
} */

/*     console.log(obj.in(age)); */

/* var nums = [1,2,45,6,7,8,9]
var arr = [90,...nums,89]
console.log(arr); */
/* 
let fruits = ["apple", "banana", "mango"];
let [firstFruit, secondFruit] = fruits;
console.log(firstFruit); */


/* var nums = [1,2,4,5,6,7,8];

function sum(num){
    return num.reduce((a,n)=>a+n,0)
  console.log(Math.max(...num));
}

console.log(sum(nums)); */

/* let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];


var newProducts = products.map(product=>{
    product.discount = product.price - ((10*product.price)/100);
    return product;
})

console.log(newProducts);
var product = { name: "Laptop", price: 50000 }
console.log("name" in product) */

/* 
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

console.log({...obj1,...obj2});

console.log(Object.entries(obj1)); */



