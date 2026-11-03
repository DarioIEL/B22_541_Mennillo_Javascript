//Idea: tolgo la classe a TUTTI, poi la aggiungo solo a quello sul quale ho cliccato
let tabs = document.querySelectorAll(".tab");
let boxes = document.querySelectorAll(".box");
const tabScelto = document.querySelector("#tabScelto");

tabs.forEach(tab =>{
    tab.addEventListener("click", function(){
        //1. tolgo attivo ai pulsanti
        tabs.forEach(t => t.classList.remove("attivo"));
        this.classList.add("attivo");
        

        //2. mostro le card in base agli id che corrispondono a data-target
        boxes.forEach(box => box.classList.add("nascosto"));
        document.querySelector("#"+this.dataset.target).classList.remove("nascosto");      
               
        
        tabScelto.textContent = `Hai scelto ${this.textContent}`;
    })
})