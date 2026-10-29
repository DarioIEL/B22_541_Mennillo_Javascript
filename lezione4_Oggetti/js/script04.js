class Automobile{
    constructor(marca, modello, cilindrata, numPorte){
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.numPorte = numPorte;
        this.velocita = 0;
        this.marcia = 0;
        this.numGiri = 0;
    }

    accelera(numGiri, marcia){
        if(numGiri > 0 && marcia >= -1){
            this.numGiri = numGiri;
            this.marcia = marcia;
            this.velocita = (this.numGiri * this.marcia ) / 100;
            return `La tua velocità attuale è di ${this.velocita} km/h`;
        }else{
            return "Non puoi aumentare la tua velocità";
        }
    }

    cambiaMarcia(marcia){
        (marcia >= -1) ? this.marcia = marcia : false;
    }

    frena(){

    }

    descrivi(){
        return `Auto: ${this.marca} ${this.modello}. Cilindrata: ${this.cilindrata} cc`;
    }
}

// let miaAuto = new Automobile("Ford", "Fiesta", 1200, 3);
// console.log( miaAuto.accelera(2000, 3) );

const btnCrea = document.getElementById("btnCrea");
const demo = document.getElementById("demo");

function creaAutoDaForm(){
    let marca = document.getElementById("marca").value;
    let modello = document.getElementById("modello").value;
    let cilindrata = document.getElementById("cilindrata").value;
    let numPorte = document.getElementById("numPorte").value;

    if(marca == "" || modello == "" || cilindrata == 0 ){
        return null;
    }else{
        let miaAuto = new Automobile(marca, modello, cilindrata, numPorte);
        demo.innerHTML = miaAuto.descrivi();   
        return miaAuto;
    }
}

btnCrea.addEventListener("click", creaAutoDaForm);

const btnGuida = document.getElementById("btnGuida");
const feed = document.getElementById("feed");

function guidaAuto(){
    let autoDaGuidare = creaAutoDaForm();
    
    if(autoDaGuidare != null){
        let numGiri = document.getElementById("numGiri").value;
        let marcia = document.getElementById("marcia").value;
        feed.innerHTML = autoDaGuidare.accelera(numGiri, marcia);
    }else{

        feed.innerHTML = "Non hai nessuna auto da guidare"
    }

}

btnGuida.addEventListener("click", guidaAuto);