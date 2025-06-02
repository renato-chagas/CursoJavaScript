function saudacao(){
    console.log('Bom dia!')
}
saudacao()

// Função com parâmetro

function saudacaoNome(nome){
    console.log(`Bom dia, ${nome}!`)
}
saudacaoNome('Maria')

// Função com retorno

function saudacaoNome2(nome){
    console.log(`Bom dia, ${nome}!`)
    return 123
}

const variavel = saudacaoNome2('Maria')
console.log(variavel)
saudacaoNome2('Maria')

// função soma

function soma(x, y){
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2))

//funçao concatenar

function concatenarNome(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

console.log(concatenarNome('Maria', 'Silva'))

//arrow function

const soma2 = (x, y) =>{ 
    return x + y
}

