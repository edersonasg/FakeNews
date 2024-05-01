// INICIANDO EXPRESS

const express = require ('express');
const app = express();
const PORT = 8000;

//INICIANDO BODY PARSER
const bodyparser = require("body-parser");
app.use(bodyparser.json())


//CONFIGURANDO EJS
app.set("view engine", "ejs");

//CONFIGURANDO ARQUIVOS ESTATICOS
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("index");
});
app.listen(PORT, ()=>{
    console.log("servidor iniciado...");
})