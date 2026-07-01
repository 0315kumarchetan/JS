let loggedInUser = JSON.parse(localStorage.getItem("user"));
let userList = JSON.parse(localStorage.getItem("userList"))||[];

console.log(loggedInUser);
let uName1 = document.querySelector("#uName1");
uName1.textContent=loggedInUser.username;
let uName2 = document.querySelector("#uName2");
uName2.textContent=loggedInUser.username;


const transactionBtn = document.querySelector("#transactionBtn");
const formDiv = document.querySelector(".form");

const closeBtn = document.querySelector("#close");
const createTxn = document.querySelector("#createTxn");
const body = document.body;
const mode = document.querySelector("#mode button")
const reset = document.querySelector("#reset button")
const logout = document.querySelector("#logout button")
const searchText = document.querySelector("#search-text")
const type = document.querySelector("#type")

let main = document.querySelector("main");
let main2 = document.getElementById("main2");
let dashBtn = document.getElementById("dashBtn");
let settingsBtn = document.getElementById("settingsBtn");
main.style.display = "block";
main2.style.display = "none";
let editId = null;
let myChart;


function updateCard(userId){
  let cb=0;
  let ti=0;
  let te=0;
  let tt=0;
  let transactionsList = JSON.parse(localStorage.getItem("transactions")) || [];
  let tbody = document.querySelector("tbody");
  tbody.innerHTML="";
  for(transaction of transactionsList){
    console.log(userId +" , "+transaction.userId);
    
    if(userId===transaction.userId){
      let currency  = JSON.parse(localStorage.getItem("user")).cur;
      let txnColor = "";
      
      if(transaction.type==="INCOME"){
        ti+=transaction.amount;
        cb+=transaction.amount;
        txnColor="rgb(55, 188, 113);";
      }else{
        te+=transaction.amount;
        cb-=transaction.amount;
        txnColor="rgb(227, 32, 61);";
      } 
      tt++;


        tbody.innerHTML+=`  
                              <tr>
                                <td>${transaction.date}</td>
                                <td>${transaction.description}</td>
                                <td>${transaction.category}</td>
                                <td style="color: ${txnColor}" ><span>${currency} </span> ${transaction.amount}</td>
                                <td class="td-btn">
                                  <button onclick= "updatetxn('${transaction.id}')" class="edit-btn" data-id="${transaction.id}"><i class="fa-solid fa-pen" style="color: rgb(116, 192, 252);"></i></button>
                                   <button class="del-btn" data-id="${transaction.id}"><i class="fa-solid fa-trash-can" style="color: rgb(247, 2, 2);"></i></button>
                                </td>
                               </tr> 
        `
    }
  
  }

  let card1 = document.querySelector("#card1");
    let card2 = document.querySelector("#card2");
      let card3 = document.querySelector("#card3");
        let card4 = document.querySelector("#card4");

         card1.innerHTML= `
         <div class="card-inside">
                        <i class="fa-solid fa-building-columns" style="color: rgb(46, 79, 246);"></i>
                        <p>Current balance</p>
                        <h2> ${loggedInUser.cur}${cb} </h2>
                    </div>
          
        `
         card2.innerHTML= `
          <div class="card-inside">
                        <i class="fa-solid fa-arrow-trend-down" style="color: rgb(227, 32, 61);"></i>
                        <p>Expenses</p>
                        <h2>${loggedInUser.cur}${te} </h2>
                    </div>
          
        `
         card3.innerHTML= `
          <div class="card-inside">
                        <i class="fa-solid fa-arrow-trend-up" style="color: rgb(55, 188, 113);"></i>
                        <p>Income</p>
                        <h2> ${loggedInUser.cur}${ti} </h2>
                    </div>
          
        `
         card4.innerHTML= `
         <div class="card-inside">
                        <i class="fa-solid fa-money-bill-transfer" style="color: rgb(72, 125, 216);"></i>
                        <p>Transactions</p>
                         <h2> ${tt} </h2>
                    </div>
         
        `
        
        mychart(te,ti);
  
        

}

