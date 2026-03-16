# Práctica 2.5 — Proyecto de mini-app Web

**Módulo:** 2º DAM — Diseño de Interfaces  
**Apertura:** viernes, 9 de enero de 2026 · **Cierre:** viernes, 16 de enero de 2026 a las 22:15

> ⚠️ Esta actividad **pondera doble** como práctica y **computa como examen**.

---

## Entrega

### Repositorio GitHub
Repositorio público (o accesible para el profesor) con:

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Estructura del formulario |
| `styles.css` | Estilos de la aplicación |
| `script.js` | Lógica e interactividad |
| `README.md` | Breve explicación del proyecto |

Al menos **3 commits** en el historial.

### Presentación
Archivo PDF, PowerPoint o enlace con la presentación utilizada en clase.

---

## Objetivo

Crear una aplicación web sencilla con un formulario interactivo que:

- Reaccione a las acciones del usuario.
- Muestre mensajes y cambios visuales.
- Cree y elimine elementos dinámicamente.
- Permita guardar y restaurar información.

**Tema libre.** Algunas sugerencias: matrícula de módulos, alta de usuario, solicitud de material, inscripción a un evento, registro de datos.

---

## Requisitos

### Formulario (HTML)

El formulario debe contener al menos:

- Un campo de texto
- Un campo numérico
- Un campo de tipo email
- Un elemento `select`
- Un grupo de `checkbox` o `radio`
- Un `textarea`
- Un botón de envío

Todos los campos deben tener su `id` y `name`.

---

### Interactividad (JavaScript)

Usar `addEventListener` con al menos los siguientes eventos:

| Evento | Uso |
|--------|-----|
| `input` | Reacción en tiempo real al escribir |
| `change` | Cambio en select, checkbox o radio |
| `click` | Acción sobre botones |
| `submit` | Envío del formulario con `preventDefault` |

---

### Validaciones y experiencia de usuario

Validar obligatoriamente:

- Longitud mínima de un campo de texto.
- Rango correcto en un campo numérico.
- Email válido.
- Select obligatorio (no vacío).
- Al menos un checkbox marcado.

Cuando un campo no sea válido:
- Mostrar un **mensaje de error** visible.
- El campo debe **cambiar visualmente** (color, borde, etc.).

> ❌ No se deben usar `alert` como sistema principal de validación.

---

### Creación y eliminación dinámica de elementos (DOM)

La aplicación debe:

- **Crear** elementos dinámicamente (`createElement`, `appendChild`).
- **Eliminar** elementos del DOM (`remove` o `removeChild`).

Ejemplos: añadir opciones a un `select`, añadir o eliminar filas/bloques, eliminar elementos incorrectos.

---

### Botones y uso del BOM

Incluir al menos **dos botones** que usen funcionalidades del navegador, por ejemplo:

- Guardar datos → `localStorage`
- Restaurar datos → `localStorage`
- Recargar la página → `location.reload()`
- Imprimir → `window.print()`

---

### Mini-componentes (funciones propias)

Crear al menos **dos funciones reutilizables** propias que se usen más de una vez. Ejemplos:

- Una función que valide un campo.
- Una función que cree un elemento del DOM.
- Una función que muestre un mensaje.

---

### Métodos o funciones nuevas

Utilizar al menos **tres métodos o propiedades no explicados directamente en clase**. Ejemplos:

- `closest`
- `dataset`
- `classList.toggle`
- `insertAdjacentHTML`
- `localStorage`
- `navigator.onLine`

No es necesario que sean complicados, pero sí saber explicar para qué sirven.

---

## Balizas de trabajo en clase

### Baliza 1 — Diseño e interfaz *(viernes, sesión 1)*
- Tema del proyecto decidido.
- Repositorio GitHub creado.
- HTML con la estructura mínima del formulario.

### Baliza 2 — Primera interactividad *(viernes, sesión 2)*
- JavaScript enlazado correctamente.
- Primer `addEventListener` funcionando.
- Validación del nombre implementada.

### Baliza 3 — Validaciones completas *(lunes, sesión 3)*
- Todas las validaciones obligatorias implementadas.
- Submit controlado con `preventDefault`.

### Baliza 4 — DOM dinámico y BOM *(lunes, sesión 4)*
- Creación y eliminación dinámica de elementos.
- Uso de `localStorage` o algún método del BOM.

### Baliza 5 — Métodos nuevos y cierre *(miércoles)*
- Funciones reutilizables creadas.
- Métodos nuevos utilizados.
- Proyecto finalizado.

---

## Exposición oral (3 minutos)

Durante la exposición se debe mostrar:

1. Qué hace la aplicación.
2. Una validación implementada.
3. Un elemento creado o eliminado dinámicamente.
4. Una función propia (mini-componente).
5. Un método nuevo investigado.

> Cada alumno debe explicar al menos **una parte** del proyecto.

---

## Criterios de valoración

Se valorará especialmente:

- Que el proyecto **funcione correctamente**.
- Que el alumno **sepa explicar su código**.
- El **aprovechamiento del tiempo** de trabajo en clase.
