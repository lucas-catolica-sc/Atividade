const express = require("express")
const { verificaPalindromo } = require("./service/userService")

const porta = 3000;

const app = express()

app.use(express.json())

/**
 * @Todo Verificar Palindromo
 */
app.get("/palindromo", function(req, response) {
    const frase = "socorram-me subi no onibus em marrocos"
    response.send(verificaPalindromo(frase))
})

app.listen(porta, function() {
    console.log("Testando servidor na porta 3000")
})

