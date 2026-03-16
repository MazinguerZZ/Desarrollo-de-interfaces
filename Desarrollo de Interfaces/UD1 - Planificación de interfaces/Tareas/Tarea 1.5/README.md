# Tarea 1.5 — Actividad de Posicionamiento

**Módulo:** 2º DAM — Diseño de Interfaces · UD1 Planificación de interfaces

---

## Entrega

Archivo `tarea1.5_nombreapellido.pdf` con:

- Capturas de cada modificación realizada.
- Respuestas a las preguntas planteadas.
- Enlace al repositorio GitHub con las versiones modificadas.

*Enunciado original: diapositiva 57 del recurso UD1 — Planificación de interfaces.*

---

## Parte 1 — Valores de posicionamiento relativo y absoluto

Modifica los valores `top`, `left`, `bottom` y `right` en las clases `.relativo` y `.absoluto`. Observa cómo cambia la posición de cada caja dentro del contenedor.

**Documenta y responde:**
- ¿Qué sucede con el resto de las cajas? ¿Se mueven o no?

---

## Parte 2 — Eliminar `position: relative` del contenedor

Elimina `position: relative;` de la regla `.contenedor`.

**Documenta y responde:**
- ¿Dónde aparecen ahora las cajas con `position: absolute`? ¿Por qué?

---

## Parte 3 — Dirección de flujo con Flexbox

En la regla `.contenedor`, cambia la propiedad `flex-flow` probando estos tres valores en orden:

| Valor | Observación |
|-------|-------------|
| `flex-flow: row wrap;` | Comportamiento inicial |
| `flex-flow: row-reverse wrap;` | ¿Cómo cambian las posiciones? |
| `flex-flow: column wrap;` | ¿Cómo cambian las posiciones? |

**Documenta y responde:**
- ¿Cómo afecta cada valor a las posiciones iniciales de las cajas `static` y `relative`?

---

## Instrucciones generales

- Sube **cada versión modificada** a tu repositorio GitHub.
- Incluye capturas con el resultado visible en navegador para cada cambio.
- Comenta en el código qué modificación corresponde a cada versión.
