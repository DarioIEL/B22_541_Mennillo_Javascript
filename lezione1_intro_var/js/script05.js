//Questo è un array: un contenitore di elementi simili (stesso tipo) tra loro. Gli array sono 0-based (ogni posizione è indicizzata e il conto comincia da 0)
//i=indice      0          1       2       3       4  
let colori = ["rosso", "giallo", "blu", "verde", "rosa"];

//L'indice identifica il valore in una data posizione
console.log("In posizione 3 c'è il colore " + colori[3] ); //verde
console.log("In posizione 0 c'è il colore " + colori[0]);
console.log("In posizione 4 c'è il colore " + colori[4]);
console.log("In posizione 5 c'è il colore " + colori[5]); //undefined

//Proprietà length, mi dice quanti sono gli elementi nell'array
console.log("Nel mio array ci sono " + colori.length + " colori");

let studenti = ["Marco", "Laura", "Anna", "Gino", "Luca", "Ale", "Dario"];
//                                                          indice = 6 - 1                    
console.log("L'ultimo studente iscritto è " + studenti[studenti.length - 1]);

console.log("Il primo studente iscritto è " + studenti[0]);

console.log("Il penultimo iscritto é " + studenti[studenti.length - 2]);

console.log(studenti);

//Metodi per array. Sono delle azioni o "funzionalità"
//Es si iscrive un'altra persona
//Metodo push per aggiungere un elemento
studenti.push("Luisa");
studenti.push("Paolo");
console.log(studenti);

//metodo sort() - ordina alfabeticamente
studenti.sort();

//metodo reverse() - ribalta l'ordine
studenti.reverse();

//metodo pop() - elimina l'ultimo valore dall'array
studenti.pop();

//shift() - tronca l'ultimo elemento originale
studenti.shift("Luca");

//unshift() - tronca il primo elemento originale
studenti.unshift("Ilaria");

//indexOf restituisce la posizione di un determinato elemento. Se non esiste restituisce -1
console.log(studenti.indexOf("Gennaro"));
//includes() restituisce un boolean se esiste o meno un elemento
console.log(studenti.includes("Anna"));

//Voglio capire se c'è uno studente di nome Amleto
// let nomeDaCercare = prompt("Inserisci il nome dello studente da cercare");
// if(studenti.includes(nomeDaCercare)){
//     console.log("Sì, c'è uno studente di nome " + nomeDaCercare +" e sul registro è in posizione " + studenti.indexOf(nomeDaCercare) );
    
// }else{
//     console.log("No, non abbiamo nessun studente con questo nome");   
// }

//Annullare un array
// studenti = [];
// studenti.length = 0;

console.log(studenti);

//Voglio stampare i nomi di tutti gli studenti. Voglio leggere l'array
//Metodo forEach (ciclo for fatto per gli array)
studenti.forEach(studente =>{
    console.log(studente);
});

console.log("========FOR CLASSICO========");

//Leggo con il for classico
for(let i = 0; i < studenti.length; i++){
    if(studenti[i] == "Dario"){
        console.log("n°" + i + " " + studenti[i] +  " ti ho trovato!!");
    }else{
        console.log("n°" + i + " " + studenti[i]);
    }
}

//si può fare ma non descrive nulla di particolare
let arrayMisto = ["Dario", "Mennillo", 37, true, "Torino"];

// let studente = {
//     nome: "Anna",
//     cognome: "Rossi",
//     eta: 36,
//     cittaRes: "Torino",
//     presenza: true,
//     corsi: ["Js", "Java", "Html"],
//     voti: [30, 28, null]
// }

//Array di frutti
let frutti = ["Mela", "Pesca", "Limone", "Ciliegia"];
let prezzi = [2.30, 2.0, 3.5, 7.5];

//Voglio sostituire il valore di uno di questi elementi
frutti[2] = "Albicocca";

console.log(frutti);

for(let i = 0; i < frutti.length; i++){
    console.log("Frutta: " + frutti[i] + " - prezzo: " + prezzi[i] + " €");
}


//Dato il seguente array, metti tutto in ordine dalla z alla a
let parole = ["dado", "computer", "zucca", "palla", "albero"];
parole.sort().reverse();
console.log(parole);

let nome = "Massimiliano";
let emon = nome.split("").reverse().join("");

console.log(emon);


