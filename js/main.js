// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//kilometers to be travel
const userWay = parseInt (prompt("How many kilometers would you like to travel?"));

//age of the user
const userAge = parseInt (prompt("How old are you?"));

//price of the ticket
const ticketPrice = 0.21;

//standart price
let standartPrice = (userWay * ticketPrice);
document.getElementById('ticket-price').innerHTML = 'The price of your ticket is ' + standartPrice + '€';

//If the user is >= 65 years old a discount of 40%.
if (userAge >= 65) {
  let userDiscountElder = (standartPrice - ((standartPrice * 40) / 100)).toFixed(2); 
  document.getElementById('ticket-price').innerHTML = 'The price of your ticket is ' + userDiscountElder + '€';
  
} //If the user is <= 20 years old a discount of 20%.
  else if (userAge <= 20) {
    let userDiscountMinor = (standartPrice - ((standartPrice * 20) / 100)).toFixed(2); 
    document.getElementById('ticket-price').innerHTML = 'The price of your ticket is ' + userDiscountMinor + '€';
} 


