const express = require("express");
const app = express();

//get
app.get("/", (req, res) => {
  res.send(
    '<form action="/contato" method="post"><input type="text" name="mensagem" placeholder="Digite algo..." /><button type="submit">Ir para Contato</button></form>'
  );
});

app.post("/contato", (req, res) => {
  res.send("Formulário enviado via POST");
});

app.get("/contato", (req, res) => {
  res.send("Página de Contato");
});

// lsitener
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  console.log("Acesse a página de contato em http://localhost:3000/contato");
});
