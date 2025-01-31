import express from "express"
import { routes } from "./Routes"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express
app.use(express.json()) // Aqui estamos dizendo para API qual tipo de estrutura vamos utilizar json,xml, etc.

app.use(routes)

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo um número da porta da aplicação.

