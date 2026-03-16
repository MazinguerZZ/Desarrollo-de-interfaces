# Práctica 2.1 — Variables y operadores en JavaScript

**Nombre:** Adrián Álvarez Bombín  
**Fichero de entrega:** `practica2.1_nombreapellido.js` o `.html`

> - Escribe cada ejercicio **debajo del anterior**, sin borrar los previos.
> - Comenta con `//` lo que vayas haciendo y los errores que aparezcan (solo la primera vez por tipo de error).
> - Incluye capturas de la salida en consola para cada ejercicio.

---

## Parte A — Declaración de variables y tipos

**1.** Declara las variables `nombre` (string), `edad` (number), `altura` (float) y `esAlumno` (boolean). Muestra cada una con `console.log()`.

**2.** Declara una constante `PI` con valor `3.1416`. Intenta cambiar su valor y observa qué ocurre.

**3.** Crea un objeto `alumno` con propiedades `nombre`, `edad` y `curso`. Muestra el objeto entero y luego solo `alumno.nombre`.

**4.** Crea un array `notas` con 3 números. Muestra la primera nota, la última, y añade una nueva nota con valor `10`.

**5.** Dentro de un `if (true) { ... }` declara una variable con `var`, otra con `let` y otra con `const`. Intenta acceder a ellas fuera del `if` y anota qué pasa.

**6.** Escribe este código, observa el resultado y coméntalo. Después repite el ejercicio declarando la variable correctamente:
```js
"use strict";
x = 10;
console.log(x);
```

---

## Parte B — Operadores aritméticos

**7.** Declara `a = 10` y `b = 3`. Muestra en consola: `a + b`, `a - b`, `a * b`, `a / b`, `a % b`.

**8.** Declara `base` y `altura`. Calcula el área de un rectángulo y muéstrala. Incluye manejo de errores para valores no permitidos.

**9.** Usando el operador de exponente `**`, calcula:
- El cuadrado de un número.
- El cubo de un número.
- La raíz cúbica de un número.

**10.** Declara `n = 5`. Muestra en consola el resultado de cada línea y comenta qué ha pasado en cada paso:
```js
console.log(++n);
console.log(n++);
console.log(n);
```

**11.** Declara `x = 20`. Usa en este orden: `x -= 5`, `x *= 2`, `x /= 5`, mostrando `x` después de cada operación.

**12.** Prueba estas dos líneas y compara los resultados:
```js
console.log("10" - 3);
console.log("10" + 3);
```

---

## Parte C — Operadores de comparación

**13.** Escribe estas comparaciones y anota si son `true` o `false`. Comenta cada resultado:
```js
5 == "5"
5 === "5"
0 == false
0 === false
1 !== "1"
1 != true
```

**14.** Declara `edad1` y `edad2`. Muestra mensajes en consola indicando si `edad1` es mayor, menor o igual que `edad2`.

**15.** Comprueba el resultado de:
```js
"casa" > "coche"
"Perro" < "gato"
"A" < "a"
```

**16.** Declara una variable `nota`. Muestra `"Aprobado"` si es mayor o igual que 5, o `"Suspenso"` si es menor. Usa `if...else`.

---

## Parte D — Operadores lógicos

**17.** Declara `edad = 22` y `tieneCarnet = true`. Crea una expresión lógica que sea `true` solo si la persona puede conducir (mayor o igual de 18 **y** tiene carnet).

**18.** Declara `esFinDeSemana` y `tieneDeberes` (boolean). Escribe una expresión lógica que sea `true` solo si puede salir con amigos: puede salir si es fin de semana **y** ha realizado todos los deberes.

**19.** Crea una expresión que sea `true` solo si un número `n` está entre 10 y 20 (incluidos). Prueba con varios valores de `n`.

**20.** Escribe esta línea, observa el error, y luego corrígela para que sea una expresión válida:
```js
console.log(true &&);
```

---

## Parte E — Operadores de tipo

**21.** Crea variables de tipo `number`, `string`, `boolean`, objeto (`{}`), array (`[]`), `null` y `undefined`. Muestra `typeof` de cada una y comenta los resultados.

**22.** Crea `frutas = ["manzana", "pera"]`. Muestra y comenta:
```js
typeof frutas
frutas instanceof Array
frutas instanceof Object
```

**23.** Crea `fecha = new Date()`. Muestra y comenta:
```js
typeof fecha
fecha instanceof Date
fecha instanceof Object
```

**24.** Escribe `console.log(typeof);` y observa qué ocurre. Después corrígelo para que funcione.

---

## Parte F — Operadores con strings

**25.** Declara `nombre = "Lucía"` y `apellido = "García"`. Crea `nombreCompleto` concatenando ambos con un espacio y muéstralo.

**26.** Declara `mensaje = "Hola"`. Usa `+=` para añadir `" mundo"` y muéstralo.

**27.** Escribe estas líneas y anota los resultados:
```js
"5" + 5
5 + "5"
5 + 5 + "5"
"5" + 5 + 5
```

**28.** Declara `palabra = "JavaScript"`. Muestra y comenta qué obtienes en cada caso:
- El primer carácter.
- El último carácter.
- La longitud con `.length`.
- `palabra[100]`.

**29.** Escribe el siguiente código, observa el error que se genera y coméntalo:
```js
let texto = "hola";
texto();
```

---

## Parte G — Operador ternario

**30.** Declara `edad`. Usa el operador ternario para guardar en `mensaje` el texto `"Mayor de edad"` o `"Menor de edad"` según el valor, y muestra `mensaje`.

**31.** Declara `nota`. Usa el ternario para mostrar `"Aprobado"` si la nota es ≥ 5 y `"Suspendido"` si es menor.

**32.** Declara `esAdmin` (boolean). Usa el ternario para mostrar `"Acceso total"` si es `true` o `"Acceso limitado"` si es `false`. Prueba cambiando el valor de `esAdmin`.
