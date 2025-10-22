// Listando arquivos com FS e Recursao Mutua
// fs = File System
// .resolve -> resolve o caminho absoluto
// .promises -> usa a versao de promises do fs
// .readdir -> le o conteudo de um diretorio

const fs = require("fs").promises;
const path = require("path");

async function listandoArquivos(diretorio) {
  try {
    let arquivos = await fs.readdir(diretorio);
    const collator = new Intl.Collator("pt", { sensitivity: "base" });
    arquivos = arquivos.sort(collator.compare);
    console.log(arquivos);
  } catch (err) {
    if (err && err.code === "ENOENT") {
      console.error("Diretório não encontrado:", diretorio);
    } else {
      console.error("Erro lendo diretório:", err);
    }
  }
}

listandoArquivos("C:\\Users\\renat\\Desktop");

/*
const fs = require("fs").promises;
const path = require("path");

async function listandoArquivos(diretorio) {
  try {
    const arquivos = await fs.readdir(diretorio);
    for (const arquivo of arquivos) {
      console.log(arquivo);
    }
  } catch (err) {
    if (err && err.code === "ENOENT") {
      console.error("Diretório não encontrado:", diretorio);
    } else {
      console.error("Erro lendo diretório:", err);
    }
  }
}

listandoArquivos(__dirname);

*/