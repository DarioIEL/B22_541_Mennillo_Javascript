//Recupero gli attributi di un elemento
let tre = document.querySelector("#tre");

//GetAttribute per recuperare il valore di un attributo
let attrClassTre = tre.getAttribute("class");
console.log(attrClassTre);

let attrIdTre = tre.getAttribute("id");
console.log(attrIdTre);

//setAttribute per modificare il valore
let uno = document.querySelector("#uno");
uno.setAttribute("class", 'txtRed');

//Att: il setAttribute modifica il valore di tutto l'attributo
let quattro = document.querySelector("#quattro");
quattro.setAttribute("class", "txtRed"); //in questo caso spariscono il barrato e il blue


//removeAttribute per eliminare completamente quell'attributo
document.querySelector("#cinque").removeAttribute("class");


//CLASSNAME E CLASSILIST

//1.CLASSNAME: modifica o legge o sovrascrive tutte le classi come un'unica stringa

let lib2 = document.querySelector("#lib2");
console.log(lib2.className);
lib2.className = "txtBlue grassetto"; //Sostituendo tutti i valori della classe li devo riscrivere da capo per averli tutti

//2.CLASSLIST: genera una DOMTokenList di classi e le gestisce una alla volta
let lib5 = document.querySelector("#lib5");
let classiLib5 = lib5.classList;
console.log(classiLib5);
lib5.classList.remove("nascosto");
lib5.classList.replace("txtRed", "txtBlue");
lib5.classList.add("barrato");

//Toggle su un item della listaSpesa
let due = document.querySelector("#due");

due.addEventListener("click", function(){
    due.classList.toggle("barrato");
})

let lis = document.querySelectorAll("li");
lis.forEach(li => {
    li.addEventListener("click", function(){
        li.classList.toggle("barrato");
    })
})