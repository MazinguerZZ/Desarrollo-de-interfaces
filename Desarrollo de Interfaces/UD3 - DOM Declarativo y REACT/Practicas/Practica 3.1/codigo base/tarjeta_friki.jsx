import { useState } from "react";

function Tarjeta(props) {
  return (
    <div>
      <p> Nombre: {props.nombre}</p>
      <p> Rol: {props.rol}</p>
    </div>
  );
}

export default function App() {
  const [nombre, setNombre] = useState("");

  //definimos un estado "rol"

  const [rol, setRol] = useState("tierra");

  return (
    <div className="App">
      <h1>Tarjeta</h1>
      <input
        value={nombre}
        onChange={function (e) {
          setNombre(e.target.value);
        }}
      />

      <label>
        Rol:
        <select
          value={rol}
          onChange={function (e) {
            setRol(e.target.value);
          }}
        >
          <option value="criatura">criatura</option>
          <option value="conjuro">conjuro</option>
          <option value="tierra">tierra</option>
          <option value="encantamiento">encantamiento</option>
          <option value="artefacto">artefacto</option>
        </select>
      </label>
      <Tarjeta nombre={nombre} rol={rol} />
    </div>
  );
}