function removeData(userId){
  let cb=0;
  let ti=0;
  let te=0;
  let tt=0;
  let idx=0;
  let transactionsList = JSON.parse(localStorage.getItem("transactions")) || [];
  transactionsList = transactionsList.filter(item => item.userId!==userId); 
  let tbody = document.querySelector("tbody");
        tbody.innerHTML="";
  let card1 = document.querySelector("#card1");
    let card2 = document.querySelector("#card2");
      let card3 = document.querySelector("#card3");
        let card4 = document.querySelector("#card4");

        card1.innerHTML= `
         <div class="card-inside">
                        <i class="fa-solid fa-building-columns" style="color: rgb(46, 79, 246);"></i>
                        <p>Current balance</p>
                        <h2> ${loggedInUser.cur} ${cb} </h2>
                    </div>
          
        `
         card2.innerHTML= `
          <div class="card-inside">
                        <i class="fa-solid fa-arrow-trend-down" style="color: rgb(227, 32, 61);"></i>
                        <p>Expenses</p>
                        <h2>${loggedInUser.cur} ${te} </h2>
                    </div>
          
        `
         card3.innerHTML= `
          <div class="card-inside">
                        <i class="fa-solid fa-arrow-trend-up" style="color: rgb(55, 188, 113);"></i>
                        <p>Income</p>
                        <h2> ${loggedInUser.cur} ${ti} </h2>
                    </div>
          
        `
         card4.innerHTML= `
         <div class="card-inside">
                        <i class="fa-solid fa-money-bill-transfer" style="color: rgb(72, 125, 216);"></i>
                        <p>Transactions</p>
                         <h2>${loggedInUser.cur} ${tt} </h2>
                    </div>
         
        `

        localStorage.setItem("transactions",JSON.stringify(transactionsList))
        mychart(te,ti);

}

function mychart(te,ti){
  const ctx = document.getElementById('myChart').getContext('2d');
   myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Income vs Expenses'],
        datasets: [
          {
           label: 'Expenses',
            data: [te],
            backgroundColor:'red',
            borderWidth: 1
          },
          { label: 'Income', data: [ti], backgroundColor: '#166534', borderRadius: 4  }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false ,
        scales: {
            y: {
                beginAtZero: true
            }
        },
         plugins: {
            title: {
                display: true,
               
                font: {
                    size: 28,      
                    weight: 'bold', 
                    family: 'Arial'
                },
                padding: {
                    top: 10,
                    bottom: 10

                }

            }
        }
    }
});
 
}
transactionBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});
createTxn.addEventListener("submit", (e) => {
  event.preventDefault();
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  let type = e.target[0].value;
  let description = e.target[1].value;
  let amount =Number(e.target[2].value);
  let date = e.target[3].value;
   let category = e.target[4].value;
   let userId = loggedInUser.id;
  if (
    type.trim() === "" ||
    description.trim() === "" ||
    date === ""||
    category === ""
  ) {
    alert("please fill all the fields");
    return;
  }

  const id = Math.random().toString(36).substring(2, 9);
  let obj = {
    id,
    type,
    description,
    amount,
    date,
    category,
    userId
  };
  if (editId !== null) {
    transactions = transactions.map(txn => {
      if (txn.id === editId) {
        return {
          ...txn,
          type,
          description,
          amount,
          date,
          category
        };
      }
      return txn;
    });
    editId = null;
    localStorage.setItem("transactions", JSON.stringify(transactions));
    location.reload();
  } else {
    transactions.push(obj);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }
  createTxn.reset();

  formDiv.style.display = "none";
  updateCard(loggedInUser.id);
});

mode.addEventListener("click",()=>{
  body.classList.toggle("dark");
})
reset.addEventListener("click",()=>{
  console.log("hjsjhshj")
  removeData(loggedInUser.id);

})
logout.addEventListener("click",()=>{
  loggedInUser=null;
  localStorage.setItem("user", JSON.stringify(loggedInUser));
  window.location.href = "index.html";  
})
searchText.addEventListener("input", function () {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML="";
    let searchText = this.value.toLowerCase();
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    let regex = new RegExp(searchText, "i");
    transactions= transactions.filter(item => item.userId===loggedInUser.id); 
    transactions = transactions.filter(txn =>
        regex.test(txn.description)
    );
    for(transaction of transactions){
      let txnColor = "";
      
      if(transaction.type==="INCOME"){
        txnColor="rgb(55, 188, 113);";
      }else{
        txnColor="rgb(227, 32, 61);";
      } 
      tbody.innerHTML+=`  
                                <tr>
                                  <td>${transaction.date}</td>
                                  <td>${transaction.description}</td>
                                  <td>${transaction.category}</td>
                                  <td style="color: ${txnColor}" ><span>${loggedInUser.cur} </span> ${transaction.amount}</td>
                                  <td class="td-btn">
                                    <button onclick= "updatetxn('${transaction.id}')"  class="edit-btn" data-id="${transaction.id}"><i class="fa-solid fa-pen" style="color: rgb(116, 192, 252);"></i></button>
                                   <button class="del-btn" data-id="${transaction.id}"><i class="fa-solid fa-trash-can" style="color: rgb(247, 2, 2);"></i></button>
                                  </td>
                                </tr> 
          `
  
    }
    
});

