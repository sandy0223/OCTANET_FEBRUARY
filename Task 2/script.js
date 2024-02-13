const inputField = document.getElementById("input-field");
const list = document.getElementById("list");
function addTask() {
    if(inputField.value === ''||""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputField.value ="";
    inputField.focus();
    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function show(){
    list.innerHTML = localStorage.getItem("data");
}

show();