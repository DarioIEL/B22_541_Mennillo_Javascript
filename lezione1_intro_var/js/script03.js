let num1 = Number(prompt("Ciao utente, inserisci il primo numero"));
let num2 = Number(prompt("Adesso inserisci un altro numero"));

document.write("<h2> Hai scelto i seguenti numeri: " + num1  + " " + num2 +" </h2>");

let somma = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quoz = num1 / num2;

document.write("<p>La somma vale: " + somma + "</p>");
document.write("<p>La differenza vale: " + diff + "</p>");
document.write("<p>Il prodotto vale: " + prod + "</p>");
document.write("<p>Il quoziente vale: " + quoz + "</p>");

let nomeUser = prompt("Scrivi il tuo nome");
document.write("<h3>Grazie " + nomeUser + " per aver utilizzato il nostro calcolatore </h3>");