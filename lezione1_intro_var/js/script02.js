//lancio un alert nella pagina. Una specie di popup
alert("Ciao, Mondo. Caro utente, io sono un alert");

let username = prompt("Caro utente, come ti chiami ?"); //Quello che l'utente scriverà nel campo input verrà salvato nella variabile. LA risposta è il valore della variabile

document.write("<h1> Ciao " + username + " benvenuto nella nostra piattaforma </h1>");

let etaUser = Number(prompt("Quanti anni hai ?")); //Qui faccio il cast del dato perché so che farò dei calcoli matematici e tutto quello che recupero da campi input sono stringhe

let annoNascita = 2026 - etaUser;
let traDieciAnni = etaUser + 10;

document.write("Oggi hai " + etaUser + " anni. Quindi sei nato nel " + annoNascita +". Tra 10 anni avrai " + traDieciAnni + " anni!");

