import { Router } from "express";

import { productsRoutes } from "./products-routes"; // Importando a rota de produtos

const routes = Router()

routes.use("/products", productsRoutes)

export {routes}