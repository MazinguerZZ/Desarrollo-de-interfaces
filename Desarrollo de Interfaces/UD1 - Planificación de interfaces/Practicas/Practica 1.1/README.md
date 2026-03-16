# Práctica 1.1 — Miniactividades del recurso visto en clase

**Módulo:** 2º DAM — Diseño de Interfaces · UD1 Planificación de interfaces  
**Apertura:** viernes, 19 de septiembre de 2025 · **Cierre:** lunes, 22 de septiembre de 2025 a las 23:59

---

## Entrega

- **Enlace a GitHub** con el repositorio del trabajo.
- **PDF** con el análisis de tendencias y el análisis de la interfaz de usuario.

---

## Mini Actividad 1 — Tendencias de interfaces de usuario

Consulta las tendencias de desarrollo de interfaces de usuario (UI) de este año y el anterior. Compara dichas tendencias y analiza de qué tipo son las más actuales (gráficas, voz, etc.).

Puede que en la información que encuentres aparezcan los siguientes conceptos. Responde a estas preguntas:

**1.** ¿Qué significan los términos **hiperpersonalización** y **microinteracción**?

**2.** ¿Cómo se tiene en cuenta la **sostenibilidad** en el desarrollo de las nuevas interfaces?

**3.** Si se mencionan las **herramientas** utilizadas (IDEs, editores, lenguajes, wireframing…), ¿cuáles son?

---

## Mini Actividad 2 — Control de versiones y repositorio

Crea un `index.html` y un CSS de la temática que prefieras. Incluye tu nombre y apellidos como metadato o dentro del `<body>`. Añade un título y un párrafo, cuélgalo en el repositorio y comparte el enlace.

---

## Mini Actividad 3 — Análisis de userinyerface.com

Accede a https://userinyerface.com y realiza las dos partes siguientes:

**Parte 1:** Completa los pasos que pide la web y analiza tanto la interfaz del usuario (UI) como la experiencia del usuario (UX). Proponed mejoras de la interfaz.

- Para la **UI**: fíjate en colores, disposición de elementos, formularios y menús.
- Para la **UX**: centraros en vuestras propias emociones, analizad la facilidad de uso y cuán intuitivo es.

**Parte 2:** Una vez completada, vuelve a entrar y utiliza la herramienta de **inspección de Chrome** (`F12`) para ver errores en los elementos HTML y CSS. Utiliza el mismo inspector para implementar mejoras y correcciones y haz capturas de pantalla.

---

## Mini Actividad 4 — Posicionamiento CSS

Documenta las pruebas y sube las diferentes versiones a tu repositorio GitHub.

**Parte 1:** Modifica los valores `top`, `left`, `bottom` y `right` en las clases `.relativo` y `.absoluto`. Observa cómo cambia su posición dentro del contenedor. ¿Qué sucede con el resto de las cajas: se mueven o no?

**Parte 2:** Elimina `position: relative;` del `.contenedor`. ¿Dónde aparecen ahora las cajas `absolute`?

**Parte 3:** En la regla `.contenedor`, cambia la dirección de flujo: `flex-flow: row wrap;` primero por `flex-flow: row-reverse wrap;` y luego por `flex-flow: column wrap;`. Observa cómo cambian las posiciones iniciales de los `static` y `relative`.

---

## Mini Actividad 5 — Mini reto z-index

Haz que la **Caja 1** aparezca encima de todas las cajas y contenedores, sin modificar el HTML ni usar `position: fixed`. Explica con comentarios en el código cómo lo has conseguido.
