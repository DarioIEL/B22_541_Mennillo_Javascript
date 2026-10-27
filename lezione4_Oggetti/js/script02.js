//Notazione con classi

///Prima di ECMA15 non c'erano le classi ma si descrivevano gli oggetti con le funzioni costruttore

// function Studente(nome, cognome, eta, corso){
//     this.nome = nome;
//     this.cognome = cognome;
//     this.eta = eta;
//     this.corso = corso;
// }

class Studente{
    //Il metodo costruttore mi permette di "costruire" l'oggetto
    constructor(nome, cognome, eta, corso) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corso = corso;
    }

    //Metodi
    studia(){
        let studio = `Sto studiando per i seguenti corsi: ${this.corso}`;
        return studio;
    }

    presentati() {
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome}`;

        return presentazione;
    }
}

//CREO UN NUOVO STUDENTE con la keyword "new". Questi studenti sono tutti simili tra di loro. Stesse proprietà ma valori diversi
let s1 = new Studente("Marco", "Rossi", "22", "Fisica");
let s2 = new Studente("Anna", "Verdi", 30, "Chimica");
let s3 = new Studente("Paolo", "Paoli", 26, "Matematica");

// console.log( s1.presentati(), s1.studia());
// console.log( s2.presentati(), s2.studia());

let gruppoStudio = [
    s1, 
    s2, 
    s3, 
    new Studente("Laura", "Gialli", 24, "Fisica Teorica")
];

gruppoStudio.forEach(stud =>{
    console.log(stud.presentati(), stud.studia());
})


class Docente{
    //nome, cognome, corsi assegnati, ente di Formazione
    //metodo insegna()
    //metodo presentati()
    //metodo assegnaVoto(studente: Studente, voto: number)
}