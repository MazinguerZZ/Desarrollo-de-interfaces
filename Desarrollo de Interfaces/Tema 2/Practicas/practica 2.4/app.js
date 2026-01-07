// 1. Validación de Edad
document.getElementById('edad').addEventListener('input', function() {
    var edadInput = this;
    var msgEdad = document.getElementById('msgEdad');
    var edad = parseInt(edadInput.value);
    
    if (isNaN(edad) || edad < 16 || edad > 60) {
        // ESTILOS DIRECTOS - ROJO
        edadInput.style.borderColor = '#ff6b6b';
        edadInput.style.backgroundColor = '#fff5f5';
        msgEdad.style.color = '#d62323';
        msgEdad.textContent = 'Debe ser número entre 16 y 60';
    } else {
        // ESTILOS DIRECTOS - VERDE
        edadInput.style.borderColor = '#33c481';
        edadInput.style.backgroundColor = '#f0fff8';
        msgEdad.style.color = '#0c7a3c';
        msgEdad.textContent = '✓ Válido';
    }
});

// 2. Validación de Email
document.getElementById('email').addEventListener('input', function() {
    var emailInput = this;
    var msgEmail = document.getElementById('msgEmail');
    var email = emailInput.value;
    
    if (email.length < 6 || !email.includes('@') || !email.includes('.') || email.includes('yahoo.')) {
        emailInput.style.borderColor = '#ff6b6b';
        emailInput.style.backgroundColor = '#fff5f5';
        msgEmail.style.color = '#d62323';
        msgEmail.textContent = 'Debe tener @ y ., min 6 chars, no yahoo';
    } else {
        emailInput.style.borderColor = '#33c481';
        emailInput.style.backgroundColor = '#f0fff8';
        msgEmail.style.color = '#0c7a3c';
        msgEmail.textContent = '✓ Válido';
    }
});

// 3. Validación de Ciclo
document.getElementById('ciclo').addEventListener('change', function() {
    var cicloSelect = this;
    var msgCiclo = document.getElementById('msgCiclo');
    
    if (cicloSelect.value === "") {
        cicloSelect.style.borderColor = '#ff6b6b';
        cicloSelect.style.backgroundColor = '#fff5f5';
        msgCiclo.style.color = '#d62323';
        msgCiclo.textContent = 'Debe seleccionar un ciclo';
    } else {
        cicloSelect.style.borderColor = '#33c481';
        cicloSelect.style.backgroundColor = '#f0fff8';
        msgCiclo.style.color = '#0c7a3c';
        msgCiclo.textContent = '✓ Válido';
    }
});

// 4. Validación de Checkboxes (con bucle for)
function validarCheckboxes() {
    var checkboxes = document.getElementsByName('modulos');
    var msgMods = document.getElementById('msgMods');
    var seleccionados = 0;
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            seleccionados = seleccionados + 1;
        }
    }
    
    if (seleccionados < 2) {
        msgMods.style.color = '#d62323';
        msgMods.textContent = 'Debe seleccionar al menos 2 módulos';
        return false;
    } else {
        msgMods.style.color = '#0c7a3c';
        msgMods.textContent = '✓ Válido (' + seleccionados + ' seleccionados)';
        return true;
    }
}

document.getElementById('mods').addEventListener('change', validarCheckboxes);

// 5. Validación de Aceptar condiciones
document.getElementById('acepto').addEventListener('change', function() {
    var aceptoCheckbox = this;
    var msgAcepto = document.getElementById('msgAcepto');
    
    if (!aceptoCheckbox.checked) {
        aceptoCheckbox.style.borderColor = '#ff6b6b';
        aceptoCheckbox.style.backgroundColor = '#fff5f5';
        msgAcepto.style.color = '#d62323';
        msgAcepto.textContent = 'Debe aceptar las condiciones';
    } else {
        aceptoCheckbox.style.borderColor = '#33c481';
        aceptoCheckbox.style.backgroundColor = '#f0fff8';
        msgAcepto.style.color = '#0c7a3c';
        msgAcepto.textContent = '✓ Condiciones aceptadas';
    }
});

// 6. Botón Enviar
document.getElementById('btnEnviar').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Variables para almacenar errores
    var hayErrores = false;
    var erroresTexto = "";
    
    // Validar edad
    var edad = parseInt(document.getElementById('edad').value);
    if (isNaN(edad) || edad < 16 || edad > 60) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Edad\n";
    }
    
    // Validar email
    var email = document.getElementById('email').value;
    if (email.length < 6 || !email.includes('@') || !email.includes('.') || email.includes('yahoo.')) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Email\n";
    }
    
    // Validar ciclo
    if (document.getElementById('ciclo').value === "") {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Ciclo\n";
    }
    
    // Validar checkboxes
    if (!validarCheckboxes()) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Módulos\n";
    }
    
    // Validar condiciones
    if (!document.getElementById('acepto').checked) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Condiciones\n";
    }
    
    // 8. Mostrar alerta si hay errores
    if (hayErrores) {
        alert('ERROR: Campos no válidos:\n' + erroresTexto);
        return;
    }
    
    // 7. Generar resumen si todo es válido
    var nombre = document.getElementById('nombre').value;
    var edadValor = document.getElementById('edad').value;
    var emailValor = document.getElementById('email').value;
    var cicloValor = document.getElementById('ciclo').value;
    var obs = document.getElementById('obs').value;
    
    var checkboxes = document.getElementsByName('modulos');
    var modulosTexto = "";
    
    // Construir texto de módulos seleccionados
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            if (modulosTexto !== "") {
                modulosTexto = modulosTexto + ", ";
            }
            modulosTexto = modulosTexto + checkboxes[i].value;
        }
    }
    
    if (modulosTexto === "") {
        modulosTexto = "Ninguno";
    }
    
    if (obs === "") {
        obs = "Ninguna";
    }
    
    // Crear el HTML del resumen
    var resumenHTML = '<h3>Resumen de Matrícula - ' + nombre + '</h3>' +
        '<p><strong>Nombre:</strong> ' + nombre + '</p>' +
        '<p><strong>Edad:</strong> ' + edadValor + ' años</p>' +
        '<p><strong>Email:</strong> ' + emailValor + '</p>' +
        '<p><strong>Ciclo:</strong> ' + cicloValor + '</p>' +
        '<p><strong>Módulos:</strong> ' + modulosTexto + '</p>' +
        '<p><strong>Observaciones:</strong> ' + obs + '</p>';
    
    document.getElementById('resumen').innerHTML = resumenHTML;
});

// Botón Limpiar
document.getElementById('btnReset').addEventListener('click', function() {
    // Limpiar campos
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('email').value = '';
    document.getElementById('ciclo').value = '';
    document.getElementById('obs').value = '';
    
    // Desmarcar checkboxes
    var checkboxes = document.getElementsByName('modulos');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    document.getElementById('acepto').checked = false;
    
    // Limpiar estilos
    var campos = document.querySelectorAll('input, select, textarea');
    for (var i = 0; i < campos.length; i++) {
        campos[i].style.borderColor = '';
        campos[i].style.backgroundColor = '';
    }
    
    // Limpiar mensajes
    var mensajes = document.querySelectorAll('.msg');
    for (var i = 0; i < mensajes.length; i++) {
        mensajes[i].textContent = '';
        mensajes[i].style.color = '';
    }
    
    // Limpiar resumen
    document.getElementById('resumen').innerHTML = '';
});

// Botón Recargar (BOM)
document.getElementById('btnReload').addEventListener('click', function() {
    location.reload();
});