const namedata = ["Akshansh Saraf" , "Ritik Yadav"]
const passdata = ["akshansh24" , "ritik12"]

let btn = document.querySelector(".button")

btn.addEventListener("click", () => {
    let userID = document.querySelector("#userID").value;
    let userpass = document.querySelector("#userPass").value;
    console.log(userID);
    console.log(userpass);

    const idx = null;
    for (let index = 0; index < namedata.length; index++) {
        if (namedata[index]===userID) {
            console.log("True Situation");
            idx = index;
            break;
        }
    }
    if (idx===null) {
        alert(`User Not Found!`);
    }
    else if (userpass===passdata[idx]) {
        alert(`Welcome ${userID}`);
    } 
    else {
        alert(`Invalid Password !`);
    }
     
});


let dbtn = document.querySelector(".modebtn");
let currMode = "light";
let body = document.querySelector("body");
let head = document.querySelector("h1");

dbtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        head.style.color = "white";
        head.style.textShadow = "0 0 50px rgb(124, 117, 117),0 0 100px rgb(124, 117, 117)";
        body.classList.remove("light");
        console.log(currMode);
    }
    else{
        currMode = "light";
        body.classList.add("light");
        head.style.color = "#1b0c1a";
        head.style.textShadow = "0 0 50px #1b0c1a,0 0 100px #1b0c1a"
        body.classList.remove("dark");
        console.log(currMode);
    }
});

let CurrMode = "light-box";
let box = document.querySelector(".box");

dbtn.addEventListener("click", () => {
    if (CurrMode === "light-box") {
        CurrMode = "dark-box";
        box.classList.add("dark-box");
        dbtn.innerHTML="Light Mode";
        box.classList.remove("light-box");
        console.log(CurrMode);
    }
    else{
        CurrMode = "light-box";
        box.classList.add("light-box");
        dbtn.innerHTML="Dark Mode";
        box.classList.remove("dark-box");
        console.log(CurrMode);
    }
});
