//Numeri casuali - si utilizza l'interfaccia Math con il metodo random()
//il metodo random estrae un numero casuale tra 0.0 e 0.9

//Math.ceil() -> arrotonda all'intero maggiorante -> 1.2 ==> 2

let num = Math.ceil(Math.random() * 10);
console.log(num);


//estrarre un numero casuale tra 1 e 20
let num2 = Math.ceil(Math.random() * 20);
console.log(num2);


//estrarre un numero casuale tra 11 e 25
let num3 = Math.ceil(Math.random() * 15) + 10;
console.log(num3);

//estrarre un numero casuale tra 1 e 90
let num4 = Math.ceil(Math.random() * 90);
console.log(num4);
