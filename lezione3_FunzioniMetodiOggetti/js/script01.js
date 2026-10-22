//FUNZIONE è uno strumento fondamentale in JS (linguaggio di programmazione funzionale) che permette di racchiudere codice sotto un unico nome. All'interno della funzione si utilizza la classica programmazione procedurale

//Dichiaro una funzione
//function keyword per definire
//saluta è il nome della  funzione
//() definisco la funzione e permettono di inserire dei parametri
//{ ...body della funzione }
function saluta(){
    console.log("Ciao, Dario!");
    let num = 5;
    let risultato = Math.pow(num, 2);
    console.log("Il risultato vale " + risultato);
}

//Richiamo la funzione per farla eseguire
saluta();

//Nel caso sotto richiamo la funzione prima di dichiararla. C'è completa indipendenza tra la dichiarazione e il richiamo della funzione. Posso anche invertire le cose 

studia();

function studia(){

    //Queste sotto sono variabili LOCALI. Hanno uno scope limitato alla funzione, cioè all'esterno non sono per nulla visibili né globalmente né allìinterno di altre funzioni
    let nomeMateria = "Javascript";
    let oreStudio = 200;
    let esame = true;
    
    // console.log("IL nome dello user è " + nomeUser); //QUesto non lo posso usare se il richiamo di studia() è più in alto rispetto al nome utente
    

    if(esame){
        console.log("Sto studiando per l'esame di " + nomeMateria);
    }else{
        console.log("Sto partecipando al corso di " + nomeMateria + " di " + oreStudio + " ore");
    }
}

// console.log(nomeMateria); //is not defined

//Questa è una variabile globale, cioè ha una visibilità estesa a tutte le funzioni e tutto lo script. Questo funziona a patto che il richiamo della funzione avvenga dopo aver inizializzato la variabile.
function salutaUser(){
    console.log("Ciao, " + nomeUser);
}
let nomeUser = "Pippo";
salutaUser();

// REGOLA NON SCRITTA: Negli script in alto si dichiarano le funzioni e poi le variabili e poi i richiami delle funzioni


//Posso richiamare le funzioni da un'altra funzione
function richiamaTutte(){
    saluta();
    studia();
    salutaUser();
}

richiamaTutte();