import express from "express"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express

app.get("/products/:id/:user", (request, response)=>{
    const {id, user} = request.params // recuperando os parametrôs da rota, utilizando express.
    response.send(`Produto ${id} do usuário ${user}`) 
})

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo um número da porta da aplicação.

