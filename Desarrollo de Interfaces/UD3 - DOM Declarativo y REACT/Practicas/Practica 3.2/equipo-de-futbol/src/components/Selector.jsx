import React, { useEffect } from "react";
import { jugadoresPorPos, posiciones } from "../data";

/**
 * Componente Selector: Permite seleccionar posición y jugador,
 * y añadirlo al equipo
 */
const Selector = ({
  posSeleccionada,
  jugadorSeleccionado,
  onPosicionChange,
  onJugadorChange,
  onAñadir,
  maxJugadoresPorPos,
  contarJugadoresPorPos,
}) => {
  // Obtener jugadores disponibles para la posición seleccionada
  const jugadoresDisponibles = jugadoresPorPos[posSeleccionada] || [];

  // Verificar si se ha alcanzado el máximo para la posición seleccionada
  const maxAlcanzado =
    contarJugadoresPorPos(posSeleccionada) >=
    maxJugadoresPorPos[posSeleccionada];

  return (
    <div className="fila">
      <label>Posición:</label>
      <select
        id="pos"
        value={posSeleccionada}
        onChange={(e) => onPosicionChange(e.target.value)}
      >
        {posiciones.map((pos) => (
          <option key={pos.value} value={pos.value}>
            {pos.label}
          </option>
        ))}
      </select>

      <label>Jugador:</label>
      <select
        id="jug"
        value={jugadorSeleccionado}
        onChange={(e) => onJugadorChange(e.target.value)}
      >
        {jugadoresDisponibles.map((jugador) => (
          <option key={jugador} value={jugador}>
            {jugador}
          </option>
        ))}
      </select>

      <button id="add" onClick={onAñadir} disabled={maxAlcanzado}>
        Añadir
      </button>

      {maxAlcanzado && (
        <span
          style={{ color: "darkred", marginLeft: "10px", fontSize: "14px" }}
        >
          Máximo en esta posición alcanzado
        </span>
      )}
    </div>
  );
};

export default Selector;
