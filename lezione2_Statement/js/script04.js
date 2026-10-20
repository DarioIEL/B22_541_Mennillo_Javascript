//Il for serve a ripetere un blocco di istruzioni

    //inizializzazione ; condizione; aggiornamento (incremento o decremento)
for(let i = 0;           i < 3;      i++){
    //corpo o body dello statement for
    console.log("Ciao " + i);
}

//ciclo for che parte da 1
console.log("Ciclo for con partenza da 1");

for(let i = 1; i <= 30; i++){
    console.log("Ciao " + i);  
}

console.log("Ciclo for al contrario");

for(let i = 30; i > 0; i--){
    console.log("Ciao " + i);
}


//Leggere un array con un ciclo for
let colori = ["verde", "blu", "nero", "giallo", "rosso", "arancione"];

for(let i = 0; i < colori.length; i++){
    console.log("Colore n° " + (i + 1) + " " + colori[i]);
}

console.log("Colori letti al contrario");

for(let i = colori.length - 1; i >= 0; i--){
    console.log(colori [i]);
}

console.log("Con il foreach");

colori.forEach(colore =>{
    console.log(colore);    
})

// forin forof


//Gioco: scorri tutti i colori, quando trovi il rosso scrivi "olè"
for(let i = 0; i < colori.length; i++){

    if(colori[i] == "rosso"){
        console.log(colori[i] + " olèèèèè");
    }else{
        console.log(colori[i]);
    }

    
}

