import { routes } from "./Routes"
import express, { Request, Response, NextFunction } from "express"
import { AppError } from "./utils/AppError"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express
app.use(express.json()) // Aqui estamos dizendo para API qual tipo de estrutura vamos utilizar json,xml, etc.

app.use(routes)

/* 
Status code
 400 (Bad Request): Erro do cliente.
 500 (Internal Server Error): Erro interno do servidor.
*/
app.use((error: any, request: Request, response: Response, next: NextFunction)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({message: error.message})
    }
    response.status(500).json({message: error.message})
}) // o tratamento de excessões tem que ser realizado no final, porque ela vai conseguir capturar qualquer erro que já tenha ocorrido nos passos anteriores

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo um número da porta da aplicação.

