const express = require("express")
const { Socket } = require("net")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

//client.on = devolve a resposta da requisição
//client.emit = envia uma requisição para o servidor
io.on("connection", (client) => {

  client.on('disconnect', () => {
    console.log("Cliente desconectado - id:" +client.id)
  })

  client.on('msg', (data) => {
    
    io.emit("show",data)
  })

  
})
app.set("view engine", "ejs")
app.get("/", (req, res) => {
  res.render("index")
})





http.listen(4000, () => {
  console.log("Tudo certo!")
})