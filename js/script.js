// Creazione programma che stampa numeri da 1 a 100 su console

const duck = document.querySelector("div.n_counter");

for (let number = 1; number <= 100; number++ ) {

    let element;

    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if ((number % 3 === 0) && (number % 5 === 0)) {
        element = `<div class="col col_special_3">FizzBuzz</div>`;
        // element = document.createElement("div.col");
        // duck.append(element);
    }

    // Per i multipli di 3 stampi “Fizz” al posto del numero
    else if (number % 3 === 0) {
        element = `<div class="col col_special_1">Fizz</div>`;
    }

    // Per i multipli di 5 stampi "Buzz" al posto del numero.
    else if (number % 5 === 0) {
        element = `<div class="col col_special_2">Buzz</div>`;
    }

    else {
        element = `<div class="col">${number}</div>`;
    }
    duck.innerHTML += element;
}


// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

