import { Router } from "express"; //importando o método Router do express para criar rotas
import { myMiddleware } from "../middlewares/my-middlewares";

const productsRoutes = Router()

/* middleware global
productsRoutes.use(myMiddleware) // colocar ele no inicio da aplicação é como se a gente estivesse aplicando o middleware para todas as rotas existentes abaixo */

productsRoutes.get("/:id", (request, response)=>{
  // /products?page=1&limit=10
  const {page,limit} = request.query // Query params
  response.send(`Página ${page} de ${limit}`) 
})

// Middleware local é colocado em uma rota específica
productsRoutes.post("/",myMiddleware, (request, response)=>{
  const {name, price} = request.body // Aqui estamos recuperando de acordo com a requisição feita no no body do post (name, price)

  response.status(201).json({name, price, user_id: request.user_id}) // aqui estamos passando o status code e transformando a resposta em um objeto.json()
})

export {productsRoutes}
