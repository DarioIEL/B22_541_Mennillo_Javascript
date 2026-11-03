//Idea: tolgo la classe a TUTTI, poi la aggiungo solo a quello sul quale ho cliccato
let tabs = document.querySelectorAll(".tab");
const tabScelto = document.querySelector("#tabScelto");

tabs.forEach(tab =>{
    tab.addEventListener("click", function(){
        tabs.forEach(t => t.classList.remove("attivo"));
        this.classList.add("attivo");
        tabScelto.textContent = `Hai scelto ${this.textContent}`;
    })
})