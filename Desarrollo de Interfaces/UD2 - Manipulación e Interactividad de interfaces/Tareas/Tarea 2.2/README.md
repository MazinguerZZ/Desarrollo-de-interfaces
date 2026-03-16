# Práctica 2.2 — Juego de los errores

**Módulo:** 2º DAM — Diseño de Interfaces

---

## Entrega

| Archivo | Contenido |
|---------|-----------|
| `practica2.2_nombreapellido.pdf` | Capturas de pantalla de los errores en consola y las salidas correctas |
| `practica2.2_nombreapellido.js` | Código depurado con comentarios indicando dónde estaba cada error |

---

## Instrucciones

Se adjunta el archivo `errores.js` con 17 ejercicios. En cada bloque hay **al menos un error**.

1. Usa tu plantilla HTML para lanzar los ejercicios uno a uno.
2. Captura el error que devuelve la consola.
3. Corrige el ejercicio y captura la salida correcta.
4. Comenta en el código dónde estaba el error.

---

## Ejercicios
```js
/* EJERCICIO 1
Función que recibe una base y un exponente y devuelve base ** exponente.
Mostrar en consola el resultado para 2^3 y 5^2.*/

function potencia(base, exponente) {
  return base ** exponente;
}

console.log("2 elevado a 3 es", potencia(2));
console.log("5 elevado a 2 es", potencia(5, 2));

/* EJERCICIO 2 dedicado a A. Carpena
Calcular la media de un array de números usando una función mediaArray.
Debe mostrar en consola la media de [5, 7, 9].*/

function mediaArray(numeros) {
  let suma = 0;
  for (let i = 0; i <= numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.lenght;
}

let notas = [5, 7, 9];
console.log("La media es", mediaArray(notas));

/* EJERCICIO 3 
Crear un objeto alumno con nombre, edad y un método presentar()
que muestre "Soy <nombre> y tengo <edad> años".*/

let alumnoEj3 = {
  nombre: "Ana",
  edad: 20,
  presentar: function() {
    console.log("Soy " + this.nombre + " y tengo " + this.edadd + " años");
  }
};

alumnoEj3.presentar();

/* EJERCICIO 4
Constructor Modulo(nombre, examen, tareas, practicas)
y método media() con ponderación 35%, 15%, 50%.
Crear un módulo "Desarrollo de Interfaces" y mostrar su media.*/

function Modulo(nombre, examen, tareas, practicas) {
  this.nombre = nombre;
  this.examen = examen;
  this.tareas = tareas;
  this.practicas = practicas;
  this.positivos = this.positivos;
}

Modulo.prototype.media = function() {
  return examen * 0.30 + this.tareas * 0.20 + this.practicas * 0.45 + this.positivos * 0.05;
};

let diEj4 = Modulo("Desarrollo de Interfaces", 7, 8, 9, 10);
console.log("Media DI:", diEj4.media());

/* EJERCICIO 5
Función que recibe un array de nombres y muestra uno a uno con un for...of.
Probar con ["Ana","Luis","Marta"].*/

function mostrarNombres(lista) {
  for nombre of lista {
    console.log(nombre);
  }
}

mostrarNombres(["Ana", "Luis", "Marta"]);

/* EJERCICIO 6
Función esMayorDeEdad(edad) que devuelve true si edad >= 18.
Mostrar por consola el resultado para 16 y 20.*/

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("16 es mayor de edad?", esMayorDeEdad());
console.log("20 es mayor de edad?", esMayorDeEdad(20));

/* EJERCICIO 7
Crear un objeto cuenta con saldo y un método ingresar(cantidad)
que sume al saldo y muestre el saldo actualizado.*/

let cuentaEj7 = {
  saldo: 100,
  ingresar: function(cantidad) {
    saldo += cantidad;
    console.log("Saldo actual:", this.saldo);
  }
};

cuentaEj7.ingresar(50);

/* EJERCICIO 8
Función que recibe un array de números y devuelve un nuevo array
solo con los pares. Mostrar el resultado para [1,2,3,4,5,6].*/

function filtrarPares(numeros) {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 = 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}

console.log("Pares:", filtrarPares([1,2,3,4,5,6]));

/* EJERCICIO 9
Función que calcula el factorial de un número n (n * (n-1) * ... * 1).
Probar con el valor 5.*/

function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

console.log("Factorial de 5:", factorial());

/* EJERCICIO 10
Crear un array de objetos alumno {nombre, nota} y una función
que recorra el array y muestre "X ha sacado Y".*/

let alumnosEj10 = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 7 },
  { nombre: "Marta", nota: 9 }
];

function mostrarNotas(listaAlumnos) {
  for (let i = 0; i <= listaAlumnos.length; i++) {
    console.log(listaAlumnos[i].nombre + " ha sacado " + listaAlumnos[i].nota);
  }
}

mostrarNotas(alumnosEj10);

/* EJERCICIO 11
Función que recibe dos números y una operación ("sumar","restar")
y devuelve el resultado correspondiente.*/

function operar(a, b, operacion) {
  if (operacion === "sumar") {
    return a + b;
  } else if (operacion === "restar") {
    return a - b;
  } else {
    console.log("Operación no válida");
  }
}

let resultadoEj11 = operar(10, 5);
console.log("Resultado:", resultadoEj11);

/* EJERCICIO 12
Función que recibe un número y muestra en consola si es positivo,
negativo o cero.*/

function clasificarNumero(num) {
  if (num > 0) {
    console.log("Positivo");
  } else if (num < 0) {
    console.log("Negativo");
  } else if (num = 0) {
    console.log("Cero");
  }
}

clasificarNumero(0);

/* Función que recibe un array de strings y devuelve uno nuevo
con todos en mayúsculas.*/

function aMayusculas(lista) {
  let resultado = [];
  for (let texto of lista) {
    resultado.push(texto.toUppercase());
  }
  return resultado;
}

console.log(aMayusculas(["hola", "adios"]));

/* EJERCICIO 13
Crear un array de números y usar un bucle while para mostrar solo
los números mayores que 10.*/

let numerosEj13 = [4, 12, 7, 20, 15];
let indiceEj13 = 0;

while (indiceEj14 < numerosEj13.length) {
  if (numerosEj13[indiceEj13] > 10) {
    console.log(numerosEj13[indice]);
  }
  indiceEj13++;
}

/* EJERCICIO 14
Función que recibe un número de mes (1-12) y devuelve el nombre del mes.
Probar con el mes 3.*/

function nombreMes(mes) {
  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  return meses[mes];
}

console.log("Mes 3:", nombreMes(3));

/* EJERCICIO 15
Función que usa try/catch para dividir a entre b
y captura el error si b es 0.*/

function dividir(a, b) {
  try {
    if (b === 0) {
      throw "No se puede dividir entre cero";
    }
    return a / b;
  } catch error {
    console.log("Error:", error);
  }
}

console.log(dividir(10, 0));

/* EJERCICIO 16
Función que recibe un número y devuelve "par" o "impar".
Probar con 4 y 7.*/

function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log("4 es", parOImpar(4));
console.log("7 es", parOImpar());

/* EJERCICIO 17
Función que recibe un array de módulos (cada uno con nombre y notaFinal)
y devuelve la media de todas las notas finales (expediente).*/

function mediaExpediente(modulos) {
  let suma = 0;
  for (let modulo of modulos) {
    suma += modulo.notaFinal;
  }
  return suma / modulos.lenght;
}

let modulosEj13 = [
  { nombre: "DDI", notaFinal: 8 },
  { nombre: "ADAT", notaFinal: 7 },
  { nombre: "PROC", notaFinal: 9 }
];

console.log("Expediente:", mediaExpediente(modulosEj13))
```
