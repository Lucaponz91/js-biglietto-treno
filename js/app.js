// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
let totalKm = prompt('Quanti chilometri vuoi percorrere?')
let age = prompt('Quanti anni hai?')
console.log(totalKm, age)
// Converto in parseInt
totalKm = parseInt(totalKm)
age = parseInt(age)
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let fullPrice = totalKm * 0.21;
// fullPrice = fullPrice.toFixed(2) INUTILE
console.log(fullPrice)
console.dir(full_price)
full_price.innerHTML = fullPrice
// va applicato uno sconto del 20% per i minorenni
if (age < 18 ) {
    let discount = fullPrice * 0.2
    let discountedPrice = totalKm * 0.21 - discount
    discountedPrice = discountedPrice.toFixed(2)
    console.log(discountedPrice)   
    full_price.innerHTML = discountedPrice
// va applicato uno sconto del 40% per gli over 65.
} else if (age > 65){ 
    let discount = fullPrice * 0.4
    let discountedPrice = totalKm * 0.21 - discount
    discountedPrice = discountedPrice.toFixed(2)
    console.log(discountedPrice)
    full_price.innerHTML = discountedPrice
}

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo : es 15.23 €).