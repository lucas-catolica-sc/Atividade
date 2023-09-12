const { verificaPalindromo } = require("../service/userService")

describe("deve testar se é palindromo", ()=>{
    it("Primeiro teste" , ()=>{
        expect(verificaPalindromo("ARARA")).toBe(true)
    })
})