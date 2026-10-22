const btn = document.getElementById("btn");
const demo = document.getElementById("demo");


function registraUtente() {
    //raccolgo i value dei campi input
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    let corso = document.getElementById("corso").value;

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

btn.addEventListener("click", registraUtente);