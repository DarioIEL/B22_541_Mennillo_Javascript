const demo = document.querySelector("#demo");


//Provo la fetch con https://dummyjson.com/users
function caricaDati(){
    const URL = "https://dummyjson.com/users";

    //La fetch produce un oggetto Promise che deve essere consumato da dei metodi
    fetch(URL)
    .then(data => {
        return data.json(); //trasforma gli oggetti da json (String) ad oggetti
    })
    .then(res => {
        // console.log(res.users);
        console.log("Sto caricando gli utenti");
        console.log(res.users);
                
        res.users.forEach(user => {
            //devo richiamare l'esatto nome delle singole proprietà
            demo.innerHTML += `<li> ${user.firstName} ${user.lastName}
            <img src=${user.image}>
            </li>`;

        });
        
    })
}

caricaDati();

