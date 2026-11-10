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



// function mostraLocandine(filmsDB){
//     let zonaLocandine = document.querySelector("#zonaLocandine");

//     filmsDB.forEach(film =>{
//         zonaLocandine.innerHTML += film.costruisciLocandina();
//     })
// }

const zonaLocandine = document.querySelector("#zonaLocandine");

function caricaFilm(){
    fetch("http://localhost:3000/api/film")
    .then(req =>{
        return req.json();
    })
    .then( res =>{
        console.log(res);
        res.forEach(film =>{
            let filmNuovo = new Film(film.titolo, film.genere, film.anno, film.imgLocandina, film.link);
           zonaLocandine.innerHTML += filmNuovo.costruisciLocandina();
        })
    })
}

document.addEventListener("DOMContentLoaded", caricaFilm);