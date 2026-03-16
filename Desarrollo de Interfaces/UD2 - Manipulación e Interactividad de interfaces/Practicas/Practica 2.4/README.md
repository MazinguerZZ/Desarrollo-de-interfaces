# Práctica 2.4 — Formulario con validaciones

**Módulo:** 2º DAM — Diseño de Interfaces  

---

## Entrega

| Archivo | Contenido |
|---------|-----------|
| `practica2.4_nombreapellido.pdf` | Capturas comentadas del resultado en el navegador |
| Enlace a GitHub → carpeta `practica2.4/` | `index.html`, `styles.css`, `app.js` |

---

## Punto de partida

Usa el HTML + CSS de la carpeta **Formulario** con los que trabajaste en la tarea 2.6 y completa las validaciones en el mismo formulario.

---

## Validaciones a implementar

### 1. Edad
- Debe ser un número.
- Rango válido: entre **16 y 60**.
- El mensaje del `input` se muestra en **rojo** mientras el valor sea inválido y cambia a **verde** cuando sea válido.

### 2. Email
- Debe contener `@` y `.` con una longitud mínima de **6 caracteres**.
- No se admiten emails del dominio `yahoo.*`.
- El mensaje del `input` se muestra en **rojo** mientras el valor sea inválido y cambia a **verde** cuando sea válido.

### 3. Ciclo
- Debe haber una selección — no puede estar vacío.

### 4. Checkboxes
- Debe haber **al menos 2 casillas** marcadas.
- Validar recorriendo los checkboxes con un bucle `for`.

### 5. Aceptar condiciones
- Es obligatorio que esté marcado (`checked`).

### 6. Botones
- **Enviar** — valida el formulario y ejecuta el envío si todo es correcto.
- **Recargar** — vuelve a ejecutar la página (`location.reload()`).
- **Limpiar** — vacía todos los campos **sin** recargar la página.

### 7. Resumen al enviar
Si el formulario es válido, al pulsar *Enviar* aparece un **documento resumen** con el nombre del alumno y los valores de todos los campos rellenados y seleccionados.

### 8. Alerta de campos inválidos
Si hay algún campo no válido al intentar enviar, debe mostrarse un **mensaje de alerta** indicando cuál o cuáles campos no son válidos.

