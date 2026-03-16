# Tarea 1.3 — Dashboard: Panel de Control con Grid

**Módulo:** 2º DAM — Diseño de Interfaces · UD1 Planificación de interfaces  
**Apertura:** viernes, 10 de octubre de 2025 · **Cierre:** miércoles, 15 de octubre de 2025 a las 23:59

---

## Entrega

Sube un único archivo PDF con:

| Contenido | Descripción |
|-----------|-------------|
| **Enlace a Git** | Repositorio con el código fuente |
| **Captura del resultado** | Pantallazo del dashboard en el navegador |

---

## Objetivo

Elabora la interfaz de un **panel de control** que cumpla los siguientes requisitos:

### Estructura general

| Elemento | Descripción |
|----------|-------------|
| `sidebar` | Tamaño fijo, con al menos un par de botones |
| `header` | Horizontal, ocupa todo el ancho |
| `main` | Contenedor principal con tarjetas `<div>` distribuidas en grid |
| `footer` | Ocupa todo el ancho |

Cada tarjeta del `main` tendrá una imagen (pueden ser imágenes repetidas).

---

## Requisitos CSS Grid

- Usa `grid-template-columns` y `grid-template-rows` para definir el layout general.
- Usa `grid-row` y `grid-column` para que el **sidebar ocupe 2 filas**.
- Respeta **tamaños fijos** donde se especifiquen. Se puede usar tamaño flexible (`1fr`, `auto`) donde no se indique un tipo fijo.
- Las tarjetas `<div>` del `main` estarán **separadas entre sí** con `gap` (o `grid-gap`).
- Las tarjetas **no tendrán flechas** ni elementos de navegación.
