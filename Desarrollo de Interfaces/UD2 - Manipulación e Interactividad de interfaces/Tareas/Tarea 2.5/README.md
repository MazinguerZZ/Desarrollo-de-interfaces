# Tarea 2.5 — Creación de elementos en el DOM

**Módulo:** 2º DAM — Diseño de Interfaces

---

## Entrega

Archivo: `tarea2.5_nombreapellido.pdf`

Incluye el código JS de cada apartado y capturas comentadas del resultado (modificaciones o elementos creados).

---

## Punto de partida

Archivo `tarea2.5.html`:
```html
<h2 id="titulo">Panel de Tareas</h2>
<ul id="lista">
    <li class="item">Tarea 1</li>
    <li class="item">Tarea 2</li>
</ul>
<button id="btn-agregar">Agregar Tarea</button>
<button id="btn-borrar">Borrar última Tarea</button>
```

---

## Ejercicios

### 1. Acceso a elementos existentes

- Obtén el elemento `<ul>`.
- Obtén todos los elementos con clase `item`.
- Muestra en consola el texto de cada tarea de la lista usando un bucle.

### 2. Crear un elemento en la lista de tareas

- Crea una nueva tarea (ítem de lista) con `createElement`.
- Asigna como texto: `"tarea creada dinámicamente"`.
- Añade la clase `item`.
- Inserta el elemento en la lista.

### 3. Borrar la última tarea de la lista

- Selecciona el último ítem de la lista.
- Elimínalo del DOM.
- Si no hay tareas, muestra un mensaje en consola.

---

## Extra

Mediante `addEventListener("click", ...)`:

- Implementa el **punto 2** en el botón `Agregar Tarea`.
- Implementa el **punto 3** en el botón `Borrar última Tarea`.
