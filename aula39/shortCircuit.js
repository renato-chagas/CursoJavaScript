/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false  -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Luiz' && true && 'Maria'); // Maria
console.log( 0 || false || null || 'Luiz' || true); // Luiz

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto'; 
console.log(corPadrao);

const corUsuario2 = null;
const corPadrao2 = corUsuario2 || 'preto';
console.log(corPadrao2);