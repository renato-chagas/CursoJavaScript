/*
Primitivos - String - Number - Undefined - Null - Boolean (bigint, symbol) -> imutaveis - Valor

Referência (mutavel) - Array - Object - Function -> passados por referência
*/ 

// String

let nome = 'Luiz'
nome[0] = 'R'      // não altera a string
nome = 'Otavio'   // a variável nome é mutável, mas o valor da string é imutável
console.log(nome[0], nome)

// Array

let a = [1, 2, 3]
let b = [...a]
let c = b
/* 
let b = a;
let c = b; 
*/
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Luiz')
console.log(a, c)