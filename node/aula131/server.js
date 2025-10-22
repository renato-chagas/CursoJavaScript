const express = require("express");
const app = express();

//retorna um objeto com os valores
//diferença de params e query

//params -> /testes/123/456
//query -> /testes?nome=valor&nome2=valor2

app.use(express.urlencoded(
  { 
    extended: true
  }
)
);

// GET
app.get("/", (req, res) => {
  res.send(
    '<form action="/" method="POST">Nome do Cliente:<input type="text" name="mensagem" placeholder="Digite algo..." /><button>Enviar</button></form>'
  );
});

app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.get("/testes", (req, res) => {
  res.send("Página testes");
});

app.get("/testes/:UserId", (req, res) => {
  const { UserId } = req.params;
  res.send({ UserId });
});

app.get("/testes/:UserId/:parametro", (req, res) => {
  const { UserId, parametro } = req.params;
  res.send({ UserId, parametro });
  console.log(req.query);
});

// POST
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Dados recebido: ${req.body.mensagem}`);
});

// LISTENER
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  console.log("Pagina testes http://localhost:3000/testes");
});
