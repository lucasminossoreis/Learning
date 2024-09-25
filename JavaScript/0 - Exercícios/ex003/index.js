function check() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var msg = document.getElementById("texto")
    var img = document.getElementById("img")
    var fsex = document.getElementById("sexrad")

if (fano.value.lenght == 0 || fano.value > ano) {
    window.alert("Verifique o ano de nascimento!")
}
}
/* } else {
    var idade = ano - Number(fano.value)
    var genero = ""
}
} */