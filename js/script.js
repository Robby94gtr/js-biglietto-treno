/* Ciao ragazzi,
esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Numero di push minimo: 6
Ricordatevi di spezzare il problema in sottoproblemi come visto a lezione nel file README.md
Buon lavoro! */

// Chiedo all'utente il numero di km che vuole percorrere

let userKm = parseInt(prompt("Inserire numero di Km che si vuole percorrere"));

console.log(userKm + " " + "Km")

// Chiedo all'utente l'età del passeggero

let userAge = parseInt(prompt("Inserire età del passeggero"));

console.log(userAge + " " + "anni")



