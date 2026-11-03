const demo = document.getElementById("demo");

setInterval(()=>{
    
    let dataOggi = new Date();
    console.log(dataOggi);
    let oraEsatta = dataOggi.getHours();
    let minutiEsatti = dataOggi.getMinutes();
    let secondiEsatti = dataOggi.getSeconds();
    
    oraEsatta = oraEsatta  < 10 ? `0${oraEsatta}`: `${oraEsatta}`;
    minutiEsatti = minutiEsatti < 10 ? `0${minutiEsatti}` : `${minutiEsatti}`;
    secondiEsatti = secondiEsatti < 10 ? `0${secondiEsatti}`: `${secondiEsatti}`;
    
    console.log(`${oraEsatta}: ${minutiEsatti} : ${secondiEsatti}`);
    demo.innerHTML = `<h2>${oraEsatta}: ${minutiEsatti} : ${secondiEsatti}</h2>`
}, 1000)

