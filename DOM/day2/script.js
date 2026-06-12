

let btn = document.querySelector('#btn')
let bulb = document.querySelector('.bulb')

btn.addEventListener("click",()=>{
    if(bulb.classList.toggle("lightup")){
        btn.textContent = "Off"
    }else{
         btn.textContent = "On"
    }
})
