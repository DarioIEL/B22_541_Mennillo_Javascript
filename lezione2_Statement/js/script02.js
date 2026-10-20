//IF STATEMENT
//Sintassi di base
/**
 * if(condizione){
 *    esegui quello che si trova nel corpo dell if se la condizione è true 
 * }
 */

//DEvo valutare se il mio utente è maggiorenne. Se lo è gli do il benvenuto

let etaUser = 500;

if(etaUser >= 18){
    //il benvenuto verrà stampato solo se la condizione è true
    console.log("Ciao utente, benvenuto nella piattaforma");
}

if(etaUser < 18){
    console.log("Mi spiace, non puoi utilizzare la nostra piattaforma!!");
    
}

//IF - ELSE Statement
/**
 * if(condizione){
 *     eseguito se la condizione è true
 * }else{
 *     eseguito se la condizione è false
 * }
*/

if(etaUser >= 18){
    console.log("Caro user, sei il benvenuto sulla nostra piattaforma");
}else{
    console.log("Caro user, non puoi accedere perché non sei maggiorenne");
}

//Posso tradurre questo sopra con un else-if
if(etaUser >= 18 && etaUser <= 130){
    console.log("Benvenuto");
    
}else if(etaUser < 18 && etaUser > 0){  // 0 < etaUser < 18
    console.log("Non puoi entrare");
    
}else{
    console.log("Età non valida");
    
}
//Aggiungo ancora un altro controllo
/**
 * if(condizione1){
 *      eseguita se true
 * }else if(condizione2){
 *      eseguita se condizione 2 è vera e la condizione1 è false
 * }....
 * else{
 *      eseguita se TUTTE le altre condizione sono false
 * }
 */

//Se il mio voto è maggiore di 90 -> Ottimo
//maggiore di 75 -> Buono
//maggiore di 60 -> Sufficiente
//inferiopre a 60 -> Insufficiente
// inferiore a 30 -> fai schifo
let votoFinale = 80 ;

if(votoFinale >= 90){
    console.log("Ottimo!");
}
else if(votoFinale >= 75){
    console.log("Buono !");
}
else if(votoFinale >= 60){
    console.log("Sufficiente !");
}
else {
    console.log("Insufficiente !");
}


//Gamer. C'è un gioco, per vincere bisogna avere un punteggio e un punteggio skills maggiore di una certa soglia

let punteggio = 15;
let sogliaPunteggio = 20;

let skills = 9;
let sogliaSkill = 15;

if(punteggio >= sogliaPunteggio && skills >= sogliaSkill){
    console.log("Bravo, hai vinto !");
}else{
    console.log("Mi spiace, hai perso ! GAME OVER");
}

console.log("Maggior Feedback per il gamer. Gli devo dire perché perde");

/**
 * 1. Hai vinto
 * 2. Hai perso, il tuo punteggio non raggiunge la soglia (le skill sì)
 * 3. Hai perso, le tue skills non raggiungono la soglia (il punteggio sì)
 * 4. Fai schifo, skills e punteggio non raggiungono la soglia
 */

if(punteggio >= sogliaPunteggio && skills >= sogliaSkill){
    console.log("Bravo, hai vinto !!");
}else if(punteggio < sogliaPunteggio && skills >= sogliaSkill){
    console.log("Hai perso perché il tuo punteggio non supera la soglia");
}else if(punteggio >= sogliaPunteggio && skills < sogliaSkill){
    console.log("Hai perso perché le tue skills non superano la soglia");
}else{
    console.log("Fai schifo !! Le skills e il punteggio sono sotto soglia");
}

//Piove ? Sì e porto l'ombrello altrimenti metto gli occhiali da sole

let pioggia = false;

if(pioggia){
    console.log("Oggi porto l'ombrello");
}else{
    console.log("Metto gli occhiali da sole");
}

if(!pioggia){
    console.log("Metto gli occhiali da sole");
}else{
    console.log("Porto l'ombrello");
}

//Club privato. Si entra solo se maggiorenni e iscritti

let etaPersona = 15;
let iscrizione = false;

if(etaPersona >= 18 && iscrizione){
    console.log("Il nostro club è lieto di accoglierti anche oggi !!");
}else if(etaPersona < 18  && etaPersona > 0  && iscrizione){
    console.log("Non hai l'età adatta per accedere ma possiamo servirti una cocacola qui fuori");
}else if(etaPersona < 18 && etaPersona > 0 && !iscrizione){
    console.log("Mi spiace non hai l'età e neppure sei iscritto. Ndò vai ?!");
}else if(etaPersona >= 18 && !iscrizione){
    console.log("Mi spiace potresti entrare per l'età ma non sei iscritto. Posa i soldi se vuoi accedere");
}else{
    console.log("Mi spiace non sto capendo quello che dici");
}

//      F           or   F => F
if(etaPersona < 18 || !iscrizione){
    console.log("Mi spiace non puoi entrare");
}else{
    console.log("Benvenuto");
}

if(etaPersona >= 18 && iscrizione){
    console.log("Benvenuto nel club");
}else{
    console.log("Non puoi entrare");
}

//Esame all'università. L'esame viene superato se lo scritto e poi l'orale sono maggiori di 18. Se non supero lo scritto non vado proprio all'orale

let scritto = 25;
let orale = 19;

if(scritto >= 18){
    console.log("Bravo, ora puoi sostenere l'orale");
    
    if(orale >= 18){
        let votoFinale = (scritto + orale) / 2;
        console.log("Esame superato. Con voto " + votoFinale);
    }else{
        console.log("Mi spiace, dovrai risostenere tutto l'esame perché non hai passato l'orale. ");
    }

}else{
    console.log("Mi spiace, non puoi sostenere l'orale. Lo scritto è andato male!!");
}

//Riscrivi questa parte di codice partendo dalla condizione contraria: scritto < 18

if(scritto < 18){
    console.log("Mi spiace, non puoi sostenrere l'orale. Devi ripetere l'esame scritto !");
    
}else{

    if(orale < 18){
        console.log("Mi spiace, devi sostenere tutto l'esame da capo !");
    }else{
        let votoFinale = (scritto + orale) / 2;
        console.log("Complimenti, esame superato con voto.. " + votoFinale);
    }
}


