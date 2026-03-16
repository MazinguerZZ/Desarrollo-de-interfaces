# Tarea 2.6 — Función validar nombre

**Módulo:** 2º DAM — Diseño de Interfaces  
**Apertura:** lunes, 15 de diciembre de 2025 · **Cierre:** viernes, 19 de diciembre de 2025 a las 13:45

---

## Entrega

Archivo: `tarea2.6_nombreapellido.pdf`

Incluye en el PDF el script completo y una captura de pantalla de la validación funcionando.

---

## Punto de partida

Archivos [html_form_preview.html](https://github.com/MazinguerZZ/Desarrollo-de-interfaces/blob/main/Desarrollo%20de%20Interfaces/UD2%20-%20Manipulaci%C3%B3n%20e%20Interactividad%20de%20interfaces/Tareas/Tarea%202.6/Ejemplo%20Formulario/html_form_preview.html) y [css_form_preview.css](https://github.com/MazinguerZZ/Desarrollo-de-interfaces/blob/main/Desarrollo%20de%20Interfaces/UD2%20-%20Manipulaci%C3%B3n%20e%20Interactividad%20de%20interfaces/Tareas/Tarea%202.6/Ejemplo%20Formulario/css_form_preview.css) de la carpeta Formulario (Ejemplo).

---

## Instrucciones

A partir del HTML y CSS adjuntos, genera un script que:

1. **Detecte** la inserción de un valor en el campo `nombre` (evento `input`).
2. **Llame** a una función `validarNombre`.
3. La función debe mostrar el mensaje `"nombre inválido, inserte al menos tres caracteres"` — en consola y/o en el propio HTML — siempre que:
   - El campo esté **vacío**.
   - Se hayan insertado **menos de 3 caracteres**.

> El elemento `<small id="msgNombre">` del HTML ya está preparado para mostrar mensajes debajo del campo nombre.
