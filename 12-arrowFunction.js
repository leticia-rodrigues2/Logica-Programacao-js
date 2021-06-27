function apresentar(){
    return `meu nome é  ${nome}`;
}
//Arrow function 
// usando uma linha
const apresentarArrow = nome => `meu nomeé ${nome}`;
const soma = (num1, num2)=> num1,num2;

//usando mais de uma linha

const somaNumerosPequenos = (num1,num2)=>{
    if (num1 || num2 > 10){
        return "somente numero de 1 a 9";
    }else{
        return num1+num2;
    }
}