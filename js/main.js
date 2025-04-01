// RACCOLTA DATI
const numberToTravel = parseInt(
  prompt("Quanti kilometri devi percorrere?", "Es. 38")
);
const ageOfPassenger = parseInt(prompt("Quanti anni hai?", "Es. 24"));

console.log(numberToTravel);
console.log(ageOfPassenger);

const validNumberToTravel = !isNaN(numberToTravel);
console.log(validNumberToTravel);

const validAgeOfPassenger = !isNaN(ageOfPassenger);
console.log(validAgeOfPassenger);

const price = numberToTravel * 0.21;
console.log(price);

let outputText;

// SVOLGIMENTO

if (validNumberToTravel === true && validAgeOfPassenger === true) {
  if (ageOfPassenger < 18) {
    const discountAmount = (price * 20) / 100;
    const discountedPrice = (price - discountAmount).toFixed(2);
    console.log("Sconto di €", discountAmount);
    outputText = "€ " + discountedPrice;
  } else if (ageOfPassenger > 65) {
    const discountAmount = (price * 40) / 100;
    const discountedPrice = (price - discountAmount).toFixed(2);
    console.log("Sconto di €", discountAmount);
    outputText = "€ " + discountedPrice;
  } else {
    outputText = "€ " + price.toFixed(2);
  }
} else {
  outputText = "I dati inseriti non sono validi, riprova ricaricando la pagina";
}

alert(outputText);
