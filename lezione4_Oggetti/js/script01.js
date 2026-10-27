// Un oggetto con notazione letterale è un insieme omogeneo di informazioni.
//Gli oggetti sono un tipo di dato complesso (fatto da dati di tipo diverso)
let studente = {
    //proprietà
    nome: "Pippo",
    cognome: "Rossi",
    eta: 25,
    corsi: ["Java", "JS", "Html & Css"],

    //comportamento o funzionalità. METODI
    presentati: function(){
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome}. Ho ${this.eta} anni`;
        return presentazione; //Questo metodo restituisce una string
    },

    studia: function(){
        let materieDiStudio = "In questo periodo sto studiando: ";

        for(let i = 0; i < this.corsi.length; i++){
            materieDiStudio += `- ${this.corsi[i]}  `;
        }

        return materieDiStudio;
    }
}


// //accediamo alle proprietà: leggere i valori
// let presentazione = `Ciao, mi chiamo ${studente.nome} ${studente.cognome}. Sto studiando ${studente.corsi[1]}`;

// console.log(presentazione);
console.log( studente.presentati() );
console.log( studente.studia() );
console.log( studente.nome ); //le proprietà non hanno bisogno delle parentesi tonde

//Se volessi descrivere un'aula diventa complicato utilizzando la notazione letterale. Dovrei creare tanti oggetti per quanti sono gli studenti. ---> Viene in soccorso la notazione con costruttore (le CLASSI)
let studente2 = {
     //proprietà
    nome: "Anna",
    cognome: "Verdi",
    eta: 25,
    corsi: ["Java", "JS", "Html & Css"],

    //comportamento o funzionalità. METODI
    presentati: function(){
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome}. Ho ${this.eta} anni`;
        return presentazione; //Questo metodo restituisce una string
    },

    studia: function(){
        let materieDiStudio = "In questo periodo sto studiando: ";

        for(let i = 0; i < this.corsi.length; i++){
            materieDiStudio += `- ${this.corsi[i]}  `;
        }

        return materieDiStudio;
    }
}