let benvenuto = document.querySelector("#benvenuto");

function landing(){

    benvenuto.textContent = "Sto caricando...."

    setTimeout(() => {
        //1. Creo un elemento di tipo HTML, cioè un oggetto
        let titolo = document.createElement("h1");
        //2. Modifico un elemento
        titolo.textContent = "Benvenuto nel nostro sito web";
        //3. Aggancio il figlio al parent
        benvenuto.textContent = "";
        benvenuto.appendChild(titolo);

    }, 2000);

}


    document.addEventListener("DOMContentLoaded", landing);

const galleria = document.querySelector("#galleria");

function caricaFoto(){  //finto

    let fotos = ["deserto.jpeg","mare.jpg", "montagna.jpg", "città.jpeg", "campagna.jpeg", "lago.jpeg"];

    fotos.forEach(foto => {
        let card = document.createElement("div");
        card.setAttribute("class", "box");
        
        let img = document.createElement("img");
        img.setAttribute("src", `./img/${foto}`);

        card.appendChild(img);

        galleria.appendChild(card);
    })

}
caricaFoto();
