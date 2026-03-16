//Ejercicio 1

let nombre = "Adrian";
let edad = 19;
let altura = 1.78;
let esAlumno = true;

console.log(nombre);
console.log(edad);
console.log(altura);
console.log(true);


// Ejercicio 2 
// Da error
/*
const pi = 3.1416;
pi = 3456
console.log(pi)
*/

// Ejercicio 3

let alumno = {
    nombre: "Adrian",
    edad: 19,
    curso: "DAM"
}

console.log(alumno)
console.log(alumno.nombre)


// Ejercicio 4

let notas = [1,3,5]

console.log(notas[0])
console.log(notas[2])

notas.push(10)

console.log(notas)


// Ejercicio 5 
/*
if (true) {
    var marca = "Sony"
    let empresa = "EA"
    const ciudad = "Madrid"
}

console.log(marca)
console.log(empresa)
console.log(ciudad) */

// Da error cuando intento mostrar el let


// Ejercicio 6
"use strict";
x = 10;
console.log(x);
// Me da el resultado de 10

"use strict";
let y = 100;
console.log(y);

// Ahora me pone 100


// Ejercicio 7
let a = 10
let b = 3

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


// Ejercicio 8
var base = 15
var altura2 = 10;
try {
    base>=0
    altura2>=0
    console.log("Ejercicio 8: " + base*altura2)
} catch (error) {
    console.log("Esa variable no esta permitida")
}


// Ejercicio 9
console.log("Ejercicio 9: " + base ** altura2)
console.log("Ejercicio 9: " + base ** altura2)
console.log("Ejercicio 9: " + base ^ altura2)

// NO SE HACER EL CUBO, NI LA RAIZ CUBICA

// Ejercicio 10
let n = 5
// Primero incremento y luego muestro
console.log("Ejercicio 10: " + ++n)
// Primero muestro y despues incremento
console.log("Ejercicio 10: " + n++)
// Ahora deberia salir 7
console.log("Ejercicio 10: " + n)


// Ejercicio 11
var x = 20
console.log("Ejercicio 11: ", x-=5)
console.log("Ejercicio 11: ", x*=2)
console.log("Ejercicio 11: ", x/=5)


// Ejercicio 12
console.log("10" -3)
// Me da 7
console.log("10" + 3)
// Aqui me da 103


// Ejercicio 13
// True
console.log(5 == "5")
// False
console.log(5 === "5")
// True
console.log(0 == false)
// False
console.log(0 === false)
// True
console.log(1!== "1")
// False
console.log(1!= true)


// Ejercicio 14
let edad1 = 15
let edad2 = 20

// Da false
console.log(edad1 > edad2)
// Da true
console.log(edad1 < edad2)
// Da false
console.log(edad1 == edad2)


// Ejercicio 15
// Da false porque cuenta los caracteres
console.log("casa" > "coche")
// Da true porque cuenta los caracteres
console.log("Perro" < "gato")
// Da true
console.log("A" < "a")


// Ejercicio 16
let nota = 7
if (nota>5) {
    console.log("Aprobado")
} else {
    console.log("Suspenso")
}


// Ejercicio 17
let edad3 = 22
let tieneCarnet = true
if (edad3 >= 18 && tieneCarnet==true) {
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}


// Ejercicio 18
let esFinDeSemana = false
let tieneDeberes = false
if (esFinDeSemana == true && tieneDeberes == false) {
    console.log("Puede salir")
} else {
    console.log("No puede salir")
}


// Ejercicio 19
let num = 18
if (10 <= n <= 20) {
    console.log(true)
} else {
    console.log(false)
}


// Ejercicio 20
// Da error porque se espera una expresion
// console.log(true &&)
// Corregida
console.log(true && true)


// Ejercicio 21
let number = 15
let string = "Hola"
let boolean = true
let objeto = {
    nombr: "Paco",
    lugar: "España"
}
let array = [6,8,10]
let nulo = null
let indefinido = undefined


// El typeof sirve para devolver el tipo que es cada declaracion
console.log(typeof number)
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof objeto)
console.log(typeof array)
console.log(typeof nulo)
console.log(typeof indefinido)


// Ejercicio 22
let frutas = ["Manzana", "Pera"]
console.log(typeof frutas)
// Le preguntamos si es array
console.log(frutas instanceof Array)
// Le preguntamos si es objeto
console.log(frutas instanceof Object)


// Ejercicio 23
let fecha = new Date()
console.log(typeof fecha)
// Le preguntamos si es array
console.log(fecha instanceof Date)
// Le preguntamos si es objeto
console.log(fecha instanceof Object)


// Ejercicio 24
// Da error porque se espera una expresion
//console.log(typeof)
console.log(typeof Array)


// Ejercicio 25
let nombre2 = "Adrian"
let apellido = "Alvarez"
// Se concatena sumando los string
console.log(nombre2 + apellido)


// Ejercicio 26
let mensaje = "Hola"
// Se va a concatenar
console.log(mensaje+="mundo")


// Ejercicio 27
// Se concatenan
console.log("5"+5)
console.log(5+"5")
// Se suma primero y despues se concatena
console.log(5+5+"5")
// Se concatenan
console.log("5"+5+5)


// Ejercicio 28
let palabra = "JavaScript"
// Te da el primer caracter
console.log(palabra[0])
// Te da el ultimo caracter
console.log(palabra[palabra.length-1])
// Te da la longitud de la palabra
console.log(palabra.length)
// No sale nada porque no hay caracter en la posaicion 100
console.log(palabra[100])


// Ejercicio 29
let texto = "hola"
// texto()
// El error que me da es que texto no es una funcion


// Ejercicio 30
let edad4 = 17
console.log((edad4 < 18) ? "Mayor de edad" : "Menor de edad")



// Ejercicio 31
let nota2 = 6
console.log((nota2 >= 5) ? "Aprobado" : "Suspenso")


//Ejercicio 32
let esAdmin = true
console.log((esAdmin == true) ? "Acceso total" : "Acceso limitado")