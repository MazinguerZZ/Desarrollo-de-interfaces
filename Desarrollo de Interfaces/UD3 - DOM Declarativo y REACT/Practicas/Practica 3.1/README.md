# Práctica 3.1 — Tipos y subtipos en una tarjeta mágica

**Módulo:** 2º DAM — Diseño de Interfaces · UD3 DOM Declarativo y React  

---

## Entrega

Archivo: `practica3.1_nombreapellido.pdf` con:

- Código JSX en **texto** (no captura), con las líneas comentadas.
- Capturas del Preview demostrando los requisitos.

---

## Punto de partida

Archivo [`tarjeta_friki.jsx`](https://github.com/MazinguerZZ/Desarrollo-de-interfaces/blob/main/Desarrollo%20de%20Interfaces/UD3%20-%20DOM%20Declarativo%20y%20REACT/Practicas/Practica%203.1/codigo%20base/tarjeta_friki.jsx) adjunto.

---

## Instrucciones

A partir del código JSX adjunto, desarrolla la interfaz de manera que:

### 1. Subtipos por rol

Cada tipo de rol tiene un **select secundario de subtipo** condicionado. Crea un estado de subtipo:
```jsx
const [subtipo, setSubtipo] = useState("");
```

Los subtipos para cada rol son:
```js
criatura:      ["Voladoras", "Bestias", "Venenosas", "humanos", "orcos"]
conjuro:       ["dormir", "escudar", "inflamar", "curar"]
encantamiento: ["aura regenerativa", "maldición", "Resurrección", "Ilusión"]
artefacto:     ["anillo", "Arma", "armadura", "Maquinaria"]
tierra:        ["fuego", "agua", "tierra", "aire"]
```

El select de subtipo se genera dinámicamente con `map()`, de forma que si `rol === "conjuro"`, `opcionesSubtipo` será `["dormir", "escudar", ...]`.

### 2. Sub-subtipo para "humanos"

El subtipo `"humanos"` tiene un **select adicional** (sub-subtipo) con los valores:
```js
["guerrero", "mago"]
```

### 3. Validación del nombre

Si el campo nombre está vacío, mostrar el mensaje:
```
"Debes escribir un nombre"
```

---

## Requisitos

- El componente `Tarjeta` muestra correctamente **nombre**, **rol** y **subtipo**.
- El subtipo se **resetea** al cambiar de rol.
- El select de subtipo se genera con **`map()`**.
- Se usan **props** correctamente para `nombre`, `tipo`, `subtipo` y `subtipoHumano`.
