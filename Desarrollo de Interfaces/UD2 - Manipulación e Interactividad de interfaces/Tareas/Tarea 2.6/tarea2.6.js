let campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("input", function verificarNombre() {

    let textoNombre = campoNombre.value.toString();
    let longitudTexto = textoNombre.length;

    if (longitudTexto < 3 || textoNombre.trim() === "") {
        console.log("Por favor, ingresa al menos tres caracteres válidos");
    } else {
        console.log("Entrada aceptada: " + textoNombre);
    }

});