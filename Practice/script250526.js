//data type
//premitive/non premitive


var a = [1,2,4,5,6,2,3,4,6,12,'ko'];
let idx = a.length;
//console.log(a[idx-1]);

//console.log(typeof(a));

//array method


a.push(78);//to add element in array its just like add method in java array list
let ele = a.pop() // remove last element
//console.log(ele); we can store removed element
//a.push("hello","chetan","kumar",99);//can add multiple element

//a.unshift(56);//add element at first indx
//a.shift()//to remove from the first idx
//console.log(a);


// var arr = [15,45,78,90,78]

// arr.unshift(99);
// arr.pop();
// arr.push(89);
// arr.unshift(67);
// arr.push(89)
// arr.unshift(1);
// arr.unshift(1);

// console.log(arr)

//splice method to add element anywhere
//splice(start_index,deleteCount)//to deleteCount
//splice(start_index,count,addElemtn);
var arr = [55,88,22,99,11];

//arr.splice(0,3);//to remove

//now add using splice

// arr.splice(1,1,'ssh');//think is like a replace 
// arr.splice(0,1,5);
// console.log(arr);

//console.log(arr[2][0]);//ans 1



//console.log(arr.reverse());

//console.log(arr.sort())//it give a problem it treat element as string and sort on ther basis of first char
//console.log(arr.sort((a,b)=>a-b));//this is will give correct answer as aspected


//arr.push()

// for(let a =0 ; a<arr.length;a++){
//     console.log(arr[a]);
// }

// for(a of arr){
//     console.log(a);
// }

// var nums = [];

// for(let a = 0;a<=100;a++){
//     if(a%2==0){
//         nums.push(a);
//     }
// }
// console.log(nums);



var str = "chetan Coding"

var arr = str.split(" ");

var brr = arr[1].split('');
brr.reverse();
var str3 = brr.join('');

var str2 = brr.join(' ');

//console.log(str2);

array = ["chintu","aman","kumar","dev","comment"];

// function len(str){
//     return str.length;
// }
array.forEach(element => {
   // console.log(element);
});

var c = array.map(function(val){
    return val.length;
})
//console.log(c);

var b = array.filter(function(val){
    return val.includes('a');
})
//console.log(b);


var brr = [23,45,67,12,34];
var sum = brr.reduce(function(x,val){
    return x+val;
})

//console.log(sum);

var zrr = [12,99,46,76,5];


var ans = zrr.reduce(function(acc,val){
     return  acc+val;
},0)

console.log(ans);
