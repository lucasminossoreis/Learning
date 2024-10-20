const num1 = Number(prompt("Digite um número"))

document.getElementById("seuNum").innerHTML = `${num1}`

document.getElementById("seuNum2").innerHTML = `${num1}`

const num2 = (num1 ** 0.5)
document.getElementById("raizQua").innerHTML = `${num2}`


const ehInt = (Number.isInteger(num1))
document.getElementById("inteiro").innerHTML = `${ehInt}`

const ehNaN0 = (Number.isNaN(num1))
document.getElementById("ehNaN").innerHTML = `${ehNaN0}`