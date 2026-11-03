const btnAdd = document.querySelector("#btnAdd");
const lista = document.querySelector("#lista");

function creaTodo(){
    let item = document.querySelector("#itemTodo").value;
    if(item != ""){
        // lista.innerHTML += `<li> ${item}</li>`;
        let li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", function(){
            // this.setAttribute("class", "barrato");
            this.classList.toggle("barrato");        
        })
        lista.appendChild(li);
        document.querySelector("#itemTodo").value = "";
    }
}

btnAdd.addEventListener("click", creaTodo);
