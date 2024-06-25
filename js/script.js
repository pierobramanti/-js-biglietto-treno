// CREO LA VARIABILE KM //
let km =prompt("Quanti km devi percorrere per arrivare a destinazione?")
console.log(km)

// CREO LA VARIABILE AGE//
let age=prompt("Quanti anni hai?")
console.log(age)

// CREO LA VARIABILE COST_KM E LE ASSEGNO IL VALORE (0.21)//
let cost_km = 0.21;
console.log(cost_km)

// CREO LA VARIABILE PRICE LE ASSEGNO IL VALORE CON MOLTIPLICAZIONE//
let price = cost_km * km;
console.log(price);

// CREO LA VARIABILE DISCOUNT E LE ASSEGNO IL VALORE 0//
let discount = 0;
console.log(discount)

// CREO LE CONDIZIONI DI SCONTO//

if (age < 18) {
    reduction = 20 / 100;
}

else if (age >= 65) {
    reduction = 40 / 100;
}
