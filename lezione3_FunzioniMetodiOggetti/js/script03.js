//il nome di una funzione e i suoi parametri si chiama signature
//nome è un parametro in ingresso
function saluta(nome, cognome, corso){
    if(nome != undefined && cognome != undefined){

        let msg = `Ciao ${nome} ${cognome}`;
        
        if(corso != undefined){
            msg += `. Sei iscritto al corso: ${corso}`;
        }
        console.log(msg);
    }else{
        console.log("Non hai fornito nessun parametro");
        
    }
    
}

//adesso nel richiamare la funzione devo passare dei parametri
saluta("Anna", "Verdi", "Java Full Stack");
saluta("Paolo", "Rossi");
saluta("Pippo", "Bianchi", "Cucito");
saluta("Laura", "Gialli");
saluta("Dino", "Dini");
saluta();


//posso anche stabilire dei parametri di default
function presentaDocene(nome = "Dario", materia = "Javascript"){
    console.log(`Ciao ${nome}, docente di ${materia}`);
}

presentaDocene("Laura", "HTML & CSS");

//numeri come parametri
function calcola(num1, num2){
    let res = (Number(num1) + Number(num2)) * 42 ;
    console.log(res);
}

calcola(16 ,10);


const btn = document.getElementById("btn");
const demo = document.getElementById("demo");

function scriviSuDemo(){
    let parola = document.getElementById("parola").value;
    if(parola !== ""){
        demo.innerHTML = `<h3> Hai scelto la seguente parola: ${parola}</h3>`;
    }else{
        demo.innerHTML = "Non hai inserito niente nel campo input"
    }
}

btn.addEventListener("click", scriviSuDemo);