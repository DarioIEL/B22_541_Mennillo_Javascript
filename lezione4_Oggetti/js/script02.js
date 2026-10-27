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
    /**
     * 
     * @param {String} nome 
     * @param {String} cognome 
     * @param {String[] | String} corsiAssegnati 
     * @param {String} enteFormazione 
     */
    constructor(nome, cognome, corsiAssegnati, enteFormazione){
        this.nome = nome;
        this.cognome = cognome;
        this.corsiAssegnati = corsiAssegnati;
        this.enteFormazione = enteFormazione;
    }

    insegna(){
        let lezione = "Sto tenendo lezione nei seguenti corsi";
        if(this.corsiAssegnati.length > 1){
            this.corsiAssegnati.forEach(corso => {
                lezione += `\n ${corso}`;
            })
        }else{
            lezione += `\n ${this.corsiAssegnati}`
        }
        return lezione;
    }

    presentati(){
        let presentazione = `Ciao mi chiamo ${this.nome} ${this.cognome} e lavoro per ${this.enteFormazione}. \n`;
        presentazione += this.insegna();
        return presentazione;
    }

    /**
     * 
     * @param {Studente} studente 
     * @param {Number} voto 
     * @returns 
     */
    assegnaVoto(studente, voto){
        let valutazione = `Lo studente ${studente.nome} ${studente.cognome} del corso ${studente.corso} ha una valutazione di ${voto}`;
        return valutazione;
    }
}

let doc1 = new Docente("Pier", "Pieri", ["Comunicazione", "Design", "Marketing"], "I&L");

console.log(doc1.presentati());
console.log(doc1.assegnaVoto(s1, 30));