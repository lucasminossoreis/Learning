function dia() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var hora = document.getElementById("hora").value

    if (hora >= 6 && hora <= 12) {
        msg.innerHTML = "Bom dia!"
        img.src = "imagens/manha.jpg"
    } else
    if (hora >= 13 && hora <= 18) {
         msg.innerHTML = "Boa tarde!"
        img.src = "imagens/tarde.jpg"
    } else
    if (hora >= 19 && hora <= 24) {
        msg.innerHTML = "Boa noite!"
        img.src = "imagens/noite.jpg"
    } else
    if (hora >=0 && hora <= 5) {
        msg.innerHTML = "É madrugada!"
        img.src = "imagens/madrugada.jpg"
    } else
    if (hora < 1 || hora > 24) {
        window.alert("Informe uma hora válida!")
        return document.getElementById("hora").value = ""
    }
}
