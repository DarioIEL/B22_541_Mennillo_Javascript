function calcolaRisultati(){
    let num1 = Number(document.getElementById("elNum1").value);
    let num2 = Number(document.getElementById("elNum2").value);
    
    let somma = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let quoz = num1 / num2;
    
    let risultati = document.getElementById("risultati");
    
    let stringaRisultati = `<p> la somma vale ${somma} </p>
    <p>la diff vale ${diff} </p>
    <p>la moltiplicazione ${prod}</p>
    <p>il quoziente vale ${quoz}</p>`;
    
    risultati.innerHTML = stringaRisultati;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", calcolaRisultati)