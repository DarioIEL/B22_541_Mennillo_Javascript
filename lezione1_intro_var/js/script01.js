//Commento in JS
/**
 * Commento multiriga
 * Posso commentare su più righe
 */

//VARIABILI
//Def. La variabile è una porzione di memoria alla quale assegniamo un nome e un valore
//Per definire una variabile uso la parola chiave let nomeVariabile = valore
let materia = "Javascript"; //In questo caso dichiaro una variabile e gli assegno un valore, nello stesso momento. Per essere precisi, sto asssegnando un valore di tipo String

//Posso fare la stessa cosa in due momenti
//1. Dichiaro la variabile
let mioNome;

//2. Assegno un valore
mioNome = "Dario";

let studentiPresenti = 10;
//saltare di tipo in tipo è possibile solo perché JS è debolmente tipizzato
studentiPresenti = "10";
studentiPresenti = "dieci"

let presenza = true;

let tuoNome = "Pippo"; //il nome delle variabili deve essere "parlante"

//JAVASCRIPT è un linguaggio debolmente tipizzato: i tipi esistono ma non ho nessun modo o obbligo di dichiararli 

let numero1 = 100;
let numero2 = 50;

console.log(numero1 + numero2);

let numero3 = "20"; //string
let numero4 = 10; //number

console.log(numero3 + numero4);
console.log(numero3 * numero4);

let num5 = "8"; //string
console.log(typeof num5);

let num6 = "7"; //string
console.log(typeof num6);

//In JS il simbolo + ha una duplice natura: serve a concatenare stringhe; serve a sommare numeri. JS predilige le stringhe, quindi date "8" + "7" per lui farà 87. Se però gli diamo un'operazione diversa dalla somma JS farà il calcolo matematico
let somma = num5 + num6;
console.log(somma);

let prod = num5 * num6;
console.log(prod);

let quoz = num5 / num6;
console.log(quoz);

let diff = num5 - num6;
console.log(diff);

//CAST del dato: forzare un dato ad essere di un determinato tipo
let somma2 = Number(num5) + Number(num6);
console.log(somma2);
let prod2 = num5 * num6; //In questo caso non c'è nulla da interpretare. Quelle due stringhe moltiplcate daranno un numero e basta
console.log(prod2);



//HELLO WORLD
console.log("Hello World");

let nome = "Dario";
let cognome = "Mennillo";

console.log("Ciao " + nome + " " + cognome);

let miaEta = 37;
let eta10AnniFa = miaEta - 10;

console.log("Dieci anni fa avevo " + eta10AnniFa + " anni");

//NON POSSO DICHIARARE 2 VOLTE la stessa variabile
//let miaEta = 38;

//POSSO richiamare una variabile già dichiarata e cambiarte il valore
miaEta = 2;

let nome1 = "Dario"; //dichiaro
console.log("Adesso il tuo nome è " + nome1);

nome1 = "Anna"; //riassegno
console.log("Adesso il tuo nome è " + nome1);


//esempio
let oraEsatta = 15;
console.log("L'ora attuale è: " + oraEsatta);

oraEsatta = 16;
console.log("L'ora attuale è: " + oraEsatta);