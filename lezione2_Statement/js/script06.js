//WHile fa parte della famiglia dei cicli indefiniti. A priori non so quante volte verrà eseguito il codice nel corpo del while

/**
 * while (condizione) {
 *      ..esegue questo blocco fino a che la condizione è true
 * }
 */

//Trova il numero segreto entro un tot di tentativi
const NUMERO_SEGRETO = 8;
const SOGLIA = 6;

let numero_tentativi_eseguiti = 0;
let tentativo = 0;

while (tentativo != NUMERO_SEGRETO){
   
    if (numero_tentativi_eseguiti != SOGLIA){

        numero_tentativi_eseguiti++;
        
        tentativo = prompt("Inserisci un numero da 1 sola cifra per aprire il lucchetto");
        
        if(tentativo == NUMERO_SEGRETO){
            alert("Bravo, hai indovinato il numero in "+ numero_tentativi_eseguiti + " tentativi!!");
            break;
        }else{
            alert("Riprova");
        }
    }else{
        alert("Mi spiace hai esaurito i tentativi possibili");
        break;
    }
}


//Posso simulare anche un ciclo for - Attenzione: facilmente capito in una situazione di ciclo infinito
let i = 0; //inizializzazione

while (i <= 10){ //condizione
    console.log(i);
    i++; //aggiornamento
}



//do - while. Queto permette prima di eseguire qualcosa e poi la controlla. Nel while normale prima controllo poi eseguo.

do{ //ESEGUE
    tentativo = prompt("Inserisci un numero");

    if(tentativo == NUMERO_SEGRETO){
        //...
    }
}while (tentativo != NUMERO_SEGRETO) //CONTROLLA