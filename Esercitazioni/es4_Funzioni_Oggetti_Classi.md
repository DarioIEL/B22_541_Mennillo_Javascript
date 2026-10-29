# Esercitazione 4: Funzioni, Oggetti e Classi

Ripasso di tutto il programma svolto finora: variabili, array, if, switch, cicli, funzioni, oggetti letterali, classi e DOM.

**Regole**
- Usa solo quello che abbiamo visto a lezione: niente `filter`, `map`, `reduce`, `splice`, `Math.max`.
- Ogni funzione deve avere un nome "parlante" e, dove richiesto, **restituire** il risultato con `return` (non stamparlo dentro la funzione).
- Per gli esercizi da 1 a 9 basta un file HTML vuoto con lo script collegato in fondo al `<body>` e la console.

---

## Parte A: Funzioni

### Esercizio 1: Media voti
Scrivi una funzione `calcolaMedia(voti)` che riceve un array di numeri e **restituisce** la media.
```javascript
let voti = [28, 30, 24, 18, 27];
console.log(calcolaMedia(voti)); // 25.4
```
**Bonus:** se l'array è vuoto la funzione restituisce `0` invece di `NaN`.

### Esercizio 2: Il più grande
Scrivi una funzione `trovaMassimo(numeri)` che restituisce il numero più grande dell'array **senza usare `Math.max()` né `sort()`**.
```javascript
console.log(trovaMassimo([4, 19, 7, 33, 2])); // 33
```
Poi scrivi `trovaMinimo(numeri)`.

### Esercizio 3: Conta le vocali
Scrivi una funzione `contaVocali(parola)` che restituisce quante vocali ci sono nella parola (maiuscole comprese).
```javascript
console.log(contaVocali("Javascript")); // 3
console.log(contaVocali("OTTOBRE"));    // 3
```
*Suggerimento:* una stringa si legge con il `for` come un array (`parola[i]`). Prepara un array `["a","e","i","o","u"]` e usa `includes()`.

### Esercizio 4: Pari o dispari (parametri di default)
Scrivi una funzione `elencaNumeri(da = 1, a = 10, tipo = "tutti")` che **restituisce** un array con i numeri da `da` ad `a`:
- se `tipo` è `"pari"` solo i pari
- se `tipo` è `"dispari"` solo i dispari
- altrimenti tutti

Usa uno `switch` per gestire il tipo e `continue` per saltare i numeri da scartare.
```javascript
console.log(elencaNumeri());               // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(elencaNumeri(1, 10, "pari"));  // [2, 4, 6, 8, 10]
console.log(elencaNumeri(5, 15, "dispari")); // [5, 7, 9, 11, 13, 15]
```

### Esercizio 5: Il Lotto diventa una funzione
Riprendi l'estrazione dell'Esercitazione 3 e trasformala in una funzione `estraiNumeri(quanti = 6, max = 90)` che **restituisce** un array di numeri casuali **senza ripetizioni**.
```javascript
console.log(estraiNumeri());       // es. [12, 87, 3, 45, 66, 21]
console.log(estraiNumeri(5, 20));  // es. [4, 17, 9, 1, 13]
```
**Domanda:** cosa succede se chiamo `estraiNumeri(10, 5)`? Aggiungi un controllo che lo impedisca.

---

## Parte B: Oggetti letterali

### Esercizio 6: Il libro
Crea un oggetto letterale `libro` con le proprietà `titolo`, `autore`, `anno`, `pagine`, `generi` (array) e i metodi:
- `descrivi()` restituisce una stringa tipo `"Il nome della rosa di Umberto Eco (1980), 503 pagine"`
- `isLungo()` restituisce `true` se il libro ha più di 300 pagine
- `elencaGeneri()` restituisce i generi separati da `" - "`

Ricorda: dentro i metodi si usa `this`.

