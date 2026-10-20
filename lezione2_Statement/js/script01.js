//Operatore di assegnazione = (assegna un valore ad una variabile)
let nomeScuola = "I&L";

//Operatori matematici
// + duplice natura: 1. operatore di somma 2. operatore di concatenazione di stringhe
let nome = "Anna";
let saluto = "Ciao";
console.log(saluto + " " + nome); //Ciao Anna

let num1 = 5;
let num2 = 8;

let somma = num1 + num2; //13
console.log(somma);
//-
let differenza = num1 - num2;
console.log(differenza);
//*
let molt = num1 * num2;
console.log(molt);
// /
let div = num1 / num2;
console.log(div);

//Operatori di incremento e decremento
let num3 = 10;
let num4 = 5;

// += permettono di aggiungere un valore alla stessa variabile. Incrementando la variabile di un certo valore
//num3 = num3 + num4;
num3 += num4;
num3 += 6;
num3 += 2;

console.log(num3);

//come verrebbe con le stringhe
let parola1 = "Ciao";
let parola2 = "Buongiorno";
let parola3 = "Addio";

parola1 += parola2;
parola1 += parola3;
console.log(parola1); //sto aggiungendo un pezzo a parola1. Non sto creando una nuova variabile

//Posso fare -= , *=, /= solo con i numeri e NON con le stringhe
num3 -= 3;
console.log(num3);

num3 *= 6;
console.log(num3);

num3 /= 20;
console.log(num3);

//Operatori ++ e -- (incremento e decremento di 1 unità)
let num5 = 8;
console.log(num5++); //operatore di postincremento (prima legge poi incrementa)
console.log(num5);

let num6 = 10;
console.log(num6--); //10
console.log(num6); //9

//Messo davanti la variabile diventa operatore di pre incremento/decremento
let num7 = 15;
console.log(++num7);//16
console.log(num7); //16

let num8 = 20;
console.log(--num8); //19

//OPERATORI DI CONFRONTO. Mi permettono di valutare 2 varibili in base al valore. Tutti questi operatori producono un boolean

let mioPunteggio = 15;
let tuoPunteggio = 12;

let conf1 = mioPunteggio > tuoPunteggio;
console.log(conf1); //true

let conf2 = mioPunteggio < tuoPunteggio;
console.log(conf2); //false

let conf3 = mioPunteggio >= tuoPunteggio;
console.log(conf3); // true

let conf4 = mioPunteggio <= tuoPunteggio;
console.log(conf4);

let conf5 = tuoPunteggio < mioPunteggio;
console.log(conf5); //true


let mioNum = 5;
let tuoNum = "5";

//== confronta i VALORI
let conf6 = mioNum == tuoNum;
console.log("I due numeri sono uguali ? " + conf6);

//!= diverso da
let conf7 = mioNum != tuoNum
console.log("I due numeri sono diversi ? " + conf7);

//=== verifico che i due numeri siano uguali nel valore e nel tipo
let conf11 = mioNum === tuoNum;
console.log("I due valori sono uguali in tutto e per tutto ? " + conf11);


let mioNum2 = 8;
let tuoNum2 = "8";

//confronto solo il valore della variabile
let conf10 = mioNum == tuoNum;
console.log("I due valori sono uguali ? " + conf10);


// === confronta anche il tipo per cui 8 e "8" sono diversi nel tipo
let conf8 = mioNum2 === tuoNum2;
console.log("I due valori sono uguali nel tipo e nel valore ? " + conf8);

let conf9 = mioNum2 !== tuoNum2;
console.log(conf9);

let val1 = "Dario";
let val2 = "Dario";

console.log(val1 == val2); //false
console.log(val1 === val2); //false


//OPERATORI LOGICI - producono tabella delle verità
// AND logico && - permette di unire più condizioni e verificare se sono true o false

let punteggio = 25;
let sogliaPunteggio = 20;

let skill = 9;
let sogliaSkill = 10;

//HARD MODE
//il giocatore vince se il suo punteggio AND il suo skill superano la soglia.
//La condizione finale è true se tutte le condizioni sono True, altrimenti è false
//                         True                            True
let condizione = (punteggio >= sogliaPunteggio) && (skill >= sogliaSkill);
console.log("Il giocatore supera il livello in Hard MODE ? " + condizione)

//EASY MODE
//Il giocatore vince se il suo punteggio OR il suo skill supera la soglia. 
//BAsta il verificarsi di una sola condizione e il giocatore vince il gioco
let condizione2 = (punteggio >= sogliaPunteggio) || (skill >= sogliaSkill);
console.log("Il giocatore supera il livello in Easy MODE ? " + condizione2);


//Operatore NOT logico ! - inverte la condizione che sto valutanto
let eta = 30;
let condizione3 = !(eta >= 18); //eta < 18
console.log("Il mio utente è minorenne ? " + condizione3 );


let accesa = true;
let spenta = !accesa;
console.log("La lampadina è spenta ? " + spenta );

let miaVar = "Parola";
let tuaVar = 10;

console.log(typeof miaVar); //string
console.log(typeof tuaVar); //number
