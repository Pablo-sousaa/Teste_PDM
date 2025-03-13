export function soma(numero1, numero2){
return numero1 + numero2;
}

console.log("Soma:", soma (2, 4))


export function subtracao(numero1, numero2){
    return numero1 - numero2;
}
    
console.log("Subtracao:", subtracao (2, 4))

export function multiplicacao( numero1, numero2) {
    return numero1 * numero2;
}

console.log ("Multiplicação:", multiplicacao(2,4))

export function divisao(numero1, numero2) {
    return numero1 / numero2;
}

console.log ("Divisão", divisao(2,4))



import moment from "moment";
function calcular_idade(ano_nascimento, ano_atual){
    return ano_atual - ano_nascimento;
}

console.log(calcular_idade(2003, 2025))