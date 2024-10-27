// Função para converter a temperatura
function converterTemperatura() {
    const temperaturaInput = document.querySelector('#temperatura');
    const tipoConversao = document.querySelector('#tipo').value;
    const resultadoElement = document.querySelector('#resultado'); // Seleciona o parágrafo para o resultado

    const temperatura = parseFloat(temperaturaInput.value);
    let resultado;

    if (tipoConversao === 'celsius') {
        resultado = (temperatura * 9/5) + 32;
        resultadoElement.textContent = `${temperatura}°C é igual a ${resultado.toFixed(2)}°F`;
    } else if (tipoConversao === 'fahrenheit') {
        resultado = (temperatura - 32) * 5/9;
        resultadoElement.textContent = `${temperatura}°F é igual a ${resultado.toFixed(2)}°C`;
    } else {
        resultadoElement.textContent = 'Selecione um tipo de conversão válido.';
    }
}
