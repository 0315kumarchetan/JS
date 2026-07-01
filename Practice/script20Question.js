
//var a = [122,3,"chetan",false,true,[12,34,5,6,78,90],null,"this is JS"];
//console.log(a);

//Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

/* a.forEach(function(a){
    if(Array.isArray(a)){
        console.log(a);
    }
}) */


//Print the first and last element of an array.

/* console.log("first ele : ",a[0]," Last Ele : ", a[a.length-1]); */


//Swap the second and second-last element using indexing.

/* let temp = a[1];
a[1]=a[a.length-2];
a[a.length-2]=temp;
console.log(a); */


/* let twoD = [
         [1,2,3],
         [4,5,6],
         [7,8,9]
        ]; */
//Create a 2D array and print all first elements of inner arrays.

/* twoD.forEach(function(a,idx){
    if(idx===0){
        console.log(a);
    }
}) */

//print left diagonal
/* twoD.forEach(function(a,idx){
    a.forEach(function(b,idxb){
        if(idx===idxb){
            console.log(twoD[idx][idxb]);
        }
    })

}) */

//print right diagonal
/* for(let i =0;i<twoD.length;i++){
    console.log(twoD[i][twoD.length-1-i]);
} */
//print left diagonal
/* for(let i =0;i<twoD.length;i++){
    console.log(twoD[i][i]);
} */

//Find the sum of all diagonal elements in a 3x3 matrix.
/* leftD=0;
rigthD=0;
for(let i =0;i<twoD.length;i++){

    let rIdx = twoD.length-1-i;
    leftD+=twoD[i][i];
    if(rIdx!==i){
        rigthD+=twoD[i][twoD.length-1-i];
    } 
}
console.log(leftD+rigthD); */


/* let a = [1,2,4,5,6];
let b =[];
a.forEach(function(a){
    b.push(a);
})
console.log(b); 

while(b.length>0){
    b.pop();
}
console.log(b.length); */


//Add one username at beginning of array.

/* let arr = ["this","is","valid","username"];
arr.unshift("chetan");
console.log(arr); */

//Insert multiple elements at beginning without replacing existing ones.

/* let arr = ["this","is","valid","username"];
arr.unshift("this","is ","the","end");
console.log(arr); */

//Remove first element repeatedly until only 2 elements remain.

/* while(arr.length>2){
    arr.shift();
}
console.log(arr); */

//Remove 2 elements from middle of array.
/* let arr = [1,2,4,5,6,7,8,9];
arr.splice(3,3,'q','w','e');
console.log(arr);
 */


//Reverse only first half of array.
// let arr = [97,11,54,22,43,44,21,55,19,66,100,77,63,99,59];
// let half = Math.floor(arr.length/2)
// arr2 = arr.slice(0,half+1);

// console.log(arr2.reverse());


//Sort numbers in ascending order.
/*  var arr = [12,34,53,34,67,82,19,28,37,81,9,11,79]
 arr.sort((a,b)=>a-b);
 console.log(arr);
 */
//Sort array so even numbers come first and odd later.
 /* var arr = [12,34,53,34,67,82,19,28,37,81,9,11,79]
 arr.sort((a,b)=>a%2-b%2);
 console.log(arr); */


 //use of slice  find first 4 element
 //var arr = [12,34,53,34,67,82,19,28,37,81,9,11,79]
 //console.log(arr.slice(0,4));

//Create a copy excluding first and last element.
/* console.log(arr.slice(1,arr.length-1)); */

/* var arr2 = [23,21,45,23,456,72];
console.log(arr.concat(arr2)); */


//Merge 3 arrays and remove duplicate values.
/*  var arr1 = [12,34,53,34,67,82,19,28,37,81,9,11,79]
 var arr2 = [23,21,45,23,456,72];
 var arr3 = [23,21,45,23,456,72];

 var finalArr = arr1.concat(arr2).concat(arr3);
 var ans=[];
 finalArr.forEach(function(a){
    if(!ans.includes(a)){
        ans.push(a);
    }
 })
 console.log(ans); */


/*  var arr = ["this ","is ","library ","and ","you ","are ","not ","allowed ","here "];
 var str = arr.join("_");
 console.log(str);
 */

 var arr1 = [12,34,53,34,67,82,19,28,37,81,9,11,79]
/*  for(let i=0;i<arr1.length;i+=2){
    console.log(arr1[i]);
 } */

/* for(var a of arr1){
    console.log(a);
}
 */

var arr2 = [...arr1];//copy content not reference save data at new location in new array
arr2[arr2.length-1]=8;
console.log(arr2);
console.log(arr1);






