/* exercicio 1 - tópico 1*/

/* uso do .toUpperCase() para fazer a mudança*/
var minuscula = "pablo";
var maiuscula = minuscula.toUpperCase ();
console.log (minuscula)
console.log (maiuscula)

/* exercicio 1 - tópico 2*/

/* uso do .toLowerCase() para fazer a mudança*/
var minuscula = "PABLO";
var maiuscula = minuscula.toLowerCase();
console.log (minuscula)
console.log (maiuscula)

/* exercicio 1 - tópico 4*/

/* uso do .replace com os parâmetros a (letra que será alterada), g(expressão global que informa que todas as ocorrências da letra a será alterada pela letra especificada) e "o" (letra que tomará o lugar da letra alterada (a))*/
var palavra = "alfabeto";
var palavra_modificada = palavra.replace(/a/g, "o");
console.log (palavra_modificada)

/* eu poderia ter feito mais condições que retornassem mensagens mais elaboradas, porém o tempo era curto e fiz o simples que correspondesse exatamente o solicitado*/


