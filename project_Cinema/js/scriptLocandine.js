class Film{
    constructor(titolo, genere, anno, imgLocandina, link){
        this.titolo = titolo;
        this.genere = genere;
        this.anno = anno;
        this.imgLocandina = imgLocandina;
        this.link = link;
    }
        
        costruisciLocandina(){ //Qui dentro costruisco la locandina del film
            let locandina = `
            <div class="locandina">
                <img src=${this.imgLocandina} class="locandina-img">
                <div class="locandina-info">
                    <h4 class="locandina-titolo"> ${this.titolo} </h4>
                    <p class="locandina-genere"> ${this.genere}</p>
                    <p class="locandina-anno"> ${this.anno}</p>
                    <a href=${this.link} target="_blank" class="locandina-link">Link al film</a>
                </div>
            </div>`;
            
            return locandina;
    }
}

//Questo array sotto lo si può considerare come se fosse un "database"
let filmInSala = [
    new Film("Oppenheimer", "Storico", 2023, "./img/oppenheimer.jpg", "./pages/Oppenheimer.html"),

    new Film("Birdman", "Fantastico", 2014, "./img/birdman.jpg", "https://it.wikipedia.org/wiki/Birdman_(film)"),

    new Film("Apocalypse Now", "Storico, Guerra", 1979, "./img/apocalypse.jpg", "https://it.wikipedia.org/wiki/Apocalypse_Now"),

    new Film("Viale del Tramonto", "Noir", 1950, "./img/viale.jpg", "https://it.wikipedia.org/wiki/Viale_del_tramonto")
]


function mostraLocandine(){
    let zonaLocandine = document.querySelector("#zonaLocandine");

    filmInSala.forEach(film =>{
        zonaLocandine.innerHTML += film.costruisciLocandina();
    })
}

document.addEventListener("DOMContentLoaded", mostraLocandine);

console.log(filmInSala[0]);
console.log(JSON.stringify(filmInSala[0]));

function caricaFilm(){
    fetch("http://localhost:3000/api/film")
    .then(res =>{
        return res.json();
    })
    .then(fin =>{
        console.log(fin);
    })
}

caricaFilm();