import { Router } from "express"; //importando o método Router do express para criar rotas
import { myMiddleware } from "../middlewares/my-middlewares";
import { ProductsController } from "../controllers/productsController";

const productsRoutes = Router()
const productsController = new ProductsController()

/* middleware global
productsRoutes.use(myMiddleware) // colocar ele no inicio da aplicação é como se a gente estivesse aplicando o middleware para todas as rotas existentes abaixo */

productsRoutes.get("/", productsController.index)

// Middleware local é colocado em uma rota específica
productsRoutes.post("/",myMiddleware, productsController.create)

export {productsRoutes}
