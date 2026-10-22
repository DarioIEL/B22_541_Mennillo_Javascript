const btn = document.getElementById("btn");
const demo = document.getElementById("demo");

//soloi campi input senza value
let eLnome = document.getElementById("nome");
let eLcognome = document.getElementById("cognome");
let eLeta = document.getElementById("eta");
let eLcorso = document.getElementById("corso");

class Utente{
    constructor(nome, cognome, eta, corso){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corso = corso;
    }
}

function registraUtente(nome, cognome, eta, corso) {

    if (nome != "" && cognome != "" && eta != "" && eta > 0 && corso != "") {

        let registrazione = `<ul> 
                <li> nome: ${nome} </li>
                <li> cognome: ${cognome} </li>
                <li> età: ${eta}</li>
                <li> corso: ${corso} </li>
        </ul>`;

        demo.innerHTML = registrazione;
        resetCampi();
       
    } else {
        demo.innerHTML = "<h2 style='color: red'> Controlla bene i campi, ti sei scordato qualcosa </h2>"
    }
}

function resetCampi(){
//per resettare i dati
       document.getElementById("nome").value = "";
       document.getElementById("cognome").value = "";
       document.getElementById("eta").value = "";
       document.getElementById("corso").value = "";
}

btn.addEventListener("click", function(){
    // let nome = eLnome.value;
    // let cognome = eLcognome.value;
    // let corso = eLcorso.value;
    // let eta = eLeta.value;

    let values = document.querySelectorAll("input");
    [...values].forEach(input => {
        console.log(input.value);
    })
    
    //capire come iniettare i values nei campi

    registraUtente(nome,cognome,eta,corso);
});