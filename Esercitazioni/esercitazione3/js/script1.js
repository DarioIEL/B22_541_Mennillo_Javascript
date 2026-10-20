let numeriEstratti = [];

let numeroGiri = 0;

// for(let i = 0; i < 6; i++){

//     let numeroCasuale = Math.ceil(Math.random() * 90);
//     if(numeriEstratti.indexOf(numeroCasuale) == -1){
//         numeriEstratti.push(numeroCasuale);
//     }else{
//         i--
//     }

//     numeroGiri++;
// }


// while(numeriEstratti.length < 10){
//      let numeroCasuale = Math.ceil(Math.random() * 90);
//     if(numeriEstratti.indexOf(numeroCasuale) == -1){
//         numeriEstratti.push(numeroCasuale);
//     }
//     numeroGiri++;
// }

// console.log(numeriEstratti);
// console.log("Sono stati estratti in " + numeroGiri + " giri");

for(let i = 0; i < 90; i++){
    let numeroCasuale = Math.ceil(Math.random() * 90);
    for(let j = 0; j < numeriEstratti.length; j++){
        if(numeriEstratti[j] == numeroCasuale){
            continue;
        }
    }

    numeriEstratti.push(numeroCasuale);

}

console.log(numeriEstratti);
console.log(numeroGiri);