### Esercizio 7: Il listino
Dato il seguente array di oggetti:
```javascript
let prodotti = [
    { nome: "Tastiera", prezzo: 35, disponibile: true },
    { nome: "Mouse", prezzo: 18.5, disponibile: true },
    { nome: "Monitor", prezzo: 189, disponibile: false },
    { nome: "Webcam", prezzo: 42, disponibile: true },
    { nome: "Cuffie", prezzo: 59.9, disponibile: false }
];
```
1. Stampa in console tutti i prodotti nel formato `"Tastiera - 35 €"`.
2. Stampa solo i prodotti disponibili.
3. Calcola il prezzo totale dei soli prodotti disponibili (atteso: `95.5`).
4. Trova il prodotto più costoso (riusa la logica dell'Esercizio 2).

---

## Parte C: Classi

### Esercizio 8: La classe Prodotto
Crea una classe `Prodotto` con costruttore `(nome, prezzo, categoria)` e i metodi:
- `calcolaIva()` restituisce l'IVA del prodotto in base alla categoria, con uno `switch`:
  - `"alimentari"` → 4%
  - `"libri"` → 4%
  - `"abbigliamento"` → 22%
  - `"elettronica"` → 22%
  - qualsiasi altra categoria → 22%
- `prezzoFinale()` restituisce prezzo + IVA
- `applicaSconto(percentuale)` **modifica** il prezzo del prodotto togliendo la percentuale indicata (es. `applicaSconto(10)` toglie il 10%)
- `descrivi()` restituisce `"Felpa (abbigliamento): 40 € + IVA = 48.8 €"`

```javascript
let p1 = new Prodotto("Felpa", 40, "abbigliamento");
console.log(p1.descrivi()); // Felpa (abbigliamento): 40 € + IVA = 48.8 €
p1.applicaSconto(25);
console.log(p1.descrivi()); // Felpa (abbigliamento): 30 € + IVA = 36.6 €
```
*Suggerimento:* per arrotondare a due decimali puoi usare `Number(numero.toFixed(2))`.

### Esercizio 9: La classe Carrello
Crea una classe `Carrello` che nel costruttore riceve il `cliente` (stringa) e inizializza `this.prodotti = []`. Metodi:
- `aggiungi(prodotto)` aggiunge un oggetto `Prodotto` all'array
- `totale()` restituisce la somma dei `prezzoFinale()` di tutti i prodotti
- `contaProdotti()` restituisce quanti prodotti ci sono
- `rimuovi(nomeProdotto)` elimina il prodotto con quel nome. **Senza `splice`:** costruisci un nuovo array con tutti i prodotti tranne quello da eliminare (come in "Rimuovi duplicati" dell'Esercitazione 2)
- `riepilogo()` restituisce una stringa con il nome del cliente, l'elenco dei prodotti (uno per riga, usa `\n`) e il totale

```javascript
let carrello = new Carrello("Anna Rossi");
carrello.aggiungi(new Prodotto("Felpa", 40, "abbigliamento"));
carrello.aggiungi(new Prodotto("Pane", 3, "alimentari"));
carrello.aggiungi(new Prodotto("Cuffie", 60, "elettronica"));
console.log(carrello.totale());   // 125.12 (118.86 se fai il bonus)
carrello.rimuovi("Cuffie");
console.log(carrello.contaProdotti()); // 2
console.log(carrello.riepilogo());
```
**Bonus:** se il totale supera i 100 € il metodo `totale()` applica uno sconto del 5%.

---

## Parte D: Mini progetto DOM: "La mia libreria"

Nella cartella `esercitazione4` trovi il file `libreria.html` con il form già pronto e `js/script.js` vuoto. Devi farlo funzionare.

**Requisiti**
1. Crea una classe `Libro` con costruttore `(titolo, autore, anno, genere, pagine)` e un metodo `descrivi()` che restituisce il codice HTML di un `<li>` con tutte le informazioni.
2. Crea un array **globale** `libreria = []` che conterrà tutti i libri inseriti.
3. Al click su **Aggiungi libro**:
   - recupera i valori dei campi (ricorda il cast con `Number()` per anno e pagine)
   - controlla con una funzione `controllaCampi(...)` che restituisce `true`/`false` che nessun campo sia vuoto, che le pagine siano maggiori di 0 e che l'anno sia compreso tra 1450 e l'anno corrente
   - se è tutto valido crea un nuovo `Libro`, aggiungilo all'array, aggiorna la lista e svuota i campi
   - altrimenti mostra un messaggio di errore in rosso nel `div#messaggio`
4. Scrivi una funzione `mostraLibri(elenco)` che riceve un array di libri e lo stampa dentro `ul#listaLibri`. Se l'array è vuoto scrive `"Nessun libro presente"`.
5. Aggiorna `span#contatore` con il numero di libri e `span#totalePagine` con la somma di tutte le pagine.
6. Il select **Filtra per genere** mostra solo i libri del genere scelto (usa l'evento `"change"` invece di `"click"`). L'opzione "Tutti" li mostra tutti. *Suggerimento:* costruisci un nuovo array con un `for` e passalo a `mostraLibri()`.

**Bonus**
- Mostra in `p#piuLungo` il titolo del libro con più pagine.
- Non permettere di inserire due volte lo stesso titolo (confronta in minuscolo con `toLowerCase()`).
- Aggiungi un pulsante **Svuota libreria** che azzera l'array e la lista.

---

## Parte E: Caccia all'errore

Il codice seguente contiene **8 errori** (alcuni bloccano lo script, altri producono un risultato sbagliato). Trovali, correggili e spiega con un commento che cosa non andava.

```javascript
class Studente{
    constructor(nome, cognome, voti){
        nome = nome;
        this.cognome = cognome;
        this.voti = voti;
    }

    media(){
        let somma = 0;
        for(let i = 0; i <= this.voti.length; i++){
            somma += this.voti[i];
        }
        somma / this.voti.lenght;
    }

    esito(){
        if(this.media() = 18){
            return "Promosso";
        }else if(this.media() > 18){
            return "Promosso";
        }else{
            return "Bocciato";
        }
    }
}

const s1 = Studente("Luca", "Bianchi", ["28", 30, 25]);
console.log(s1.nome + " " + s1.cognome + ": " + s1.esito());

const btn = document.getElementById("btnEsito");
btn.addEventListener("click", s1.esito());
```
