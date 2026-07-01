/* 
let i =0;
while(i<10){

    console.log(i);
    setTimeout(()=>{
        console.log("run after 20000 millisecond");
    },2000);
    i++;
} */
/* 
function hello(q){
    console.log("hello : "+q)

}

function welcome(callback){
    console.log(callback("chetan"));
}

hello("kumar"); */
/* async function dataloa(){
    let data = await (await fetch('https://picsum.photos/v2/list')).json();
    
    console.log(data);
}

dataloa(); */

let p1 = new Promise(function(resolve , reject){

    console.log("from here promises start ...");

    let result= true;

    setTimeout(() => {
        if(result){
            console.log("promise succes");
            resolve();
        }else{
            console.log("promise failed");
            reject();
        }
    }, 2000);



})

p1.then(function(){
    console.log("promise done!")
}).catch(function(){
    console.log("promise failed 2")
}).finally(function(){
    console.log("promise end")
})


