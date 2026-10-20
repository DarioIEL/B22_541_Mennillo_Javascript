const demo = document.getElementById("demo");
//Permette di controllare una variabile non booleana analizzando i valori che gli assegniamo
let msg = "";

let level = 3;

//Nel gioco ci sono 3 livelli. Per ogni livello mi verrà restituito un messaggio

switch (level){
    case 1: //quando il livello vale 1
        msg = "Sei nel primo livello, tutto semplice"
    break; //Questa keyword interrompe lo switch. Mi poorta sotto l'ultima parentesi graffa dello switch. Esce dallo switch
    case 2:
        msg = "Nel secondo livello ci saranno più difficoltà !";
    break;

    case 3:
        msg = "Terzo Livello con Boss finale !!";
    break;

    default: //Questo caso di default raccoglie tutta la casistica non contemplata prima. Se non trova un caso identico allora esegue quello di default
        msg = "Ciao Giocatore"
    break;
}

console.log(msg);
demo.innerHTML = msg

let descrizioneGiorno = "";
let giornoSettimana = "Martedì";

switch (giornoSettimana.toLowerCase()){
    case "lunedì":
        descrizioneGiorno = "Primo giorno della settimana";
    break;
    case "martedì":
        descrizioneGiorno = "Secondo giorno della settimana";
    break;
    case "mercoledì":
        descrizioneGiorno = "Terzo giorno della settimana. Siamo a metà";
    break;
    case "giovedì":
        descrizioneGiorno = "Quarto giorno, GNOCCHI !";
    break;
    case "venerdì":
        descrizioneGiorno = "Quinto giorno, dai che è quasi finita !!";
    break;

    case "sabato":
    case "domenica":
        descrizioneGiorno = "Weekend di riposo"
    break;
    
    default:
        descrizioneGiorno = "Non capisco in che giorno siamo";
    break
}

console.log(descrizioneGiorno);
