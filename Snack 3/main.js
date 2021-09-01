// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let a, b = 0;

do{
    a = numbersRandom(1, 10);
    b = numbersRandom(1, 10);
}while(b < a);

console.log(array);
console.log(`Il numero A generato casualmente è ${a}.
Il numero B generato casualmente è ${b}.`);

function numbersRandom(min, max){
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

