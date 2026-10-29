//Esercizio 1
let voti = [28, 30, 24, 18, 27];
/**
 * @param {Number[]} voti 
 */
function calcolaMedia(voti) {
    if (voti.length != 0) { //Questo if non è obbligatorio
        let somma = 0;
        for (let i = 0; i < voti.length; i++) {
            somma += voti[i];
        }
        let media = somma / voti.length;
        return media;
    } else {
        return "Non ci sono voti"
    }
}

// let media = calcolaMedia(voti);
//oppure
let media = calcolaMedia([28, 30, 24, 18, 27]);
console.log(media);

//Esercizio 2
//Trovare il massimo tra questo array di numeri [4, 19, 7, 33, 2]

/**
 * @param {Number[]} numeri 
 */
function trovaMax(numeri) {
    let massimo = numeri[0];
    for (let i = 1; i < numeri.length; i++) {
        if (numeri[i] > massimo) {
            massimo = numeri[i];
        }
    }
    return massimo;
}

console.log(trovaMax([4, 19, 7, 33, 2]));

//Esercizio 3 - Trova le vocali in una parola SOL1
// /**
//  * @param {String} parola 
//  */
// function trovaVocali(parola){
//     const VOCALI = ['a', 'e', 'i', 'o', 'u'];

//     let contatore = 0;

//     let parolaMinuscola = parola.toLowerCase();

//     for(let i = 0; i < parolaMinuscola.length; i++){
//         if(VOCALI.includes(parolaMinuscola[i])){
//             contatore++;
//         }
//     }
//     return contatore;
// }

// console.log(trovaVocali("Javascript"));

//Esercizio 3 SOL2
/**
 * @param {String} parola 
 */
function trovaVocali(parola) {
    const VOCALI = ['a', 'e', 'i', 'o', 'u'];

    let contatore = 0;

    let parolaMinuscola = parola.toLowerCase();

    for (let i = 0; i < parolaMinuscola.length; i++) {
        for (let j = 0; j < VOCALI.length; j++) {
            if (parolaMinuscola[i] == VOCALI[j]) {
                contatore++;
                break;
            }
        }
    }
    return contatore;
}

console.log(trovaVocali("programmazione"));

//Esercizio 4 - elenca Numeri
function elencaNumeri(inizio = 1, fine = 10, tipo = "tutti") {
    let soluzione = [];

    for (let i = inizio; i <= fine; i++) {
        switch (tipo) {
            case "pari":
                if (i % 2 != 0) { //se incontro un numero dispari lo salti;
                    continue;
                }
                break;
            case "dispari":
                if (i % 2 == 0) {
                    continue;
                }
                break;
        }
        soluzione.push(i);
    }
    return soluzione;
}

console.log(elencaNumeri(10, 40, "dispari"));
console.log(elencaNumeri());


//esercizio 5 - giuoco del lotto 

function estraiNumeri(quanti = 6, max = 90) {
   if(quanti > max){
    return "Mi spiace non puoi estrarre più numeri di quelli presenti";
   }else{

       let numeriEstratti = [];
       
    //    for (let i = 0; i < quanti; i++) {
    //        let numeroCasuale = Math.ceil(Math.random() * max);
    //        for (let j = 0; j < numeriEstratti.length; j++) {
    //            if (numeriEstratti[j] == numeroCasuale) {
    //                continue;
    //             }
    //         }  
    //         numeriEstratti.push(numeroCasuale);
    //     }
    
    while(numeriEstratti.length < quanti){
        let numeroCasuale = Math.ceil(Math.random() * max);
        if(!numeriEstratti.includes(numeroCasuale)){
            numeriEstratti.push(numeroCasuale);
        }     
    }
        return numeriEstratti;
    }
}

console.log(estraiNumeri(10, 90));
