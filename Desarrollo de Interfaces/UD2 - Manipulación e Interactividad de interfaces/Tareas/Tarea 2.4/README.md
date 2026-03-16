# Tarea 2.4 — Selección y acceso a elementos del DOM

**Módulo:** 2º DAM — Diseño de Interfaces

---

## Entrega

Archivo: `tarea2.4_nombreapellido.pdf`

Abre los archivos `DOM_practica.html` y `dom_practica.css` en el navegador y realiza los ejercicios desde la consola (`F12 → Consola`). Captura las salidas y coméntalas.

---

## Ejercicios

**1.** Muestra en consola el HTML del elemento con id `titulo-principal` usando `document.getElementById`:
```js
document.getElementById("titulo-principal")
```

**2.** Muestra el primer elemento `<input>` del documento usando `getElementsByTagName`:
```js
document.getElementsByTagName("input")
```

**3.** Muestra el primer botón con clase `boton-accion` usando `getElementsByClassName`:
```js
document.getElementsByClassName("boton-accion")
```

**4.** Muestra el elemento cuyo atributo `name` sea `"password"` usando `getElementsByName` y muestra también su `value`:
```js
document.getElementsByName("password")
document.getElementsByName("password")[0].value
```

**5.** Muestra la última opción del `select` de rol usando `querySelector`:
```js
document.querySelector("[name='rol'] > option:last-child")
```

**6.** Recorre con un bucle todas las tareas (clase `tarea`) usando `querySelectorAll` y muestra su `textContent`:
```js
document.querySelectorAll(".tarea")
```

**7.** Cambia el nombre de usuario de `"Invitado"` a tu nombre usando `textContent`:
```js
document.getElementById("nombre-usuario").textContent = "TuNombre"
```

**8.** Añade una nueva tarea al final de la lista usando `createElement`, `classList.add` y `appendChild`:
```js
let nuevaTarea = document.createElement("li")
nuevaTarea.classList.add("tarea")
nuevaTarea.textContent = "Nueva tarea añadida"
document.getElementById("lista-tareas").appendChild(nuevaTarea)
```

**9.** Elimina la última tarea de la lista usando `lastElementChild.remove()`:
```js
document.getElementById("lista-tareas").lastElementChild.remove()
```

**10.** *(Reto)* Usa `addEventListener` desde la consola para:

- Que al hacer clic en `#btn-guardar` se muestre un mensaje en consola:
```js
document.getElementById("btn-guardar").addEventListener("click", function() {
  console.log("Cambios guardados")
})
```

- Que al hacer clic en `#btn-borrar-ultima` se borre la última tarea:
```js
document.getElementById("btn-borrar-ultima").addEventListener("click", function() {
  document.getElementById("lista-tareas").lastElementChild.remove()
})
```
