function mostrarFibonacci() {
    let cantidad;

    // Validación del input
    while (true) {
        const input = prompt("¿Cuántos términos de Fibonacci quieres ver?");
        cantidad = parseInt(input);

        if (!isNaN(cantidad) && cantidad > 0) {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo.");
        }
    }

    // Generar sucesión de Fibonacci
    const fibonacci = [];
    for (let i = 0; i < cantidad; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    // Mostrar resultados en el DOM
    document.body.innerHTML += `
        <div class="resultado">
            <h2>Sucesión de Fibonacci (${cantidad} términos):</h2>
            <p>${fibonacci.join(', ')}</p>
        </div>
    `;
}

window.onload = mostrarFibonacci;
