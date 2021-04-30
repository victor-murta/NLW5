
import express, { response } from 'express';
import "./database"; //ele reconhece automaticamente o 'index' da pasta
import {routes} from './routes';
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from 'path';
/**
 * TIPOS DE ROTAS
 * get = buscas
 * put = alteração
 * delete = deletar
 * patch = alterar informação específica
 * post = criação
 */

//Migrations = um gerenciamento de tudo que está sendo criado no banco de dados
/*
app.get("/", (request, response) => {
    return response.json({
        message: "Olá nlw 05"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso"
    })
});
*/
const app = express();

app.use(express.static(path.join(__dirname, '..', "public")))
app.set("views", path.join(__dirname, '..', 'public'));
app.engine("html", require("ejs").renderFile );
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});


const http = createServer(app);  //criando o portocolo http
const io = new Server(http); //cruando o protocolo ws

io.on("connection", (socket: Socket) => {
    //  console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };
