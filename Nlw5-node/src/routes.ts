
import {  Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";



/**
 * Tipos de parâmetros:
 * route params = parâmetros de rotas   http://localhost:3333/settings/1
 * query params = filtros e buscas   http://localhost:3333/settings/1?search=algumacoisa&outracoisa
 * body params = 
 */

const routes = Router();

const settingsController = new SettingsController();
const usersControllwe = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/messages/:username", settingsController.findByUsername);
routes.put("/messages/:username", settingsController.update);

routes.post("/users", usersControllwe.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes };

