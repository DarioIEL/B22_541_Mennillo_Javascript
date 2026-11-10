class Persona{
    constructor(nome,cognome, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta
    }
}

let pers1 = new Persona("Laura", "Verdi", 25);

console.log(pers1);
console.log(typeof pers1);

//Trasformo l'oggetto in un JSON (JavaScript Object Notation)
let pers1JSON = JSON.stringify(pers1);
console.log(pers1JSON);
console.log(typeof pers1JSON);


//Un oggetto scritto così mi arriva da una API esterna, sarò io a trasformarlo in un oggetto compresibile per il mio linguaggio
let StudenteJSON = `{"nome":"Paolo","cognome": "Gialli","corso": "Java"}`;

console.log(StudenteJSON);

let studente = JSON.parse(StudenteJSON);
console.log(studente);

    