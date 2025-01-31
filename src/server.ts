import { routes } from "./Routes"
import express, { Request, Response, NextFunction } from "express"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express
app.use(express.json()) // Aqui estamos dizendo para API qual tipo de estrutura vamos utilizar json,xml, etc.

app.use(routes)

app.use((error: any, request: Request, response: Response, next: NextFunction)=>{
    response.status(500).json({message: "Erro ao tentar criar um produto!"})
}) // o tratamento de excessões tem que ser realizado no final, porque ela vai conseguir capturar qualquer erro que já tenha ocorrido nos passos anteriores

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo um número da porta da aplicação.

