import express from "express"

const PORT = 3333

const app = express() //inicializando o express e colocando dentro da constante app todos os recursos que temos dentro do express

app.get("/products", (request, response)=>{
    // /products?page=1&limit=10
    const {page,limit} = request.query
    response.send(`Página ${page} de ${limit}`) 
})

app.listen(PORT, ()=> console.log(`Server is running on at ${PORT}`)) // definindo um número da porta da aplicação.

