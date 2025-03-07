/* exercicio 6 - tópico 1*/
/* utilizo o método .push para adicionar um valor ao final do array e estabeleço o valor "0" para ser adicionado ao final do array*/
numeros = [10,20,30,40,50];
numeros.push(60);
console.log (numeros);

/* exercicio 6 - tópico 2*/
/* utilizo o método .shift() para remover o primeiro item do array, no caso o número "10"*/
numeros.shift ();
console.log (numeros);

/* exercicio 6 - tópico 3*/
/* crio uma variavel para receber o valor do maior número do array, depois utilizo Math.max para retornar o maior valor no array e utilizo (...numeros) para espelhar o array*/
maior_numero = Math.max(...numeros);
console.log (maior_numero);

/* exercicio 6 - tópico 4*/
/* crio uma variavel para receber o valor do menor número do array, depois utilizo Math.min para retornar o menor valor no array e utilizo (...numeros) para espelhar o array*/
menor_numero = Math.min(...numeros);
console.log (menor_numero);