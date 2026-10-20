//break interrompe l'esecuzione di un ciclo o uno statement
let listaNumeri = [10,5,7,8,44,73,22,1,6,9];

let numeroDaCercare = 62;

let trovato = false


for(let i = 0; i < listaNumeri.length; i++){
    if(listaNumeri[i] == numeroDaCercare){
        console.log(listaNumeri[i] + " TROVATO in posizione " + i + " !!");
        trovato = true;
        break; //con questo break interrompo il ciclo e non vengono più letti gli altri numeri            
    }else{
        console.log(listaNumeri[i]);
    }
}

if(trovato) {
    console.log("Ricerca completata");
    
}else{
    console.log("Nessuna corrispondenza");
    
}


//continue: permette di saltare un'iterazione
//con gli stessi numeri: se trovo un numero pari salto l'iterazione e vado avanti

for(let i = 0 ; i < listaNumeri.length; i++){
    if(listaNumeri[i] % 2 == 0){
        console.log("Questo è un numero pari, da saltare");
        continue;
    }
    console.log(listaNumeri[i]);
}