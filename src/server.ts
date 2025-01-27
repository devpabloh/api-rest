import express from "express"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo a porta da API

