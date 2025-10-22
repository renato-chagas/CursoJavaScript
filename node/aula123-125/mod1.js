const falaNome = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`;
};

const caminho = () => {
    const path = require('path');
    return path.resolve(__dirname, '..')
    // path.resolve = junta os caminhos
    // __dirname = diretório atual
    // .. = diretório acima
}

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

module.exports = { falaNome, Pessoa, caminho };
