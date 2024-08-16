// Objetos

const pessoa1 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 25,
};

console.log(pessoa1.nome);

// Adicionando propriedades

pessoa2 = {
    'nome': '',
    'sobrenome': '',
    'idade': null,
}

function adicionarPropriedade( nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

console.log(adicionarPropriedade('João', 'Silva', 30))

// Adicionando métodos

const pessoa3 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 25,

    falar(){
        console.log(`${this.nome} tem ${this.idade}.`)
    },
    incrementarIdade(){
        this.idade++
    },
}

pessoa3.falar(); // Maria tem 25
pessoa3.incrementarIdade(); // incrementa a idade
pessoa3.falar(); // Maria tem 26

//atribuição via desestruturação

const pessoaOrginal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    endereco:{
        rua: 'Av Brasil',
        numero: 320,
    },
};
  
const { nome = '', sobrenome} = pessoaOrginal;
console.log(nome, sobrenome);

const { endereco: { rua, numero} } = pessoaOrginal;
console.log(rua, numero);



