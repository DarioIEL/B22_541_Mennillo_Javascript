//Tutti gli elementi dello HTML che sono statici è buona abitudine dichiarli come costanti
const btnCon = document.getElementById("btnCon"); //ATT: la stringa del metodo getElement ById deve esattamente corrispondere all'id usato nello HTML 

function salutaUtente(){
    let nomeUser = "Pippo123";
    console.log(`Ciao ${nomeUser} `);
}

//ATT ATT: nel richiamare la funzione al click NON devo usare le parentesi tonde
btnCon.addEventListener("click", salutaUtente);

const btnPG = document.getElementById("btnPG");
const demo = document.getElementById("demo");

function salutaStudente(){
    let nomeStudente = "Anna";
    let cognomeStudente = "Rossi";
    let nomeCorso = "Javascript";
    
    demo.innerHTML = `<h5> Ciao ${nomeStudente} ${cognomeStudente}. Benvenuta al corso di ${nomeCorso} </h5>`;
}

btnPG.addEventListener("click", salutaStudente);


//ES: crea un nuovo pulsante "Esegui tutto". Questo pulsante eseguirà entrambe le funzioni "salutaStudente" e "salutaUtente"

const btnAll = document.getElementById("btnAll");

//Modo 1 Vecchio e non più funzionante:
// btnAll.addEventListener("click", salutaStudente, salutaUtente, false);

//Modo 2
// function eseguiTutto(){
//     salutaStudente();
//     salutaUtente();
// }

// btnAll.addEventListener("click", eseguiTutto);

//Modo 3
//utilizzo una funzione anonima per richiamare le altre
btnAll.addEventListener("click", function(){
    salutaStudente();
    salutaUtente();
});
