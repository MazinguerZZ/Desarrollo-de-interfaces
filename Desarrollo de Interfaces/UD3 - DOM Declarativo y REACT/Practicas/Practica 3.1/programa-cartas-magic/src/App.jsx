import { useState, useEffect } from "react";

// Componente Tarjeta que muestra la información de la carta
function Tarjeta(props) {
  return (
    <div>
      {/* Muestra el nombre de la carta */}
      <p> Nombre: {props.nombre}</p>

      {/* Muestra el rol de la carta */}
      <p> Rol: {props.rol}</p>

      {/* Muestra el subtipo de la carta */}
      <p> Subtipo: {props.subtipo}</p>

      {/* Muestra el sub-subtipo solo si el subtipo es "humanos" y existe subsubtipo */}
      {props.subtipo === "humanos" && props.subsubtipo && (
        <p> Sub-subtipo: {props.subsubtipo}</p>
      )}

      {/* Muestra un mensaje de error si el nombre está vacío */}
      {!props.nombre && (
        <p style={{ color: "red" }}>Debes escribir un nombre</p>
      )}
    </div>
  );
}

export default function App() {
  // Estado para almacenar el nombre de la carta
  const [nombre, setNombre] = useState("");

  // Estado para almacenar el rol de la carta (valor por defecto: "tierra")
  const [rol, setRol] = useState("tierra");

  // Estado para almacenar el subtipo de la carta
  const [subtipo, setSubtipo] = useState("");

  // Estado para almacenar el sub-subtipo (solo aplicable para humanos)
  const [subsubtipo, setSubsubtipo] = useState("");

  // Objeto que define los subtipos disponibles para cada rol
  const subtiposPorRol = {
    criatura: ["Voladoras", "Bestias", "Venenosas", "humanos", "orcos"],
    conjuro: ["dormir", "escudar", "inflamar", "curar"],
    encantamiento: [
      "aura regenerativa",
      "maldición",
      "Resurrección",
      "Ilusión",
    ],
    artefacto: ["anillo", "Arma", "armadura", "Maquinaria"],
    tierra: ["fuego", "agua", "tierra", "aire"],
  };

  // Efecto para resetear subtipo y sub-subtipo cuando cambia el rol
  useEffect(() => {
    setSubtipo("");
    setSubsubtipo(""); // También se resetea el sub-subtipo
  }, [rol]); // Se ejecuta cuando cambia el valor de 'rol'

  // Efecto para resetear sub-subtipo cuando el subtipo deja de ser "humanos"
  useEffect(() => {
    if (subtipo !== "humanos") {
      setSubsubtipo("");
    }
  }, [subtipo]); // Se ejecuta cuando cambia el valor de 'subtipo'

  return (
    <div className="App">
      <h1>Tarjeta de cartas Magic</h1>

      {/* Input para ingresar el nombre de la carta */}
      <input
        value={nombre}
        onChange={function (e) {
          setNombre(e.target.value);
        }}
        placeholder="Escribe tu nombre"
      />

      {/* Select para elegir el rol de la carta */}
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

      <br />
      <br />

      {/* Select para elegir el subtipo - las opciones dependen del rol seleccionado */}
      <label>
        Subtipo:
        <select
          value={subtipo}
          onChange={function (e) {
            setSubtipo(e.target.value);
          }}
        >
          <option value="">Selecciona un subtipo</option>
          {/* Genera dinámicamente las opciones según el rol actual */}
          {subtiposPorRol[rol]?.map((opcion, index) => (
            <option key={index} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </label>

      {/* Select para sub-subtipo - solo visible cuando subtipo es "humanos" */}
      {subtipo === "humanos" && (
        <>
          <br />
          <br />
          <label>
            Sub-subtipo:
            <select
              value={subsubtipo}
              onChange={function (e) {
                setSubsubtipo(e.target.value);
              }}
            >
              <option value="">Selecciona un sub-subtipo</option>
              <option value="guerrero">guerrero</option>
              <option value="mago">mago</option>
            </select>
          </label>
        </>
      )}

      <br />
      <br />

      {/* Componente Tarjeta que recibe todas las props para mostrar la información */}
      <Tarjeta
        nombre={nombre}
        rol={rol}
        subtipo={subtipo}
        subsubtipo={subsubtipo}
      />
    </div>
  );
}
