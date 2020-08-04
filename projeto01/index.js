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
     let user = false;
     if(user){
        res.render("index");
    } else {
        res.render("notAuthorized")
    }
 });
 
 app.listen(8080,() => {
     console.log("App rodando na porta 8080!")
 });

 