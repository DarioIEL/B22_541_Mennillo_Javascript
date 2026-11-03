//recupero elementi attraverso querySelector("cssSelector");

//recupero un nodo degli elementi attraverso l'id
//ATT: tutte le volte che recupero qualcosa sto recuperando un oggetto di tipo HTML
//Ogni elemento del DOM (ogni tag) è un oggetto 
let uno = document.querySelector("#uno"); 
console.log(uno);
console.log(typeof uno);
//MOdifico il contenuto testuale di uno
uno.textContent = "Grissini";

//Posso anche recuperare e modificare il contenuto in un colpo solo
document.querySelector("#due").textContent = "Spaghetti";

let ul = document.querySelector("ul"); //recupero per nome tag
console.log(ul);

let h1 = document.querySelector("h1");
h1.textContent += " e QuerySelectorAll"
console.log(h1);

//QuerySelectorAll : voglio recuperare tutti gli elementi di classe ".txtBlue"
let lis = document.querySelectorAll("li.txtBlue"); //In questo caso recupero una NodeList (parente stretto dell'array)
console.log(lis);
//Visto che sono indicizzati allora mi serve scrivere un ciclo for per leggerli o modificarli tutti
for(let i = 0; i < lis.length; i++){
    console.log(lis[i]);
    lis[i].textContent = "Prod n°" + i + " " + lis[i].textContent;
}


//Recupero tutti i tag p e gli cancello il testo
let ps = document.querySelectorAll("p");
ps.forEach(p => {
    p.textContent = "";
})

//Voglio capire il valore della classe sugli li
lis.forEach(li => {
    console.log(li.className);
});

//Recupero solo i libri
let titoliLibri = document.querySelectorAll("li.txtRed");
titoliLibri.forEach(titolo => {
    console.log(titolo.textContent);
})

//Recupero la mia todolist attraverso il parent
let ulTodo = document.querySelector("#todoList");
console.log(ulTodo);

//Modo1
let lisTodo = document.querySelectorAll("#todoList li");
console.log(lisTodo);

// Modo2
// let lisTodo = ulTodo.children;
// console.log(lisTodo);

// Modo3
// let listTodo = ulTodo.childNodes;
// console.log(listTodo);
