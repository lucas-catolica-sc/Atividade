function verificaPalindromo (frase) {
    const reg = /\s/g
    frase = frase.replace(reg, '').toLowerCase();
    const fraseInvertida = frase.split('').reverse().join('');
    return frase === fraseInvertida;
}

module.exports  = {
    verificaPalindromo
}