import express from "express"
import {myMiddleware} from "./middlewares/my-middlewares"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express

app.use(express.json()) // Aqui estamos dizendo para API qual tipo de estrutura vamos utilizar json,xml, etc.

/* middleware global
app.use(myMiddleware) // colocar ele no inicio da aplicação é como se a gente estivesse aplicando o middleware para todas as rotas existentes abaixo */

app.get("/products", (request, response)=>{
    // /products?page=1&limit=10
    const {page,limit} = request.query // Query params
    response.send(`Página ${page} de ${limit}`) 
})

// Middleware local é colocado em uma rota específica
app.post("/products",myMiddleware, (request, response)=>{
    const {name, price} = request.body // Aqui estamos recuperando de acordo com a requisição feita no no body do post (name, price)

    response.status(201).json({name, price, user_id: request.user_id}) // aqui estamos passando o status code e transformando a resposta em um objeto.json()
})

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo um número da porta da aplicação.

