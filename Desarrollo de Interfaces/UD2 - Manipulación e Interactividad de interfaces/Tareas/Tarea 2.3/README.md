# Tarea 2.3 — Explorando el BOM

**Módulo:** 2º DAM — Diseño de Interfaces

---

## Entrega

Archivo: `tarea2.3_nombreapellido.pdf`

---

## Introducción

En el navegador, JavaScript tiene acceso a un conjunto de objetos especiales que representan el navegador, la ventana, la pantalla, la URL, las cookies, el historial y la página web (DOM). Todos forman parte del **BOM (Browser Object Model)** y cuelgan del objeto global `window`:
```js
window.location   // equivale a  location
window.navigator  // equivale a  navigator
window.document   // equivale a  document
```

Abre los archivos `tarea2.3_exploraPropiedades_BOM.html` y `tarea2.3_estilos.css` en el navegador y sigue las instrucciones de cada sección.

---

## 1. `navigator`

Escribe en la consola: `navigator` y despliega el objeto.

Escribe y observa el valor de cada propiedad:
```js
navigator.userAgent
navigator.language
navigator.platform
```

Captura las salidas y comenta la información obtenida.

---

## 2. `screen`

Escribe en la consola: `screen`

Captura el valor de:
```js
screen.width
screen.height
screen.availWidth
screen.availHeight
```

- ¿Cuál es la resolución de tu pantalla (ancho × alto)?
- ¿Qué diferencia hay entre `availHeight` y `height`?

---

## 3. `location`

Escribe en la consola: `location`

Obtén los siguientes valores:
```js
location.href
location.hostname
location.pathname
```

Prueba a cambiar la URL del navegador:
```js
location.href = "https://www.wikipedia.org";
```

- ¿Qué diferencia hay entre `href` y `pathname`?
- ¿Qué ocurre cuando modificas `location.href`?

---

## 4. `document`

Escribe en la consola: `document`
```js
document.title                          // Obtén el título de la página
document.title = "Nuevo título desde JS"; // Cámbialo temporalmente
document.body.nodeName                  // Comprueba el tipo de nodo del body
```

---

## 5. `history`

Escribe en la consola: `history`
```js
history.length    // ¿Cuántas páginas tiene el historial de esta pestaña?
history.back();   // Navegar hacia atrás
history.forward(); // Navegar hacia adelante
```

Captura las salidas.

> **Nota:** si no has navegado entre varias páginas en esa pestaña, estos métodos pueden no mover nada.

---

## 6. `console`

Prueba estos métodos de depuración y observa cómo se muestran de forma diferente en la consola. Captura las salidas:
```js
console.log("Esto es un log");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
console.table([1, 2, 3, 4]);
```

---

## 7. `performance`

Escribe en la consola: `performance`
```js
performance.now()  // ¿Qué te devuelve?
```

Mide el tiempo que tarda en ejecutarse un bucle sencillo:
```js
let inicio = performance.now();
for (let i = 0; i < 1_000_000; i++) {
  // Bucle vacío
}
let fin = performance.now();
console.log("Tiempo:", fin - inicio, "ms");
```

Captura y comenta los resultados.

---

## 8. `document.cookie`
```js
document.cookie                                  // Mira las cookies actuales
document.cookie = "usuario=Edu; max-age=300";   // Crea una cookie de prueba
document.cookie                                  // Vuelve a consultar las cookies
```

> **Nota:** por políticas de seguridad, algunas páginas limitan el uso de cookies desde la consola.

---

## Mini-reto final

Crea un pequeño script en la consola que muestre de forma ordenada la siguiente información del BOM:

- Navegador, idioma y plataforma.
- Resolución de pantalla.
- URL actual.
- Título del documento.
- Número de entradas en el historial.
- Tiempo que tarda en ejecutarse un bucle.
