import { Request, Response } from "express"

class ProductsController{
  
index(request: Request, response: Response){
  const {page,limit} = request.query // Query params
  
  response.send(`Página ${page} de ${limit}`)
}

create(request:Request, response: Response){
  const {name, price} = request.body // Aqui estamos recuperando de acordo com a requisição feita no no body do post (name, price)

  throw new Error("Erro de exemplo!")

  response.status(201).json({name, price, user_id: request.user_id}) // aqui estamos passando o status code e transformando a resposta em um objeto.json()
}

}

/* 
  index - GET para listar vários registros.
  show - GET para exibir um registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  remove - DELETE par deletar um registro
*/


export {ProductsController}