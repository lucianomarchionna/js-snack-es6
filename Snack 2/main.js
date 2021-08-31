// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
    {
        nome : "Juventus",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Inter",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Milan",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Roma",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Napoli",
        punti : 0,
        falliSubiti : 0,
    }
];

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
function numbersRandom(min, max){
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}

for(let i = 0; i < squadre.length; i++){
    squadre[i].punti = numbersRandom(50, 100);
    squadre[i].falliSubiti = numbersRandom(1, 20);
}
console.log(squadre);
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let squadreB = [];

for(let i = 0; i < squadre.length; i++){
    const {nome, falliSubiti} = squadre[i];
    squadreB.push(nome, falliSubiti);
}

console.log(squadreB);

