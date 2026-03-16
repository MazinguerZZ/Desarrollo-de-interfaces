# Práctica 3.2 — Equipo de Fútbol 11

**Módulo:** 2º DAM — Diseño de Interfaces · UD3 DOM Declarativo y React  
**Apertura:** viernes, 30 de enero de 2026 · **Cierre:** viernes, 6 de febrero de 2026 a las 10:15

---

## Entrega

- **Link del sandbox** (público y accesible).
- **`practica3.2_nombreapellido.pdf`** con capturas del código, pruebas y comentarios sobre cómo probar la interfaz.

---

## Objetivo

Migrar la app [`Formacion_Seleccion.html`](Formacion_Seleccion.html) — desarrollada con HTML + CSS + JS — a **React (JSX)** usando:

- Componentes
- `props` para pasar datos
- `useState` para manejar el estado
- Renderizado de listas con `map`
- Validaciones y mensajes de OK / ERROR

> El fichero adjunto incluye comentarios que sirven de ayuda para reconocer y construir en JSX el estado de la app y los props.

---

## Requisitos de la interfaz

La app permite seleccionar el **once titular de la selección española** y debe cumplir:

- Exactamente **11 jugadores** seleccionados.
- **Mínimos por línea:** 1 POR · 2 DEF · 2 MC · 1 DEL.
- **Máximos por línea:** 1 POR · 5 DEF · 5 MC · 4 DEL.
- **No se puede repetir** jugador.

### Botones

| Botón | Comportamiento |
|-------|---------------|
| Añadir | Añade el jugador seleccionado al equipo |
| Ordenar | Ordena por posición y alfabéticamente |
| Reset | Vacía el equipo |
| Confirmar | Solo se habilita si el equipo es válido |

---

## Estado en el componente padre
```jsx
posSeleccionada         // posición actualmente seleccionada
jugadorSeleccionado     // jugador actualmente seleccionado
equipo                  // array de objetos { nombre, pos }
mensaje                 // texto del mensaje de validación
tipoMensaje             // "ok" / "bad" (o booleano)
```

---

## Estructura recomendada en CodeSandbox
```
src/
├── App.jsx                   ← padre: estado + reglas
├── data.js                   ← jugadoresPorPos, min, max
├── styles.css
└── components/
    ├── Selector.jsx          ← select posición + select jugador + botón añadir
    ├── ListaEquipo.jsx       ← lista de convocados + botón borrar por jugador
    └── Resumen.jsx           ← contadores + estado de reglas + botón confirmar
```

> Cada componente debe incluir **comentarios** explicando qué hace cada bloque.
