const peso = document.getElementById ('peso');
const pesoN = document.getElementById ('peso-n');
    pesoN.innerHTML = peso.value;

    peso.oninput = function () {
        peso.innerHTML = this.value;
    }

    function mostrarPeso (novoValor) {
        peso.value = novoValor;
    }

    peso.addEventListener ('input' , atualizarValorSaida);

    function atualizarValorSaida (e) {
        pesoN.value = e.srcElement.value;
    }

const altura = document.getElementById ('altura');
const alturaM = document.getElementById ('altura-m')
    alturaM.innerHTML = altura.value;

    altura.oninput = function () {
        altura.innerHTML = this.value;
    }
    function mostrarAltura (newValor) {
        altura.value = newValor;
    }
    altura.addEventListener ('input' , atualValorSaida);

    function atualValorSaida (e) {
        alturaM.value = e.srcElement.value;
    }

    const button = document.getElementById('btnCalcular');
    button.addEventListener ('click', function() {
    let peso1 = document.getElementById ("peso-n").value;     
    let altura1 = document.getElementById ("altura-m").value;
    let alturaEmMetros = (altura1 / 100);
    let alturaAoQuadrado = (alturaEmMetros * alturaEmMetros);

    let imc = (peso1 / alturaAoQuadrado);
    let resultadoParagrafo = document.querySelector('#resultado p');
    resultadoParagrafo.innerHTML = imc.toFixed(2)
    
        if (imc < 17) {
                alert ("Muito abaixo do peso")}

        if (imc > 17 && imc <= 18.49){
                alert ("Abaixo do peso")}

        if (imc >= 18.5 && imc <= 24.99){
                alert ("Peso normal")}

        if (imc >= 25 && imc <= 29.99){
                alert ("Acima do peso")}

        if (imc >= 30 && imc <= 34.99){
                alert ("Obesidade I", "alert")}
                
        if (imc > 34.99) {
                alert ("Obesidade II")

}
}
)