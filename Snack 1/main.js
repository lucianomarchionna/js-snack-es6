const bici = [
    {
        nome : "Gemma",
        peso : "12",
    },
    {
        nome : "Biky",
        peso : "18",
    },
    {
        nome : "Strike",
        peso : "10",
    },
    {
        nome : "Naza",
        peso : "15",
    }
];

console.log(bici);

let bicileggera = bici[0];

for(let i = 0; i < bici.length - 1; i++){
    
    if(bici[i].peso < bicileggera.peso){
        bicileggera = bici[i];
    }
}

const {nome, peso} = bicileggera;

console.log(`Il nome della bici più leggera è ${nome} ed il suo peso risulta di ${peso} kg`);