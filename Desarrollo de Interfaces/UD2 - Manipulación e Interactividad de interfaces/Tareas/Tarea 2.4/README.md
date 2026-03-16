# Tarea 2.4 — Selección y acceso a elementos del DOM

**Módulo:** 2º DAM — Diseño de Interfaces

---

## Entrega

Archivo: `tarea2.4_nombreapellido.pdf`

Abre los archivos `DOM_practica.html` y `dom_practica.css` en el navegador y realiza los ejercicios desde la consola (`F12 → Consola`). Captura las salidas y coméntalas.

---

## Ejercicios

**1.** Muestra en consola el HTML del elemento con id `titulo-principal` usando `document.getElementById`.

**2.** Muestra el primer elemento `<input>` del documento usando `getElementsByTagName`.

**3.** Muestra el primer botón con clase `boton-accion` usando `getElementsByClassName`.

**4.** Muestra el elemento de formulario cuyo atributo `name` sea `"password"` usando `getElementsByName` y luego muestra su `value`.

**5.** Muestra la última opción del `select` de rol usando:
```js
querySelector("[name='rol'] > option:last-child")
```

**6.** Recorre con un bucle todas las tareas (elementos con clase `tarea`) usando `querySelectorAll` y muestra su `textContent`.

**7.** Cambia el nombre de usuario de `"Invitado"` a tu nombre usando:
```js
document.getElementById("nombre-usuario").textContent
```

**8.** Añade una nueva tarea al final de la lista usando `createElement`, `classList.add` y `appendChild`.

**9.** Elimina la última tarea de la lista usando `lista.lastElementChild.remove()`.

**10.** *(Reto)* Usa `addEventListener` desde la consola para:
- Que al hacer clic en `#btn-guardar` se muestre un mensaje en consola.
- Que al hacer clic en `#btn-borrar-ultima` se borre la última tarea.
