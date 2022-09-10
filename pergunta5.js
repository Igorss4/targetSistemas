var texto = "String";
var textoRevertido = "";

function reverterString(){
    for(var i=texto.length -1; i>= 0; i--){
        textoRevertido += texto[i];
    }
}
reverterString();
console.log(textoRevertido);