

 // recebe uma string
function imprimeTexto(texto){
    console.log(texto);
}
imprimeTexto("oi");
imprimeTexto("outro text")

function soma(){
    return 2+2;
}
console.log(soma());

// uma função chamando a outra
imprimeTexto(soma());
