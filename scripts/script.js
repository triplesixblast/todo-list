const inputLine = document.getElementById("inputLine");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputLine.value === ""){
        alert("Type somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputLine.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputLine.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", (elem) =>{
    if (elem.target.tagName === "LI"){
        elem.target.classList.toggle("checked");
        saveData();
    }
    else if (elem.target.tagName === "SPAN"){
        elem.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTaskList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

displayTaskList();

function bindEnterToButton(inputLine, btn) {
    const input = document.getElementById(inputLine);
    const button = document.getElementById(btn);
    
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            button.click();
        }
    });
}

bindEnterToButton('inputLine', 'btn');