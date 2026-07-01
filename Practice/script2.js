

// let a;
// console.log(a);


// let str = "chetan"
// console.log(typeof(str));
// let num = Number(12);
// console.log(typeof(num));
// let bool = Boolean(true);
// console.log(typeof(bool));
// let und;
// console.log(typeof(und));
// let n = null;
// console.log(typeof(n));

// let mb = 98765432108989898912222111890909090909090908888888889999999999999999999766545n;
// console.log(typeof(mb))


// let num = Number("89");
// console.log(typeof(num));

// let str = String(100);
// console.log(typeof(str));

// let bool = Boolean("true");
// console.log(typeof(bool));

//console.log("5"+2);//52
//console.log("5"-2);//3
//console.log(true+1);//2

// let num = parseInt("500px")
// console.log(typeof(num));

// console.log(12**2);

// let a = String("abAAsx");
// console.log(a.toLowerCase());

//find leap year
// function leapYear(year){
//     if((year%4===0 && year%100!==0) || year%400===0){
//         console.log(year, " is a leap year");
//     }else{
//         console.log(year, " is not a leap year");
//     }
// }

// leapYear(2023);


// let str = ""
// console.log(str==false);

// let time = new Date();
// let hour = time.getHours();

// if(hour>=5 && hour<12){
//     console.log("good morning")
// }else if(hour>12 && hour<18){
//     console.log("good evening")
// }else{
//     console.log("good night");
// }


// let num = Math.random()*9000;
// console.log(Math.floor(1000+num));


// let str = "reandom";
// console.log(str.includes("eane"));

// let str = "hello World";
// console.log(str.slice(6,11));

// let str = "mango apple"
// console.log(str.replace("apple","goa"));

// let str = "html,css,js";
// console.log(str.split(","));

// let str = " hello world hi  i    am    am kd "
// console.log(str);
// let str1 = str.trim();
// console.log(str1)
// let str2 = str1.replace(/\s+/g," ");
// console.log(str2);
 
// let str = "hi"
// console.log(str.repeat(5));
// let age=10
// let name =12;
// let str = `this is ${age} and my name is ${name} abs`;
// console.log(str);



// let num = 4.4;
// console.log(Math.round(num));

// let num = 81;
// console.log(Math.sqrt(num));

// let nums = [122,23,2,56];
// console.log(Math.min(...nums));

// let nums= [12,33,56,22,88,11,34,19,36];
// nums.sort((a,b)=>b-a);
// console.log(nums);


// let nums = Math.random()*90;
// console.log(Math.floor(10+nums));

// let nums = Number("99.99");
// console.log(nums);
// console.log(typeof(nums))

// let pi = 3.141492;
// console.log(pi.toFixed(3));

// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr);
// console.log(arr.length);

// console.log(typeof []);


function calTemp(unit1 , unit2 , temp ){
    if(unit1==="F" && unit2==="C"){
        console.log("converting farenheit to celcius")
        let c = (temp-32)/(5/9);
        return c;
    }
    else if(unit1==="C" && unit2==="F"){
        console.log("converting celcius to farenheit")
        let f = (temp*(9/5))+32;
        return f;
    }else{
         if(unit1==="F"){
             console.log("converting farenheit to Kelvin")
            let k = (temp-32)/(5/9)+273.15;
            return k; 
         }
         if(unit1==="C"){
             console.log("converting celcius to Kelvin")
            let k = temp+273.15;
            return k; 
         }
    }
}

//console.log(calTemp("C","F",32));





