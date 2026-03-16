# Tarea 3.5 — Uso de Props

**Módulo:** 2º DAM — Diseño de Interfaces · UD3 DOM Declarativo y React  
**Apertura:** lunes, 2 de febrero de 2026 · **Cierre:** lunes, 9 de febrero de 2026 a las 09:05

---

## Entrega

Archivo: `tarea3.5_nombreapellido.pdf`

Incluye el código JSX y el preview de las dos mini-apps:

- **Formulario**
- **Lista de tareas**

---

## Instrucciones

Usando como base el proyecto de la lista dinámica con CRUD de las tareas anteriores, incorpora el uso de **props** en los componentes:

- Crea un componente `Tarjeta` que reciba y muestre una prop `nombre`:
```jsx
function Tarjeta(props) {
  return <p>Hola {props.nombre}</p>;
}
```

- Crea un componente `ItemTarea` que reciba las props `texto` y `onBorrar`:
```jsx
function ItemTarea(props) {
  return (
    <li>
      {props.texto}
      <button onClick={props.onBorrar}>X</button>
    </li>
  );
}
```

- Usa ambos componentes dentro de la función principal `App`, pasándoles sus props correspondientes.
