// Stampare tutti i numeri da 1 a 100

// for (let i = 1; i <= 100; i++ ) {

//     console.log("iterazione n: " + i);
// }


// Stampare tutti i numeri da 100 a 1

// for (let i = 100; i >= 1; i-- ) {

//     console.log("iterazione n: " + i);
// }



// stampare su html numero

//  const myUl = document.querySelector("div.prova");
// //   const ul = document.querySelector("ul");

//  for (let index = 0; index <= 100; index++) {
//      const element = `<div class="col-2">${index}</div>`;
//      myUl.innerHTML += element;
    
//  }

// const myUl = document.querySelector("ul.list");
// const myLi = document.createElement("li");
// myLi.append("Elemento");
// myUl.append(myLi);


// const myUl = document.querySelector("ul.list");

// for (let i = 0; i < 10; i++) {
//     const myLi = document.createElement("li");
//     myLi.append(i);
//     myUl.append(myLi);
// }


// Creazione programma che stampa numeri da 1 a 100 su console

const duck = document.querySelector("div.n_counter")

for (let number = 1; number <= 100; number++ ) {

    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if ((number % 3 === 0) && (number % 5 === 0)) {
        const element = `<div class="col-1 mx-3">FizzBuzz</div>`
        console.log("iterazione n: FizzBuzz");
        duck.innerHTML += element;
    }

    // Per i multipli di 3 stampi “Fizz” al posto del numero
    else if (number % 3 === 0) {
        const element = `<div class="col-1 mx-3">Fizz</div>`
        console.log("iterazione n: Fizz");
        duck.innerHTML += element;
    }

    // Per i multipli di 5 stampi "Buzz" al posto del numero.
    else if (number % 5 === 0) {
        const element = `<div class="col-1 mx-3">Buzz</div>`
        console.log("iterazione n: Buzz");
        duck.innerHTML += element;
    }

    else {
        const element = `<div class="col-1 mx-3">${number}</div>`
        console.log("iterazione n: " + number);
        duck.innerHTML += element;
    }
}

// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

