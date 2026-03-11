import React, { useState, useEffect } from "react";
import {
  jugadoresPorPos,
  maxJugadoresPorPos,
  minJugadoresPorPos,
} from "./data";
import Selector from "./components/Selector";
import ListaEquipo from "./components/ListaEquipo";
import Resumen from "./components/Resumen";
import "./styles.css";

/**
 * Componente principal de la aplicación
 * Gestiona el estado global y las reglas de validación
 */
function App() {
  // Estado principal de la aplicación
  const [posSeleccionada, setPosSeleccionada] = useState("POR");
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState("");
  const [equipo, setEquipo] = useState([]);
  const [mensaje, setMensaje] = useState({ texto: "", tipo: "" });

  // Inicializar jugador seleccionado cuando cambia la posición
  useEffect(() => {
    const jugadores = jugadoresPorPos[posSeleccionada];
    if (jugadores && jugadores.length > 0) {
      setJugadorSeleccionado(jugadores[0]);
    }
  }, [posSeleccionada]);

  /**
   * Función para contar jugadores por posición
   */
  const contarJugadoresPorPos = (pos) => {
    return equipo.filter((j) => j.pos === pos).length;
  };

  /**
   * Validar si se cumplen los mínimos por posición
   */
  const cumpleMinimos = () => {
    return (
      contarJugadoresPorPos("POR") >= minJugadoresPorPos.POR &&
      contarJugadoresPorPos("DEF") >= minJugadoresPorPos.DEF &&
      contarJugadoresPorPos("MC") >= minJugadoresPorPos.MC &&
      contarJugadoresPorPos("DEL") >= minJugadoresPorPos.DEL
    );
  };

  /**
   * Validar si el equipo completo es válido
   */
  const equipoValido = () => {
    return equipo.length === 11 && cumpleMinimos();
  };

  /**
   * Manejar cambio de posición seleccionada
   */
  const handlePosicionChange = (pos) => {
    setPosSeleccionada(pos);
    setMensaje({ texto: "", tipo: "" });
  };

  /**
   * Manejar cambio de jugador seleccionado
   */
  const handleJugadorChange = (jugador) => {
    setJugadorSeleccionado(jugador);
  };

  /**
   * Añadir un jugador al equipo
   */
  const handleAñadir = () => {
    // Validar que no se exceda el máximo de jugadores
    if (equipo.length >= 11) {
      setMensaje({
        texto: "No puedes pasar de 11 jugadores.",
        tipo: "error",
      });
      return;
    }

    // Validar que el jugador no esté repetido
    const repetido = equipo.some((j) => j.nombre === jugadorSeleccionado);
    if (repetido) {
      setMensaje({
        texto: "Ese jugador ya está en el equipo.",
        tipo: "error",
      });
      return;
    }

    // Validar que no se exceda el máximo por posición
    if (
      contarJugadoresPorPos(posSeleccionada) >=
      maxJugadoresPorPos[posSeleccionada]
    ) {
      setMensaje({
        texto: "Máximo en esa posición.",
        tipo: "error",
      });
      return;
    }

    // Añadir jugador al equipo
    const nuevoEquipo = [
      ...equipo,
      { nombre: jugadorSeleccionado, pos: posSeleccionada },
    ];
    setEquipo(nuevoEquipo);
    setMensaje({ texto: "", tipo: "" });
  };

  /**
   * Borrar un jugador del equipo
   */
  const handleBorrarJugador = (index) => {
    const nuevoEquipo = equipo.filter((_, i) => i !== index);
    setEquipo(nuevoEquipo);
    setMensaje({ texto: "", tipo: "" });
  };

  /**
   * Ordenar el equipo por posición y nombre
   */
  const handleOrdenar = () => {
    const ordenPos = { POR: 0, DEF: 1, MC: 2, DEL: 3 };

    const equipoOrdenado = [...equipo].sort((a, b) => {
      if (ordenPos[a.pos] !== ordenPos[b.pos]) {
        return ordenPos[a.pos] - ordenPos[b.pos];
      }
      return a.nombre.localeCompare(b.nombre);
    });

    setEquipo(equipoOrdenado);
  };

  /**
   * Confirmar la alineación
   */
  const handleConfirmar = () => {
    if (!equipoValido()) {
      setMensaje({
        texto: "No se cumplen todas las reglas.",
        tipo: "error",
      });
      return;
    }

    setMensaje({
      texto: "¡Alineación confirmada!",
      tipo: "exito",
    });
  };

  /**
   * Reiniciar el equipo
   */
  const handleReset = () => {
    setEquipo([]);
    setMensaje({ texto: "", tipo: "" });
  };

  return (
    <div className="caja">
      <h1>España XI Titular</h1>
      <p>
        Reglas: 11 jugadores exactos.
        <br />
        Mínimos por línea: 1 PORTERO, 2 DEFENSAS, 2 MEDIOS, 1 DELANTERO.
        <br />
        Máximos por línea: 1 PORTERO, 5 DEFENSAS, 5 MEDIOS, 4 DELANTEROS.
        <br />
        No repetir jugador.
      </p>

      {/* Selector de jugadores */}
      <Selector
        posSeleccionada={posSeleccionada}
        jugadorSeleccionado={jugadorSeleccionado}
        onPosicionChange={handlePosicionChange}
        onJugadorChange={handleJugadorChange}
        onAñadir={handleAñadir}
        maxJugadoresPorPos={maxJugadoresPorPos}
        contarJugadoresPorPos={contarJugadoresPorPos}
      />

      {/* Mensaje de estado */}
      <div
        id="msg"
        className={
          mensaje.tipo === "exito"
            ? "ok"
            : mensaje.tipo === "error"
            ? "bad"
            : ""
        }
      >
        {mensaje.texto}
      </div>

      {/* Lista de jugadores seleccionados */}
      <ListaEquipo
        equipo={equipo}
        onBorrarJugador={handleBorrarJugador}
        onOrdenar={handleOrdenar}
      />

      {/* Resumen y validaciones */}
      <Resumen
        equipo={equipo}
        contarJugadoresPorPos={contarJugadoresPorPos}
        cumpleMinimos={cumpleMinimos}
        equipoValido={equipoValido}
        onConfirmar={handleConfirmar}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
