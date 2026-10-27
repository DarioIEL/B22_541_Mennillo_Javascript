class Corso{
    /**
     * 
     * @param {String} titolo 
     * @param {Number} ore 
     * @param {String[]} materie 
     * @param {String} respo 
     */
    constructor(titolo, ore, materie, respo){
        this.titolo = titolo;
        this.ore = ore;
        this.materie = materie;
        this.respo = respo;    
    }

    descriviCorso(){
        let descrizione = `Titolo: ${this.titolo}<br>
                           Ore: ${this.ore}<br>
                           Materie: ${this.materie}<br>
                           Respo: ${this.respo}`
    
        return descrizione;
    }
}


function creaCorso(){
    //Questa funzione raccoglie tutte le info del form
    let titolo = document.getElementById("titolo").value;
    let ore = document.getElementById("ore").value;
    let materie = document.getElementById("materie").value;
    let respo = document.getElementById("respo").value;
    
    if(controllaCampi(titolo, ore, materie, respo)){
        let corso = new Corso(titolo, ore, materie, respo);   
        demo.innerHTML = corso.descriviCorso();
        resetCampi();
    }else{
        demo.innerHTML = "Mi spiace, c'è qualche campo mancante"
    }
}

function controllaCampi(titolo, ore, materie, respo){

    if(titolo == "" || ore == "" || materie == "" || respo == ""){
        return false;
    }else{
        return true;
    }
}

function resetCampi(){
    document.getElementById("titolo").value = "";
    document.getElementById("ore").value = "";
    document.getElementById("materie").value = "";
    document.getElementById("respo").value = "";
}

const demo = document.getElementById("demo");

const btnReg = document.getElementById("btnReg");

btnReg.addEventListener("click", creaCorso);