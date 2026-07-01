
const body = document.body;
let createUser = ()=>{
  let form = document.querySelector("#form2");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let username = form.username.value;
        let password =form.password.value;
        let cur =form.cur.value;
        const id = Math.random().toString(36).substring(2, 9);
        let user = {
            id,
            username,
            password,
            cur
        }
        let userList = JSON.parse(localStorage.getItem("users")) || [];
        userList.push(user);
        localStorage.setItem("users", JSON.stringify(userList));
        form.reset();
        loginForm();
        return;
    })

}

let loginUser = ()=>{
  let form = document.querySelector("#form1");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let username = form.username.value;
        let password =form.password.value;
        let userList = JSON.parse(localStorage.getItem("users")) || [];
       
        for(let user of userList){
            if(user.username === username && user.password === password){
                localStorage.setItem("user",JSON.stringify(user));
                console.log("loginSuccessfully")
                form.reset();
                 window.location.href = "dashboard.html";  
                return;
            }
        }
        
        console.log("Invalid credentials");
        form.reset();
    })

}

loginForm = ()=>{
    body.innerHTML="";
    const auth = document.createElement("div");
    auth.setAttribute("id","auth")
    body.append(auth);

    const h2  = document.createElement("h2");
    h2.textContent="Welcome Back";
    auth.append(h2);

    const p1 = document.createElement("p");
    p1.textContent="Login to FinTrack Pro";
    auth.append(p1);

    const form1 = document.createElement("form");
    form1.setAttribute("class","form");
     form1.setAttribute("id","form1");

    let usernameDiv = document.createElement("div");
    usernameDiv.setAttribute("class","fg")
    let usernameLabel = document.createElement("label");
    usernameLabel.textContent="Username";
    let username = document.createElement("input")
    username.setAttribute("type","text");
    username.setAttribute("name","username");
     username.required=true;
    
    usernameDiv.append(usernameLabel,username);
    form1.append(usernameDiv);


    let passwordDiv = document.createElement("div");
    passwordDiv.setAttribute("class","fg")
    let passwordLabel = document.createElement("label");
    passwordLabel.textContent="Password";

    let password = document.createElement("input")
    password.setAttribute("type","password");
    password.setAttribute("name","password");
   password.required=true;

    passwordDiv.append(passwordLabel,password);
    form1.append(passwordDiv);

    let loginBtn = document.createElement("button");
    loginBtn.setAttribute("type","submit")
    loginBtn.setAttribute("id","loginBtn");
    loginBtn.setAttribute("class","fg")
    loginBtn.textContent="Login"
    form1.append(loginBtn);

    let p = document.createElement("p");
    p.setAttribute("class","para");
    p.textContent="Don't have an account?";

    let rlink = document.createElement("a");
    rlink.setAttribute("href","#");
    rlink.textContent="Register here";

    rlink.addEventListener("click", (e) => {
    e.preventDefault();
    auth.classList.add("hidden");
    registrationForm();
    register = document.querySelector("#register")
    register.classList.remove("hidden");
    });
    p.append(rlink);

    auth.append(form1);
    auth.append(p);

    loginUser();
}

registrationForm = ()=>{
    body.innerHTML="";
    const register = document.createElement("div");
    register.setAttribute("id","register")
    register.classList.add("hidden");
    body.append(register);

    const h2  = document.createElement("h2");
    h2.textContent="Create Account";
    register.append(h2);

    const p1 = document.createElement("p");
    p1.textContent="Join FinTrack Pro";
    register.append(p1);

    const form2 = document.createElement("form");
    form2.setAttribute("class","form");
    form2.setAttribute("id","form2");

    let usernameDiv = document.createElement("div");
    usernameDiv.setAttribute("class","fg")
    let usernameLabel = document.createElement("label");
    usernameLabel.textContent="Choose a Username";
    let username = document.createElement("input")
    username.setAttribute("type","text");
    username.setAttribute("name","username");
    username.required = true

    usernameDiv.append(usernameLabel,username);
    form2.append(usernameDiv);


    let passwordDiv = document.createElement("div");
    passwordDiv.setAttribute("class","fg")
    let passwordLabel = document.createElement("label");
    passwordLabel.textContent="Password";

    let password = document.createElement("input")
    password.setAttribute("type","password");
    password.setAttribute("name","password");
    password.required=true;

    passwordDiv.append(passwordLabel,password);
    form2.append(passwordDiv);


     let currencyDiv = document.createElement("div");
    currencyDiv.setAttribute("class","fg")
    let currencyLabel = document.createElement("label");
    currencyLabel.textContent="Currency";

    let cur = document.createElement("select")
    cur.setAttribute("name","cur");
    
    // option 1
    let opt1 = document.createElement("option");
    opt1.value = "₹";
    opt1.textContent = "Indian Rupee (INR)";

    let opt2 = document.createElement("option");
    opt2.value = "$";
    opt2.textContent = "US Dollar (USD)";

    let opt3 = document.createElement("option");
    opt3.value = "€";
    opt3.textContent = "Euro (EUR)";

    let opt4 = document.createElement("option");
    opt4.value = "¥";
    opt4.textContent = "Japanese Yen (YEN)";

    let opt5 = document.createElement("option");
    opt5.value ="﷼";
    opt5.textContent = "RIAL (RIAL)";

    cur.appendChild(opt1);
    cur.appendChild(opt2);
    cur.appendChild(opt3);
      cur.appendChild(opt4);
    cur.appendChild(opt5);

    
    currencyDiv.append(currencyLabel,cur);
    form2.append(currencyDiv);







    let registerBtn = document.createElement("button");
    registerBtn.setAttribute("id","registerBtn");
    registerBtn.setAttribute("type","submit")
    registerBtn.setAttribute("class","fg")
    registerBtn.textContent="Register"
    form2.append(registerBtn);

    let p = document.createElement("p");
    p.setAttribute("class","para");
    p.textContent="Don't have an account?";

    let rlink = document.createElement("a");
    rlink.setAttribute("href","login.html");
    rlink.textContent="Already have an account?";


    rlink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm();
    register.classList.add("hidden");
    auth = document.querySelector("#auth")
    auth.classList.remove("hidden");
    });


    p.append(rlink);

    register.append(form2);
    register.append(p);

    createUser();

}



loginForm();






