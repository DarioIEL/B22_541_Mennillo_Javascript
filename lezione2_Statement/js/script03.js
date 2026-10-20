let btn = document.getElementById("btnValuta");

let feedback = document.getElementById("feedback");

function elaboraEsame(){

    //il metodo getElementById serve a recuperare un elemento HTML con lo stessso id
    let votoScritto = Number(document.getElementById("votoScritto").value);
    let votoOrale = Number(document.getElementById("votoOrale").value);

    // if(votoScritto <= 30 && votoScritto >= 18){
    //     //valuto il voto dell'orale
    //     if(votoOrale <= 30 && votoOrale >= 18){
    //         let votoFinale = (votoScritto + votoOrale)/2;
    //         feedback.innerHTML = "<h3>Esame Superato con voto " + votoFinale + "</h3>";
    //     }else if(votoOrale < 18 && votoOrale > 0){
    //         feedback.innerHTML = "<h3> Esame non Superato. IL voto dell'orale è inferiore a 18 !</h3>";
    //     }else{
    //         feedback.innerHTML = "<h3> Voto dell'orale non valido </h3>";
    //     }

    // }else if(votoScritto < 18 && votoScritto > 0){
    //     //esame scritto non superato
    //     feedback.innerHTML = "<h3>Scritto non superato. Non posso valutare l'esame orale </h3>";
    // }else{
    //     feedback.innerHTML = "<h3>Voto dello scritto non valido !!</h3>";
    // }

    ///ALTRA SOLUZIONE

    // if(votoScritto <= 0 || votoScritto > 30){
    //     feedback.innerHTML = "<h3>Voto dello scritto non valido !!</h3>";
    // }else if(votoScritto < 18){
    //     feedback.innerHTML = "<h3>Scritto non superato. Non posso valutare l'esame orale </h3>";
    // }else{
    //     if(votoOrale <= 0 || votoOrale > 30){
    //          feedback.innerHTML = "<h3>Voto dell'orale non valido !!</h3>";
    //     }else if(votoOrale < 18){
    //         feedback.innerHTML = "<h3> Esame non Superato. Il voto dell'orale è inferiore a 18 !</h3>";
    //     }else{
    //         let votoFinale = (votoScritto + votoOrale)/2;
    //         feedback.innerHTML = "<h3>Esame Superato con voto " + votoFinale + "</h3>";
    //     }
    // }
    
    
    //ALTRA SOLUZIONE
    if(votoScritto <= 0 || votoScritto > 30 || votoOrale <= 0 || votoOrale > 30 ){
        feedback.innerHTML = "<h3> C'è un voto non valido </h3>";
    }else{
        
        if(votoScritto < 18){
            feedback.innerHTML = "<h3> Esame non superato</h3>";
        }else{
            if(votoOrale< 18){
                feedback.innerHTML = "<h3> Esame non superato</h3>";
            }else{
                let votoFinale = (votoOrale + votoScritto)/2;
                feedback.innerHTML = "<h3> " + votoFinale + "</h3>";
            }
        }
    }

    //Prova a risolvere senza annidare gli if
}

//lego la funzione al pulsante
btn.addEventListener("click", elaboraEsame);