type.addEventListener("change", function () {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML="";
    let typeText = this.value;
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions= transactions.filter(item => item.userId===loggedInUser.id); 
    transactions = transactions.filter(txn => txn.type===typeText);
    for(transaction of transactions){
      let txnColor = "";
      
      if(transaction.type==="INCOME"){
        txnColor="rgb(55, 188, 113)";
      }else{
        txnColor="rgb(227, 32, 61)";
      } 
      tbody.innerHTML+=`  
                                <tr>
                                  <td>${transaction.date}</td>
                                  <td>${transaction.description}</td>
                                  <td>${transaction.category}</td>
                                  <td style="color: ${txnColor}" ><span>${loggedInUser.cur} </span> ${transaction.amount}</td>
                                  <td>
                                    <button onclick= "updatetxn('${transaction.id}')"  class="edit-btn" data-id="${transaction.id}"><i class="fa-solid fa-pen" style="color: rgb(116, 192, 252);"></i></button>
                                   <button class="del-btn" data-id="${transaction.id}"><i class="fa-solid fa-trash-can" style="color: rgb(247, 2, 2);"></i></button>
                                  </td>
                                </tr> 
          `
  
    }
    
});

settingsBtn.addEventListener("click", () => {
    main.style.display = "none";
    main2.style.display = "flex"; 
   
});
dashBtn.addEventListener("click", () => {
  console.log("dash bressh")
    main.style.display = "block";
    main2.style.display = "none";
    location.reload();
});
let profileDetailsForm = document.querySelector("#profile-details-form");
document.getElementById("update-name").value = loggedInUser.username;
document.getElementById("profile-cur-select").value = loggedInUser.cur;
profileDetailsForm.addEventListener("submit",(e)=>{
     e.preventDefault(); 
     console.log("bnasbmnbm");
     loggedInUser.username=e.target[0].value;
     loggedInUser.cur=e.target[1].value;
     localStorage.setItem("user",JSON.stringify(loggedInUser));
     for(let usr of userList){
      if((usr.id===loggedInUser.id)){
          usr.username=e.target[0].value;
          usr.cur=e.target[1].value;
          break
      }
     }
     localStorage.setItem("users", JSON.stringify(userList));
     if (myChart) {
        myChart.destroy();
      }
     updateCard(loggedInUser.id);
      alert("Saved successfully!");
})
let refreshChartBtn = document.querySelector("#refreshChartBtn");
refreshChartBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  location.reload();
})




updateCard(loggedInUser.id);



document.querySelector("tbody").addEventListener("click", function (e) {
    
    if (e.target.classList.contains("del-btn")) {
        let id = e.target.dataset.id;

        let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

        // remove item
        transactions = transactions.filter(txn => txn.id != id);

        localStorage.setItem("transactions", JSON.stringify(transactions));

        // refresh UI
        location.reload(); // or re-render table
    }
});

function updatetxn(id) {
    
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    let transaction = transactions.find(txn => txn.id === id);
    editId=transaction.id;
    if (!transaction) return;
    let heading = document.querySelector("#createTxn-h1");
    let btnName = document.querySelector("#createTxnbtn");
    heading.textContent = editId !== null ? "Update Transaction" : "Add Transaction";
    btnName.textContent= editId !== null ? "Update" : "Create";
    formDiv.style.display = "flex";
    createTxn[0].value = transaction.type;
    createTxn[1].value = transaction.description;
    createTxn[2].value = transaction.amount;
    createTxn[3].value = transaction.date;
    createTxn[4].value = transaction.category;
}