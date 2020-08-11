/**
 * Ferramentas utilizadas:
 * Express, SQL e EJS
 * Projeto responsável por perguntas e respostas, como se fosse um Yahoo
 */

 const express = require("express");
 const app = express();

 /**EJS como View Engine */
 app.set('view engine', 'ejs');

 app.get("/", (req, res) => {
     const nome = "Thiago Aquino";
     const lang = "Javascript";
     const exibirMsg = false;
        res.render("index",{
            nome: nome,
            lang: lang,
            empresa: "Sicoob",
            inscritos: 12000,
            hasError: exibirMsg
        });
 });

 
 app.listen(8080,() => {
     console.log("App rodando na porta 8080!")
 });

 