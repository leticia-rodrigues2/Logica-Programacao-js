console.log('\n Trabalhando com loops');
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);
const idadeComprador =15 ;
const estaAcompanhada  = true;
let temPassagemComprada = false;
const destino = "Salvador";
console.log(" \n Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true 
let destinoExiste = false;
let contador =0;

for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
}

while(contador <3){
  
    if(listaDeDestinos[contador] == destino  ){
         destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe: " ,destinoExiste)

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}