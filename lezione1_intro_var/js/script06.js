//1° recupero il pezzettino di html nel quale scriverò la lista studenti
let listaStudenti = document.getElementById("listaStudenti"); //ul

//===================
// let studente = "Pierluigi Pierantola";
//listaStudenti.innerHTML = "<li>" + studente + "</li>";
//===================

//Crea una lista di 5 studenti. Stampa il nome di ogni studente nella listaStudenti (<ul>)
let studenti = ["Paola", "Marco", "Luca", "Anna", "Laura"];
// listaStudenti.innerHTML = "<li>" + studenti[0] + "</li>";
// listaStudenti.innerHTML += "<li>" + studenti[1] + "</li>";
// listaStudenti.innerHTML += "<li>" + studenti[2] + "</li>";
// listaStudenti.innerHTML += "<li>" + studenti[3] + "</li>";
// listaStudenti.innerHTML += "<li>" + studenti[4] + "</li>";

// studenti.forEach(stud => {
//     listaStudenti.innerHTML += "<li>" + stud +"</li>";
// });



//  inizializzazione; condizione        ; aggiornamento
for(let i = studenti.length - 1;       i >= 0;    i--){
    listaStudenti.innerHTML += "<li>" + studenti[i] + "</li>";
}