function calc() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = a + b
    res.innerHTML = `A resposta é: ${c}.`
}
function calc2() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = a - b
    res.innerHTML = `A resposta é: ${c}.`
}
function calc3() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = a * b
    res.innerHTML = `A resposta é: ${c}.`
}
function calc4() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = a / b
    res.innerHTML = `A resposta é: ${c}.`
}